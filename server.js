import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import {
  fields,
  universities,
  programs,
  getRecommendations,
  saveStudentAssessment,
  saveContactInquiry,
  studentAssessmentsStore,
  contactInquiriesStore
} from './db_data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API ENDPOINTS ---

/**
 * Health check & platform status
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    system: 'AI University Advisor - Backend API',
    database: 'In-Memory Relational Engine (Synchronized with SQL Schema)',
    timestamp: new Date().toISOString()
  });
});

/**
 * System statistics summary
 */
app.get('/api/stats', (req, res) => {
  res.json({
    success: true,
    total_universities: universities.length,
    total_programs: programs.length,
    total_fields: fields.length,
    total_assessments_taken: studentAssessmentsStore.length,
    total_inquiries: contactInquiriesStore.length
  });
});

/**
 * Get all fields of study
 */
app.get('/api/fields', (req, res) => {
  const fieldsWithCount = fields.map(f => {
    const fieldPrograms = programs.filter(p => p.field_id === f.field_id);
    return {
      ...f,
      program_count: fieldPrograms.length
    };
  });
  res.json({ success: true, count: fieldsWithCount.length, data: fieldsWithCount });
});

/**
 * Get universities list with optional search, field, and region filters
 */
app.get('/api/universities', (req, res) => {
  const { search, field, region, limit } = req.query;

  let filtered = universities.map(u => {
    const uniPrograms = programs
      .filter(p => p.university_id === u.university_id)
      .map(p => {
        const fld = fields.find(f => f.field_id === p.field_id);
        return {
          ...p,
          field_name: fld ? fld.field_name : ''
        };
      });
    return {
      ...u,
      program_count: uniPrograms.length,
      programs: uniPrograms
    };
  });

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(u =>
      u.university_name.toLowerCase().includes(q) ||
      u.code.toLowerCase().includes(q) ||
      u.location.toLowerCase().includes(q) ||
      u.description.toLowerCase().includes(q)
    );
  }

  if (region && region !== 'all') {
    filtered = filtered.filter(u => u.region.toLowerCase() === region.toLowerCase());
  }

  if (field && field !== 'all' && field !== 'ALL') {
    filtered = filtered.filter(u =>
      u.programs.some(p => p.field_name.toLowerCase().includes(field.toLowerCase()))
    );
  }

  if (limit) {
    filtered = filtered.slice(0, parseInt(limit));
  }

  res.json({ success: true, count: filtered.length, data: filtered });
});

/**
 * Get single university by ID with complete catalog
 */
app.get('/api/universities/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const uni = universities.find(u => u.university_id === id);

  if (!uni) {
    return res.status(404).json({ success: false, error: 'University not found' });
  }

  const uniPrograms = programs
    .filter(p => p.university_id === id)
    .map(p => {
      const fld = fields.find(f => f.field_id === p.field_id);
      return {
        ...p,
        field_name: fld ? fld.field_name : ''
      };
    });

  res.json({
    success: true,
    data: {
      ...uni,
      program_count: uniPrograms.length,
      programs: uniPrograms
    }
  });
});

/**
 * Get programs list
 */
app.get('/api/programs', (req, res) => {
  const fieldId = req.query.field_id ? parseInt(req.query.field_id) : null;
  const uniId = req.query.university_id ? parseInt(req.query.university_id) : null;
  const search = req.query.search ? req.query.search.toLowerCase() : null;

  let filtered = programs;
  if (fieldId) {
    filtered = filtered.filter(p => p.field_id === fieldId);
  }
  if (uniId) {
    filtered = filtered.filter(p => p.university_id === uniId);
  }
  if (search) {
    filtered = filtered.filter(p => p.program_name.toLowerCase().includes(search));
  }

  const detailed = filtered.map(p => {
    const uni = universities.find(u => u.university_id === p.university_id);
    const fld = fields.find(f => f.field_id === p.field_id);
    return {
      ...p,
      university_name: uni ? uni.university_name : 'Unknown',
      university_code: uni ? uni.code : '',
      detail_url: uni ? uni.detail_url : 'uniexp.html',
      field_name: fld ? fld.field_name : 'Unknown'
    };
  });

  res.json({ success: true, count: detailed.length, data: detailed });
});

/**
 * Direct recommendation query
 */
app.get('/api/recommendations', (req, res) => {
  const score = parseInt(req.query.total_marks || req.query.score) || 450;
  const gender = req.query.gender || 'any';
  const location = req.query.location || 'all';
  const learningStyle = req.query.learning_style || req.query.learningStyle || 'practical';

  // Support both comma-separated fields string and single field
  let fieldsList = [];
  if (req.query.fields) {
    fieldsList = req.query.fields.split(',').map(f => f.trim()).filter(Boolean);
  } else if (req.query.field && req.query.field !== 'ALL' && req.query.field !== 'all') {
    fieldsList = [req.query.field.trim()];
  }

  // Parse subject-specific marks if provided in query
  const marks = {
    myanmar: parseInt(req.query.myanmar) || 0,
    english: parseInt(req.query.english) || 0,
    mathematics: parseInt(req.query.mathematics || req.query.math) || 0,
    physics: parseInt(req.query.physics) || 0,
    chemistry: parseInt(req.query.chemistry) || 0,
    biology: parseInt(req.query.biology) || 0,
    history: parseInt(req.query.history) || 0,
    geography: parseInt(req.query.geography) || 0,
    economics: parseInt(req.query.economics) || 0
  };

  const matches = getRecommendations(score, gender, 'ALL', {
    fields: fieldsList,
    location,
    learningStyle,
    marks
  });

  res.json({
    success: true,
    query: { score, gender, fields: fieldsList, location },
    count: matches.length,
    eligible_count: matches.filter(m => m.eligible).length,
    interest_matched_count: matches.filter(m => m.is_interest_matched).length,
    data: matches
  });
});

/**
 * Save assessment and return recommendations
 */
app.post('/api/assessments', (req, res) => {
  try {
    const body = req.body || {};
    const assessment = saveStudentAssessment(body);

    const recommendations = getRecommendations(
      assessment.total_marks,
      assessment.gender,
      'ALL',
      {
        fields: assessment.fields,
        location: assessment.location,
        learningStyle: assessment.learning_style,
        marks: {
          myanmar: assessment.myanmar,
          english: assessment.english,
          mathematics: assessment.mathematics,
          physics: assessment.physics,
          chemistry: assessment.chemistry,
          biology: assessment.biology,
          history: assessment.history,
          geography: assessment.geography,
          economics: assessment.economics
        }
      }
    );

    res.json({
      success: true,
      assessment_id: assessment.student_id,
      score: assessment.total_marks,
      gender: assessment.gender,
      fields: assessment.fields,
      total_matches: recommendations.length,
      eligible_matches: recommendations.filter(r => r.eligible).length,
      interest_matches: recommendations.filter(r => r.is_interest_matched).length,
      recommendations
    });
  } catch (err) {
    console.error("Error processing assessment:", err);
    res.status(500).json({ success: false, error: "Failed to process assessment" });
  }
});

/**
 * Get latest assessment
 */
app.get('/api/assessments/latest', (req, res) => {
  if (studentAssessmentsStore.length === 0) {
    return res.json({ success: true, data: null });
  }
  const latest = studentAssessmentsStore[studentAssessmentsStore.length - 1];
  const recommendations = getRecommendations(
    latest.total_marks,
    latest.gender,
    'ALL',
    {
      fields: latest.fields,
      location: latest.location,
      learningStyle: latest.learning_style,
      marks: {
        myanmar: latest.myanmar,
        english: latest.english,
        mathematics: latest.mathematics,
        physics: latest.physics,
        chemistry: latest.chemistry,
        biology: latest.biology,
        history: latest.history,
        geography: latest.geography,
        economics: latest.economics
      }
    }
  );
  res.json({ success: true, assessment: latest, recommendations });
});

/**
 * Compare 2 or more universities by ID (e.g. ?ids=1,2,6)
 */
app.get('/api/compare', (req, res) => {
  const idsQuery = req.query.ids || '1,2,6';
  const ids = idsQuery.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));

  const compareList = ids.map(id => {
    const uni = universities.find(u => u.university_id === id);
    if (!uni) return null;
    const uniProgs = programs.filter(p => p.university_id === id);
    const avgCutoff = uniProgs.length > 0
      ? Math.round(uniProgs.reduce((acc, p) => acc + (p.min_score || 350), 0) / uniProgs.length)
      : 0;

    return {
      ...uni,
      program_count: uniProgs.length,
      average_cutoff: avgCutoff,
      top_programs: uniProgs.slice(0, 5).map(p => p.program_name)
    };
  }).filter(Boolean);

  res.json({ success: true, count: compareList.length, data: compareList });
});

/**
 * Save contact inquiry
 */
app.post('/api/contact', (req, res) => {
  try {
    const inquiry = saveContactInquiry(req.body);
    res.json({
      success: true,
      message: 'Your inquiry has been received. Our university advisor team will review and contact you shortly.',
      inquiry_id: inquiry.inquiry_id
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to save inquiry' });
  }
});

// --- STATIC FILE SERVING & ROUTING ---
const frontendDir = path.join(__dirname, 'frontend');
app.use(express.static(frontendDir));

// Route root / to home.html
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'home.html'));
});

// SPA fallback for HTML pages
app.get('/:page.html', (req, res, next) => {
  const filePath = path.join(frontendDir, `${req.params.page}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      next();
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI University Advisor server running on http://0.0.0.0:${PORT}`);
});
