// Database Data & Relational Schema Logic for AI University Advisor
// Derived from /database/university_recommendation_db.sql.sql

export const fields = [
  { field_id: 1, field_name: "Programming & Technology", icon: "💻", description: "Computer Science, Software Engineering, AI, Data Science", popular: true },
  { field_id: 2, field_name: "Engineering", icon: "🔧", description: "Civil, Mechanical, Electrical, Electronic, Mechatronics, Architecture", popular: true },
  { field_id: 3, field_name: "Medicine and health", icon: "🏥", description: "Medicine (MBBS), Dental, Pharmacy, Nursing, Medical Tech, Public Health", popular: true },
  { field_id: 4, field_name: "Economics", icon: "📊", description: "Commerce, Business Admin, Accounting, Statistics, Economics, Public Admin", popular: false },
  { field_id: 5, field_name: "Science", icon: "🔬", description: "Physics, Chemistry, Biochemistry, Biotechnology, Marine Science, Geology", popular: false },
  { field_id: 6, field_name: "Mathematics", icon: "📐", description: "Pure Mathematics, Applied Mathematics, Computational Statistics", popular: false },
  { field_id: 7, field_name: "Education", icon: "🎓", description: "Educational Science (BSc), Educational Arts (BA), Library Studies", popular: false },
  { field_id: 8, field_name: "Arts & Humanities", icon: "🏛️", description: "Law (LLB), International Relations, Political Science, Philosophy, History", popular: false },
  { field_id: 9, field_name: "Environment & Geography", icon: "🌿", description: "Environmental Studies, Geography, Fisheries, Water Resource Studies", popular: false },
  { field_id: 10, field_name: "Languages", icon: "🗣️", description: "English, Japanese, Chinese, Korean, French, German, Russian, Myanmar", popular: true },
  { field_id: 11, field_name: "Marine", icon: "⚓", description: "Nautical Science, Marine Engineering, Port & Harbour, Naval Architecture", popular: false }
];

export const universities = [
  {
    university_id: 1,
    code: "UIT",
    university_name: "University of Information Technology (UIT)",
    location: "Hlaing, Yangon",
    region: "Yangon",
    type: "Specialized State University",
    established: 2012,
    rating: "4.9",
    detail_url: "uitdetails.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOUxX5Lo6gssrtkj5XGwXlEXEw2W_QzZh-E5YvChvtwavNcTP98xGy4u8ooTPLckP-nw1zU7AubEE6XipS1rTWok46cwodbE0WDx7bc8egwOsHl2uVD3T0RDImITKB_J-Ev6S0MrD2sP0V_9QOysO_Fc_9ue27eCb1TkEbKZn2qyvX_KTGvzVmKTff1YAd_gH1StSsfz87ShXLdd8Q_5-mjzzhRSIgRqQbDCQGRnoHDgGu06grM4WQaTtvFUuVvqi3x2U",
    description: "Myanmar's premier specialized university in Information Technology, Software Engineering, AI, and Cybersecurity.",
    highlights: ["#1 in IT Education", "Center of Excellence", "High Industry Placement Rate"]
  },
  {
    university_id: 2,
    code: "YTU",
    university_name: "Yangon Technological University (YTU)",
    location: "Insein, Yangon",
    region: "Yangon",
    type: "Center of Excellence (COE)",
    established: 1924,
    rating: "4.9",
    detail_url: "ytu.html",
    image_url: "ytu.jpg",
    description: "The flagship engineering institution in Myanmar with state-of-the-art engineering laboratories and prestigious COE programs.",
    highlights: ["Oldest & Top Engineering University", "International Accreditation", "COE Programs"]
  },
  {
    university_id: 3,
    code: "WYTU",
    university_name: "West Yangon Technological University (WYTU)",
    location: "Htantabin, Yangon",
    region: "Yangon",
    type: "Public Technological University",
    established: 2005,
    rating: "4.6",
    detail_url: "westuni.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_B4xKx0Gf5_Z_9A4y28-e4b9F3p8Y2h4vL1_Zg9V0",
    description: "Major engineering university serving western Yangon, offering comprehensive Bachelor of Engineering programs.",
    highlights: ["Broad Engineering Specializations", "Strong Practical Training"]
  },
  {
    university_id: 4,
    code: "TTU",
    university_name: "Technological University, Thanlyin (TTU)",
    location: "Thanlyin, Yangon",
    region: "Yangon",
    type: "Public Technological University",
    established: 1999,
    rating: "4.5",
    detail_url: "eastuni.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx5Yk_A8u4v1_L0_Z29V7b4E1_Yg9V0",
    description: "Prominent technological university in the Thanlyin industrial corridor specializing in engineering degrees.",
    highlights: ["Industry Collaboration", "Modern Engineering Labs"]
  },
  {
    university_id: 5,
    code: "HBTU",
    university_name: "Technological University, Hmawbi (HBTU)",
    location: "Hmawbi, Yangon",
    region: "Yangon",
    type: "Public Technological University",
    established: 1999,
    rating: "4.5",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuHmawbi_Tech_01",
    description: "Leading engineering university located in northern Yangon region.",
    highlights: ["Applied Engineering", "Spacious Green Campus"]
  },
  {
    university_id: 6,
    code: "UCSY",
    university_name: "University of Computer Studies (UCSY)",
    location: "Shwe Pyi Thar / Hlawga, Yangon",
    region: "Yangon",
    type: "Center of Excellence (COE)",
    established: 1971,
    rating: "4.8",
    detail_url: "ucsy.html",
    image_url: "ucsy.jpg",
    description: "Pioneering computer science and technology university offering B.C.Sc and B.C.Tech degrees.",
    highlights: ["COE Computing Institution", "AI & Robotics Labs", "Top CS Alumni Network"]
  },
  {
    university_id: 7,
    code: "UM1",
    university_name: "University of Medicine 1 (UM1)",
    location: "Lanmadaw, Yangon",
    region: "Yangon",
    type: "Medical University",
    established: 1907,
    rating: "5.0",
    detail_url: "admission.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuUM1_Yangon_01",
    description: "The most prestigious and oldest medical school in Myanmar, training leading physicians and surgeons.",
    highlights: ["Top Medical Institution", "Teaching Hospital Affiliation", "Highest Admission Cutoffs"]
  },
  {
    university_id: 8,
    code: "UM2",
    university_name: "University of Medicine 2 (UM2)",
    location: "North Okkalapa, Yangon",
    region: "Yangon",
    type: "Medical University",
    established: 1963,
    rating: "4.9",
    detail_url: "admission.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuUM2_Yangon_02",
    description: "Premier medical university in eastern Yangon with extensive clinical facilities and research departments.",
    highlights: ["Excellence in Clinical Medicine", "Modern Hospital Complex"]
  },
  {
    university_id: 9,
    code: "UOPY",
    university_name: "University of Pharmacy (UOPY)",
    location: "Yangon",
    region: "Yangon",
    type: "Specialized Medical University",
    established: 1992,
    rating: "4.7",
    detail_url: "admission.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuPharmacy_Yangon",
    description: "Dedicated pharmaceutical university producing pharmacists and pharmaceutical research specialists.",
    highlights: ["Pharmaceutical Sciences", "Industry & Clinical Pharmacy"]
  },
  {
    university_id: 10,
    code: "UMT",
    university_name: "University of Medical Technology",
    location: "Yangon",
    region: "Yangon",
    type: "Specialized Health University",
    established: 1992,
    rating: "4.6",
    detail_url: "admission.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuMedTech_Yangon",
    description: "Trains specialized medical laboratory technologists, radiographers, and physiotherapists.",
    highlights: ["Diagnostic Tech", "Biomedical Laboratory"]
  },
  {
    university_id: 11,
    code: "UDM",
    university_name: "University of Dental Medicine",
    location: "Thingangyun, Yangon",
    region: "Yangon",
    type: "Specialized Medical University",
    established: 1964,
    rating: "4.8",
    detail_url: "admission.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDental_Yangon",
    description: "Leading institution for dental surgery, oral health sciences, and orthodontics.",
    highlights: ["B.D.S. Degree", "Specialized Dental Hospital"]
  },
  {
    university_id: 12,
    code: "UNursing",
    university_name: "University of Nursing",
    location: "Lanmadaw, Yangon",
    region: "Yangon",
    type: "Specialized Health University",
    established: 1991,
    rating: "4.6",
    detail_url: "admission.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuNursing_Yangon",
    description: "Dedicated to advancing nursing sciences and healthcare management in Myanmar.",
    highlights: ["B.N.Sc Degree", "Clinical Practice"]
  },
  {
    university_id: 13,
    code: "UPH",
    university_name: "University of Public Health",
    location: "Yangon",
    region: "Yangon",
    type: "Public Health University",
    established: 2007,
    rating: "4.5",
    detail_url: "admission.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuPublicHealth_Yangon",
    description: "Center for epidemiology, community health, and public health policy.",
    highlights: ["Public Health Sciences", "Global Health Partnerships"]
  },
  {
    university_id: 14,
    code: "YUFL",
    university_name: "Yangon University of Foreign Languages (YUFL)",
    location: "Kamayut, Yangon",
    region: "Yangon",
    type: "Specialized Languages University",
    established: 1964,
    rating: "4.8",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuYUFL_Yangon",
    description: "Myanmar's premier foreign language academy offering degree programs in 8 major international languages.",
    highlights: ["International Language Degrees", "Cultural Exchange Programs", "Diplomatic Pathways"]
  },
  {
    university_id: 15,
    code: "YUE-Hlaing",
    university_name: "Yangon University of Economics (Hlaing)",
    location: "Hlaing, Yangon",
    region: "Yangon",
    type: "Specialized Business & Economics",
    established: 1964,
    rating: "4.8",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuYUE_Hlaing",
    description: "Top university in Myanmar for commerce, accounting, business administration, and economic statistics.",
    highlights: ["BCom, BBA, BAct Programs", "Top Corporate Recruitment"]
  },
  {
    university_id: 16,
    code: "YUE-YTG",
    university_name: "Yangon University of Economics (Ywar Thar Gyi)",
    location: "Ywar Thar Gyi, Yangon",
    region: "Yangon",
    type: "Specialized Business & Economics",
    established: 2000,
    rating: "4.6",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuYUE_YTG",
    description: "Expansive economics campus delivering high-quality business, finance, and public administration degrees.",
    highlights: ["Modern Campus", "Broad Economics Disciplines"]
  },
  {
    university_id: 17,
    code: "Co-op",
    university_name: "Co-operative University, Thanlyin",
    location: "Thanlyin, Yangon",
    region: "Yangon",
    type: "Business & Co-operative University",
    established: 1994,
    rating: "4.4",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoop_Thanlyin",
    description: "Specialized university focusing on regional economics, microfinance, marketing, and business management.",
    highlights: ["Practical Business & Accounting", "Affordable Education"]
  },
  {
    university_id: 18,
    code: "YUOE",
    university_name: "Yangon University of Education (YUOE)",
    location: "Kamayut, Yangon",
    region: "Yangon",
    type: "Teacher Training & Education University",
    established: 1931,
    rating: "4.7",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuYUOE_Yangon",
    description: "Historic university dedicated to pedagogical training, educational science, and teacher development.",
    highlights: ["Government Teaching Cadre", "Comprehensive Arts & Science Education"]
  },
  {
    university_id: 19,
    code: "MMU",
    university_name: "Myanmar Maritime University (MMU)",
    location: "Thanlyin, Yangon",
    region: "Yangon",
    type: "Maritime & Naval Engineering",
    established: 2002,
    rating: "4.9",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuMMU_Thanlyin",
    description: "Myanmar's specialized maritime university offering international standard maritime and naval engineering degrees.",
    highlights: ["High Global Employment", "Nautical & Marine Engineering", "International STCW Standards"]
  },
  {
    university_id: 20,
    code: "MMMC",
    university_name: "Myanmar Mercantile Marine College (MMMC)",
    location: "Yangon",
    region: "Yangon",
    type: "Maritime College",
    established: 1963,
    rating: "4.5",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuMMMC_Yangon",
    description: "Renowned college training maritime officers, deck officers, and marine engineers.",
    highlights: ["Merchant Navy Careers", "Cadetship Programs"]
  },
  {
    university_id: 21,
    code: "NMDC",
    university_name: "National Management Degree College (NMDC)",
    location: "Botahtaung, Yangon",
    region: "Yangon",
    type: "Autonomous Degree College",
    established: 2004,
    rating: "4.7",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuNMDC_Yangon",
    description: "Modern college specializing in Business Management, Tourism & Hospitality, Journalism, and Professional English.",
    highlights: ["Tourism & Hospitality", "Media & Journalism", "Modern Curriculum"]
  },
  {
    university_id: 22,
    code: "NUAC",
    university_name: "National University of Arts and Culture (NUAC)",
    location: "Dagon Myothit (South), Yangon",
    region: "Yangon",
    type: "Arts & Culture University",
    established: 1993,
    rating: "4.5",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuNUAC_Yangon",
    description: "Preserves and promotes Myanmar traditional performing arts, music, dramatic arts, painting, and sculpture.",
    highlights: ["Visual & Performing Arts", "Cultural Heritage"]
  },
  {
    university_id: 23,
    code: "YU",
    university_name: "University of Yangon",
    location: "Kamayut, Yangon",
    region: "Yangon",
    type: "Flagship National University",
    established: 1920,
    rating: "5.0",
    detail_url: "yangonuni.html",
    image_url: "yangonuniversity.jpg",
    description: "The crown jewel of higher education in Myanmar, renowned for arts, pure sciences, law, and international relations.",
    highlights: ["Centennial Institution", "Historic Convocation Hall", "Top Research Departments"]
  },
  {
    university_id: 24,
    code: "Dagon",
    university_name: "Dagon University",
    location: "Dagon Myothit (East), Yangon",
    region: "Yangon",
    type: "Comprehensive State University",
    established: 1993,
    rating: "4.5",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDagon_Yangon",
    description: "One of the largest universities in Myanmar by student population, offering 20+ disciplines across science and arts.",
    highlights: ["Large Campus", "Broad Range of Majors", "Active Student Community"]
  },
  {
    university_id: 25,
    code: "UVS",
    university_name: "University of Veterinary Science, Yezin",
    location: "Yezin, Naypyitaw",
    region: "Other Regions",
    type: "Specialized Veterinary University",
    established: 1957,
    rating: "4.8",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuUVS_Yezin",
    description: "The sole veterinary medicine institution in Myanmar granting the Doctor of Veterinary Medicine (B.V.Sc.) degree.",
    highlights: ["Exclusive Veterinary Degree", "Research Farms & Animal Clinics"]
  },
  {
    university_id: 26,
    code: "UTM",
    university_name: "University of Traditional Medicine, Mandalay",
    location: "Aungmyethazan, Mandalay",
    region: "Other Regions",
    type: "Specialized Traditional Medicine",
    established: 2001,
    rating: "4.6",
    detail_url: "uniexp.html",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuUTM_Mandalay",
    description: "Myanmar's university dedicated to Indigenous Traditional Medicine, herbal pharmacology, and holistic healthcare.",
    highlights: ["B.T.M. Degree", "Herbal Research Gardens"]
  }
];

export const programs = [
  { program_id: 1, university_id: 7, field_id: 3, program_name: "M.B.,B.S. (UM1)", min_score: 450, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 252, min_eng_chem_bio_female: 259, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 2, university_id: 8, field_id: 3, program_name: "M.B.,B.S. (UM2)", min_score: 450, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 252, min_eng_chem_bio_female: 259, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 3, university_id: 11, field_id: 3, program_name: "B.D.S. (Dental Surgery)", min_score: 450, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 246, min_eng_chem_bio_female: 256, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 4, university_id: 10, field_id: 3, program_name: "B.Med.Tech (Medical Technology)", min_score: 466, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 5, university_id: 9, field_id: 3, program_name: "B.Pharm. (Pharmacy)", min_score: 452, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 6, university_id: 12, field_id: 3, program_name: "B.N.Sc. (Nursing)", min_score: 425, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 7, university_id: 13, field_id: 3, program_name: "B.P.H. (Public Health)", min_score: 396, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 8, university_id: 25, field_id: 3, program_name: "B.V.Sc. (Veterinary Science)", min_score: 416, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 9, university_id: 26, field_id: 3, program_name: "B.T.M. (Traditional Medicine)", min_score: 386, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 10, university_id: 1, field_id: 1, program_name: "B.C.Sc / B.C.Tech (UIT)", min_score: 480, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 11, university_id: 6, field_id: 1, program_name: "B.C.Sc / B.C.Tech (UCSY)", min_score: 397, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 12, university_id: 2, field_id: 2, program_name: "Civil Engineering", min_score: 0, min_score_male: 504, min_score_female: 498, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 346, min_4sub_female: 339 },
  { program_id: 13, university_id: 2, field_id: 2, program_name: "Mechanical Engineering", min_score: 0, min_score_male: 502, min_score_female: 476, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 331, min_4sub_female: 327 },
  { program_id: 14, university_id: 2, field_id: 2, program_name: "Electrical Power Engineering", min_score: 0, min_score_male: 484, min_score_female: 477, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 322, min_4sub_female: 327 },
  { program_id: 15, university_id: 2, field_id: 2, program_name: "Electronic Engineering", min_score: 0, min_score_male: 466, min_score_female: 500, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 329, min_4sub_female: 329 },
  { program_id: 16, university_id: 2, field_id: 2, program_name: "Computer Engineering & Information Technology", min_score: 0, min_score_male: 500, min_score_female: 496, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 333, min_4sub_female: 334 },
  { program_id: 17, university_id: 2, field_id: 2, program_name: "Mechatronic Engineering", min_score: 0, min_score_male: 491, min_score_female: 480, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 325, min_4sub_female: 326 },
  { program_id: 18, university_id: 2, field_id: 2, program_name: "Chemical Engineering", min_score: 0, min_score_male: 482, min_score_female: 492, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 310, min_4sub_female: 325 },
  { program_id: 19, university_id: 2, field_id: 2, program_name: "Textile Engineering", min_score: 0, min_score_male: 478, min_score_female: 491, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 316, min_4sub_female: 320 },
  { program_id: 20, university_id: 2, field_id: 2, program_name: "Mining Engineering", min_score: 0, min_score_male: 478, min_score_female: 467, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 315, min_4sub_female: 320 },
  { program_id: 21, university_id: 2, field_id: 2, program_name: "Petroleum Engineering", min_score: 0, min_score_male: 482, min_score_female: 489, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 318, min_4sub_female: 320 },
  { program_id: 22, university_id: 2, field_id: 2, program_name: "Metallurgical Engineering", min_score: 0, min_score_male: 468, min_score_female: 469, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 315, min_4sub_female: 319 },
  { program_id: 23, university_id: 2, field_id: 2, program_name: "Architecture", min_score: 0, min_score_male: 501, min_score_female: 486, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 333, min_4sub_female: 338 },
  { program_id: 24, university_id: 2, field_id: 2, program_name: "Telecommunication Engineering", min_score: 0, min_score_male: 472, min_score_female: 465, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 317, min_4sub_female: 321 },
  { program_id: 25, university_id: 2, field_id: 2, program_name: "Food Engineering", min_score: 0, min_score_male: 461, min_score_female: 468, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 315, min_4sub_female: 320 },
  { program_id: 26, university_id: 3, field_id: 2, program_name: "Civil Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 294, min_4sub_female: 294 },
  { program_id: 27, university_id: 3, field_id: 2, program_name: "Architecture", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 288, min_4sub_female: 288 },
  { program_id: 28, university_id: 3, field_id: 2, program_name: "Computer Engineering & Information Technology (CEIT)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 282, min_4sub_female: 282 },
  { program_id: 29, university_id: 3, field_id: 2, program_name: "Electronic Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 270, min_4sub_female: 270 },
  { program_id: 30, university_id: 3, field_id: 2, program_name: "Mechanical Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 269, min_4sub_female: 269 },
  { program_id: 31, university_id: 3, field_id: 2, program_name: "Electrical Power Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 266, min_4sub_female: 266 },
  { program_id: 32, university_id: 3, field_id: 2, program_name: "Mechatronic Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 261, min_4sub_female: 261 },
  { program_id: 33, university_id: 3, field_id: 2, program_name: "Chemical Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 258, min_4sub_female: 258 },
  { program_id: 34, university_id: 3, field_id: 2, program_name: "Metallurgical Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 247, min_4sub_female: 247 },
  { program_id: 35, university_id: 3, field_id: 2, program_name: "Textile Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 243, min_4sub_female: 243 },
  { program_id: 36, university_id: 3, field_id: 2, program_name: "Agricultural Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 240, min_4sub_female: 240 },
  { program_id: 37, university_id: 4, field_id: 2, program_name: "Civil Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 291, min_4sub_female: 291 },
  { program_id: 38, university_id: 4, field_id: 2, program_name: "Architecture", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 284, min_4sub_female: 284 },
  { program_id: 39, university_id: 4, field_id: 2, program_name: "Computer Engineering & Information Technology (CEIT)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 271, min_4sub_female: 271 },
  { program_id: 40, university_id: 4, field_id: 2, program_name: "Mechanical Engineering (ME)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 259, min_4sub_female: 259 },
  { program_id: 41, university_id: 4, field_id: 2, program_name: "Electronic Engineering (EC)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 252, min_4sub_female: 252 },
  { program_id: 42, university_id: 4, field_id: 2, program_name: "Mechatronic Engineering (MC)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 251, min_4sub_female: 251 },
  { program_id: 43, university_id: 4, field_id: 2, program_name: "Electrical Power Engineering (EP)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 249, min_4sub_female: 249 },
  { program_id: 44, university_id: 4, field_id: 2, program_name: "Chemical Engineering (CHE)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 246, min_4sub_female: 246 },
  { program_id: 45, university_id: 4, field_id: 2, program_name: "Petroleum Engineering (PE)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 246, min_4sub_female: 246 },
  { program_id: 46, university_id: 5, field_id: 2, program_name: "Civil Engineering", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 279, min_4sub_female: 279 },
  { program_id: 47, university_id: 5, field_id: 2, program_name: "Architecture", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 275, min_4sub_female: 275 },
  { program_id: 48, university_id: 5, field_id: 2, program_name: "Computer Engineering & Information Technology (CEIT)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 269, min_4sub_female: 269 },
  { program_id: 49, university_id: 5, field_id: 2, program_name: "Electronic Engineering (EC)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 256, min_4sub_female: 256 },
  { program_id: 50, university_id: 5, field_id: 2, program_name: "Electrical Power Engineering (EP)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 254, min_4sub_female: 254 },
  { program_id: 51, university_id: 5, field_id: 2, program_name: "Mechanical Engineering (ME)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 246, min_4sub_female: 246 },
  { program_id: 52, university_id: 5, field_id: 2, program_name: "Mechatronic Engineering (MC)", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 240, min_4sub_female: 240 },
  { program_id: 53, university_id: 15, field_id: 4, program_name: "Bachelor of Commerce (BCom)", min_score: 426, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 54, university_id: 15, field_id: 4, program_name: "Bachelor of Business Administration (BBA)", min_score: 412, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 55, university_id: 15, field_id: 4, program_name: "Bachelor of Accounting (BAct)", min_score: 410, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 56, university_id: 15, field_id: 4, program_name: "Bachelor of Economics (Statistics)", min_score: 404, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 57, university_id: 15, field_id: 4, program_name: "Bachelor of Economics (Economics)", min_score: 402, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 58, university_id: 15, field_id: 4, program_name: "Bachelor of Public Administration (BPA)", min_score: 394, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 59, university_id: 15, field_id: 4, program_name: "Bachelor of Economics (Development Studies)", min_score: 391, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 60, university_id: 15, field_id: 4, program_name: "Bachelor of Applied Science (BAS)", min_score: 389, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 61, university_id: 15, field_id: 4, program_name: "Bachelor of Political Science (BPS)", min_score: 386, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 62, university_id: 16, field_id: 4, program_name: "Bachelor of Commerce (BCom)", min_score: 383, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 63, university_id: 16, field_id: 4, program_name: "Bachelor of Business Administration (BBA)", min_score: 372, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 64, university_id: 16, field_id: 4, program_name: "Bachelor of Accounting (BAct)", min_score: 370, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 65, university_id: 16, field_id: 4, program_name: "Bachelor of Economics (Statistics)", min_score: 364, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 66, university_id: 16, field_id: 4, program_name: "Bachelor of Economics (Economics)", min_score: 360, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 67, university_id: 16, field_id: 4, program_name: "Bachelor of Public Administration (BPA)", min_score: 356, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 68, university_id: 16, field_id: 4, program_name: "Bachelor of Economics (Development Studies)", min_score: 352, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 69, university_id: 16, field_id: 4, program_name: "Bachelor of Applied Science (BAS)", min_score: 351, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 70, university_id: 16, field_id: 4, program_name: "Bachelor of Political Science (BPS)", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 71, university_id: 17, field_id: 4, program_name: "Co-operative & Business Degree", min_score: 301, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 72, university_id: 21, field_id: 4, program_name: "Business Management (BM)", min_score: 414, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 73, university_id: 21, field_id: 4, program_name: "English for Professional Purpose (EPP)", min_score: 376, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 74, university_id: 21, field_id: 4, program_name: "Tourism and Hospitality Management (THM)", min_score: 356, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 75, university_id: 21, field_id: 4, program_name: "Economic and Finance (EF)", min_score: 351, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 76, university_id: 21, field_id: 4, program_name: "Journalism (JNL)", min_score: 337, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 77, university_id: 23, field_id: 10, program_name: "Myanmar", min_score: 340, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 78, university_id: 23, field_id: 10, program_name: "English", min_score: 372, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 79, university_id: 23, field_id: 9, program_name: "Geography", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 80, university_id: 23, field_id: 9, program_name: "Environmental Studies", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 81, university_id: 23, field_id: 9, program_name: "Fisheries and Agriculture", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 82, university_id: 23, field_id: 9, program_name: "Environmental and Water Studies", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 83, university_id: 23, field_id: 9, program_name: "Environmental Science", min_score: 360, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 84, university_id: 23, field_id: 8, program_name: "History", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 85, university_id: 23, field_id: 8, program_name: "Philosophy", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 86, university_id: 23, field_id: 8, program_name: "Psychology", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 87, university_id: 23, field_id: 8, program_name: "Law", min_score: 360, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 88, university_id: 23, field_id: 8, program_name: "Oriental Studies", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 89, university_id: 23, field_id: 8, program_name: "International Relations", min_score: 371, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 90, university_id: 23, field_id: 8, program_name: "Political Science", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 91, university_id: 23, field_id: 8, program_name: "Anthropology", min_score: 300, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 92, university_id: 23, field_id: 8, program_name: "Archaeology", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 93, university_id: 23, field_id: 7, program_name: "Library and Information studies", min_score: 300, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 94, university_id: 23, field_id: 5, program_name: "Chemistry", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 95, university_id: 23, field_id: 5, program_name: "Biochemistry", min_score: 360, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 96, university_id: 23, field_id: 5, program_name: "Physics", min_score: 352, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 97, university_id: 23, field_id: 5, program_name: "Zoology", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 98, university_id: 23, field_id: 5, program_name: "Botany", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 99, university_id: 23, field_id: 5, program_name: "Marine Science", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 100, university_id: 23, field_id: 5, program_name: "Geology", min_score: 330, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 101, university_id: 23, field_id: 5, program_name: "Industrial Chemistry", min_score: 360, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 102, university_id: 23, field_id: 5, program_name: "Food Science", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 103, university_id: 23, field_id: 6, program_name: "Mathematics", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 104, university_id: 23, field_id: 1, program_name: "Computer Science", min_score: 385, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 105, university_id: 23, field_id: 2, program_name: "Engineering Physics", min_score: 350, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 106, university_id: 24, field_id: 1, program_name: "Computer Science", min_score: 345, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 107, university_id: 24, field_id: 5, program_name: "Industrial Chemistry", min_score: 340, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 108, university_id: 24, field_id: 5, program_name: "Physics", min_score: 314, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 109, university_id: 24, field_id: 5, program_name: "Nuclear Physics", min_score: 303, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 110, university_id: 24, field_id: 5, program_name: "Chemistry", min_score: 299, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 111, university_id: 24, field_id: 5, program_name: "Zoology", min_score: 275, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 112, university_id: 24, field_id: 5, program_name: "Botany", min_score: 257, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 113, university_id: 24, field_id: 5, program_name: "Geology", min_score: 251, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 114, university_id: 24, field_id: 5, program_name: "Biochemistry", min_score: 250, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 115, university_id: 24, field_id: 5, program_name: "Biotechnology", min_score: 250, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 116, university_id: 24, field_id: 5, program_name: "Microbiology", min_score: 240, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 117, university_id: 24, field_id: 8, program_name: "International Relations", min_score: 340, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 118, university_id: 24, field_id: 8, program_name: "Law (LLB)", min_score: 330, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 119, university_id: 24, field_id: 8, program_name: "Law (BA)", min_score: 305, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 120, university_id: 24, field_id: 8, program_name: "Literature", min_score: 273, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 121, university_id: 24, field_id: 8, program_name: "Psychology", min_score: 265, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 122, university_id: 24, field_id: 8, program_name: "History", min_score: 245, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 123, university_id: 24, field_id: 8, program_name: "Philosophy", min_score: 244, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 124, university_id: 24, field_id: 8, program_name: "Oriental Studies", min_score: 242, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 125, university_id: 24, field_id: 8, program_name: "Anthropology", min_score: 240, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 126, university_id: 24, field_id: 8, program_name: "Archaeology", min_score: 240, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 127, university_id: 24, field_id: 4, program_name: "Business Information Technology", min_score: 320, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 128, university_id: 24, field_id: 4, program_name: "Economics", min_score: 315, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 129, university_id: 24, field_id: 10, program_name: "English", min_score: 310, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 130, university_id: 24, field_id: 10, program_name: "Myanmar Language", min_score: 280, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 131, university_id: 24, field_id: 10, program_name: "Myanmar Studies", min_score: 240, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 132, university_id: 24, field_id: 6, program_name: "Mathematics", min_score: 294, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 133, university_id: 24, field_id: 9, program_name: "Geography", min_score: 255, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 134, university_id: 14, field_id: 10, program_name: "English", min_score: 466, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 135, university_id: 14, field_id: 10, program_name: "Japanese (Japan)", min_score: 442, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 136, university_id: 14, field_id: 10, program_name: "Chinese (China)", min_score: 437, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 137, university_id: 14, field_id: 10, program_name: "Korean", min_score: 434, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 138, university_id: 14, field_id: 10, program_name: "English for business purposes", min_score: 420, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 139, university_id: 14, field_id: 10, program_name: "French (France)", min_score: 409, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 140, university_id: 14, field_id: 10, program_name: "German", min_score: 405, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 141, university_id: 14, field_id: 10, program_name: "Russian", min_score: 402, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 142, university_id: 14, field_id: 10, program_name: "Thai (Thailand)", min_score: 402, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 143, university_id: 18, field_id: 7, program_name: "Science (BSc)", min_score: 0, min_score_male: 360, min_score_female: 392, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 144, university_id: 18, field_id: 7, program_name: "Art (BA)", min_score: 0, min_score_male: 340, min_score_female: 361, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 145, university_id: 18, field_id: 7, program_name: "Arts and Science (BASc)", min_score: 0, min_score_male: 360, min_score_female: 395, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 146, university_id: 22, field_id: 8, program_name: "National University of Arts and Culture Programs", min_score: 0, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 147, university_id: 19, field_id: 11, program_name: "Port and Harbour Engineering (PH)", min_score: 477, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 148, university_id: 19, field_id: 11, program_name: "Nautical Science (NS)", min_score: 475, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 149, university_id: 19, field_id: 11, program_name: "Marine Engineering (ME)", min_score: 473, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 150, university_id: 19, field_id: 11, program_name: "Marine Electrical System and Electronics Engineering (MESE)", min_score: 465, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 151, university_id: 19, field_id: 11, program_name: "Naval Architecture (NA)", min_score: 465, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 152, university_id: 19, field_id: 11, program_name: "Marine Mechanical (MM)", min_score: 465, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 153, university_id: 19, field_id: 11, program_name: "River and Coastal Engineering (RC)", min_score: 465, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 },
  { program_id: 154, university_id: 20, field_id: 11, program_name: "Mercantile Marine Diploma Programs", min_score: 421, min_score_male: 0, min_score_female: 0, min_eng_chem_bio_male: 0, min_eng_chem_bio_female: 0, min_4sub_male: 0, min_4sub_female: 0 }
];

// In-memory Database Store for Students Assessments and Contact Inquiries
export const studentAssessmentsStore = [];
export const contactInquiriesStore = [];

/**
 * Calculates recommendations based on student marks, subject-specific criteria,
 * gender-based cutoffs, and selected interest fields.
 */
export function getRecommendations(studentScore, gender = 'any', fieldName = 'ALL', options = {}) {
  const normGender = (gender || 'any').toLowerCase();
  const normField = fieldName || 'ALL';
  const selectedFields = options.fields || (normField !== 'ALL' ? [normField] : []);
  const locationPref = (options.location || 'all').toLowerCase();
  const learningStyle = (options.learningStyle || 'practical').toLowerCase();

  // Subject-specific marks breakdown if provided
  const marks = options.marks || {};
  const myanmarMark = parseInt(marks.myanmar ?? options.myanmar) || 0;
  const englishMark = parseInt(marks.english ?? options.english) || 0;
  const mathMark = parseInt(marks.mathematics ?? marks.math ?? options.mathematics ?? options.math) || 0;
  const physicsMark = parseInt(marks.physics ?? options.physics) || 0;
  const chemistryMark = parseInt(marks.chemistry ?? options.chemistry) || 0;
  const biologyMark = parseInt(marks.biology ?? options.biology) || 0;
  const ecoMark = parseInt(marks.economics ?? options.economics) || 0;

  // Key combination scores used in Myanmar admissions:
  // 1. Eng + Chem + Bio (for Medical / Dental / Pharmacy / Nursing admissions)
  const studentEngChemBio = englishMark + chemistryMark + biologyMark;
  // 2. Eng + Math + Chem + Physics (for Engineering / TU admissions)
  const student4Sub = englishMark + mathMark + chemistryMark + physicsMark;

  const uniMap = new Map(universities.map(u => [u.university_id, u]));
  const fieldMap = new Map(fields.map(f => [f.field_id, f]));

  const results = [];

  for (const prog of programs) {
    const fObj = fieldMap.get(prog.field_id);
    const uObj = uniMap.get(prog.university_id);
    if (!fObj || !uObj) continue;

    const fName = fObj.field_name;

    // Check if program matches user's chosen interest fields
    const isInterestMatched = selectedFields.length === 0 || selectedFields.some(sf => {
      if (!sf || sf === 'ALL' || sf === 'all') return true;
      const sfNorm = sf.toLowerCase().trim();
      const fnNorm = fName.toLowerCase().trim();
      return sfNorm === fnNorm || fnNorm.includes(sfNorm) || sfNorm.includes(fnNorm) ||
        (sfNorm.includes('tech') && fnNorm.includes('programming')) ||
        (sfNorm.includes('programming') && fnNorm.includes('tech')) ||
        (sfNorm.includes('medicine') && fnNorm.includes('medicine')) ||
        (sfNorm.includes('economics') && fnNorm.includes('economics')) ||
        (sfNorm.includes('engineering') && fnNorm.includes('engineering'));
    });

    // 1. Determine overall cutoff score based on gender
    let requiredCutoff = prog.min_score;
    if (normGender === 'male' && prog.min_score_male > 0) {
      requiredCutoff = prog.min_score_male;
    } else if (normGender === 'female' && prog.min_score_female > 0) {
      requiredCutoff = prog.min_score_female;
    } else if (prog.min_score === 0) {
      if (normGender === 'male' && prog.min_score_male > 0) {
        requiredCutoff = prog.min_score_male;
      } else if (normGender === 'female' && prog.min_score_female > 0) {
        requiredCutoff = prog.min_score_female;
      } else if (prog.min_score_male > 0 && prog.min_score_female > 0) {
        requiredCutoff = Math.min(prog.min_score_male, prog.min_score_female);
      } else if (prog.min_4sub_male > 0) {
        requiredCutoff = prog.min_4sub_male;
      }
    }

    // 2. Check subject-specific requirements
    let reqEngChemBio = 0;
    if (normGender === 'male' && prog.min_eng_chem_bio_male > 0) {
      reqEngChemBio = prog.min_eng_chem_bio_male;
    } else if (normGender === 'female' && prog.min_eng_chem_bio_female > 0) {
      reqEngChemBio = prog.min_eng_chem_bio_female;
    } else if (prog.min_eng_chem_bio_male > 0) {
      reqEngChemBio = Math.min(prog.min_eng_chem_bio_male, prog.min_eng_chem_bio_female || 999);
    }

    let req4Sub = 0;
    if (normGender === 'male' && prog.min_4sub_male > 0) {
      req4Sub = prog.min_4sub_male;
    } else if (normGender === 'female' && prog.min_4sub_female > 0) {
      req4Sub = prog.min_4sub_female;
    } else if (prog.min_4sub_male > 0) {
      req4Sub = Math.min(prog.min_4sub_male, prog.min_4sub_female || 999);
    }

    // 3. Evaluate eligibility
    let eligible = false;
    let cutoffMet = false;
    let subjectCriteriaMet = true;
    let subjectCriteriaDetail = "";

    // Overall cutoff check
    if (prog.min_score === 0 && (!prog.min_score_male || prog.min_score_male === 0) && (!prog.min_score_female || prog.min_score_female === 0)) {
      cutoffMet = true;
    } else if (prog.min_score > 0 && studentScore >= prog.min_score) {
      cutoffMet = true;
    } else if (normGender === 'male' && prog.min_score_male > 0 && studentScore >= prog.min_score_male) {
      cutoffMet = true;
    } else if (normGender === 'female' && prog.min_score_female > 0 && studentScore >= prog.min_score_female) {
      cutoffMet = true;
    } else if (normGender === 'any') {
      const minApplicable = (prog.min_score > 0 ? prog.min_score : Math.min(prog.min_score_male || 999, prog.min_score_female || 999));
      if (minApplicable < 999 && studentScore >= minApplicable) {
        cutoffMet = true;
      }
    }

    // Check specific Eng+Chem+Bio criteria for Medicine/Dental (Strict Dual Requirement)
    let isMedicineOrDental = (reqEngChemBio > 0) || (prog.field_id === 3 && (uObj.type.includes('Medical') || prog.program_name.includes('M.B.,B.S.') || prog.program_name.includes('B.D.S.')));
    let engChemBioMet = true;

    if (reqEngChemBio > 0) {
      if (studentEngChemBio > 0) {
        if (studentEngChemBio >= reqEngChemBio) {
          engChemBioMet = true;
          subjectCriteriaMet = true;
          subjectCriteriaDetail = `Eng+Chem+Bio: ${studentEngChemBio}/${reqEngChemBio} (Met ✓)`;
        } else {
          engChemBioMet = false;
          subjectCriteriaMet = false;
          subjectCriteriaDetail = `Eng+Chem+Bio: ${studentEngChemBio}/${reqEngChemBio} (Failed: ${reqEngChemBio - studentEngChemBio} marks short)`;
        }
      } else {
        // Marks breakdown wasn't provided
        subjectCriteriaDetail = `Req. Eng+Chem+Bio: ≥ ${reqEngChemBio}`;
      }
    }

    // Check 4-Subject criteria for Engineering
    if (req4Sub > 0) {
      if (student4Sub > 0) {
        if (student4Sub >= req4Sub) {
          subjectCriteriaMet = true;
          subjectCriteriaDetail = `4-Subject: ${student4Sub}/${req4Sub} (Met ✓)`;
        } else {
          subjectCriteriaMet = false;
          subjectCriteriaDetail = `4-Subject: ${student4Sub}/${req4Sub} (Failed: ${req4Sub - student4Sub} marks short)`;
        }
      } else {
        subjectCriteriaDetail = `Req. 4-Subject: ≥ ${req4Sub}`;
      }
    }

    eligible = cutoffMet && subjectCriteriaMet;

    // 4. Calculate Profile Match Score (0 - 100%) and Admission Probability
    const diff = studentScore - (requiredCutoff > 0 ? requiredCutoff : 300);
    let profileMatch = 70;
    let admissionChance = "Moderate";
    let admissionRate = "80%";
    let tier = "Target Program";

    // Hard Rule for Medical University: Must achieve BOTH Total >= 450 AND Eng+Chem+Bio >= 252
    if (isMedicineOrDental && reqEngChemBio > 0) {
      if (!cutoffMet || !engChemBioMet) {
        eligible = false;
        admissionChance = "Ineligible (No Chance)";
        admissionRate = "0%";
        tier = "Ineligible - Criteria Unmet";
        profileMatch = 30;
      } else {
        // Both conditions met!
        const engDiff = studentEngChemBio - reqEngChemBio;
        if (diff >= 30 && engDiff >= 15) {
          profileMatch = 98;
          admissionChance = "Very High";
          admissionRate = "95%";
          tier = "Top Medical Match";
        } else if (diff >= 10 && engDiff >= 5) {
          profileMatch = 92;
          admissionChance = "High";
          admissionRate = "88%";
          tier = "Strong Medical Match";
        } else {
          profileMatch = 85;
          admissionChance = "Moderate";
          admissionRate = "78%";
          tier = "Competitive Target";
        }
      }
    } else if (requiredCutoff > 0) {
      if (!eligible) {
        profileMatch = 45;
        admissionChance = "Low / Ineligible";
        admissionRate = "15%";
        tier = "Criteria Not Met";
      } else if (diff >= 35) {
        profileMatch = 96;
        admissionChance = "Very High";
        admissionRate = "98%";
        tier = "Safe Match";
      } else if (diff >= 15) {
        profileMatch = 91;
        admissionChance = "High";
        admissionRate = "92%";
        tier = "Top Match";
      } else if (diff >= 0) {
        profileMatch = 85;
        admissionChance = "Moderate";
        admissionRate = "82%";
        tier = "Target Match";
      } else if (diff >= -15) {
        profileMatch = 73;
        admissionChance = "Reach";
        admissionRate = "60%";
        tier = "Reach Program";
      } else {
        profileMatch = 52;
        admissionChance = "Competitive";
        admissionRate = "35%";
        tier = "Highly Competitive";
      }
    } else {
      profileMatch = 86;
      admissionChance = "High";
      admissionRate = "90%";
      tier = "Open Admission";
    }

    // Boost/adjust for Interest match
    if (isInterestMatched) {
      profileMatch = Math.min(99, profileMatch + 4);
    } else {
      profileMatch = Math.max(40, profileMatch - 15);
    }

    // Boost/adjust for Location preference
    let locationMatched = false;
    if (locationPref === 'yangon' && uObj.region === 'Yangon') {
      profileMatch = Math.min(99, profileMatch + 2);
      locationMatched = true;
    } else if (locationPref.includes('mandalay') && uObj.location.toLowerCase().includes('mandalay')) {
      profileMatch = Math.min(99, profileMatch + 3);
      locationMatched = true;
    } else if (locationPref === 'anywhere' || locationPref === 'all' || locationPref === 'no preference') {
      locationMatched = true;
    }

    // Boost for practical learning style on engineering/tech/applied campuses
    if (learningStyle.includes('practical') && (fName.includes('Engineering') || fName.includes('Technology') || fName.includes('Marine'))) {
      profileMatch = Math.min(99, profileMatch + 2);
    }

    // Generate specific AI reasoning bullet points
    const matchReasons = [];

    if (isMedicineOrDental && reqEngChemBio > 0) {
      if (cutoffMet && engChemBioMet) {
        matchReasons.push(`✅ Satisfies both mandatory Medical University criteria: Total Marks (${studentScore} ≥ ${requiredCutoff}) and Eng+Chem+Bio (${studentEngChemBio} ≥ ${reqEngChemBio}).`);
      } else {
        matchReasons.push(`🚫 Ineligible for University of Medicine: Admission requires achieving BOTH Total Marks ≥ ${requiredCutoff} and Eng+Chem+Bio ≥ ${reqEngChemBio}. Failing either condition disqualifies the application.`);
      }
    }

    if (diff >= 0) {
      matchReasons.push(`Total marks (${studentScore}) exceed the required cutoff (${requiredCutoff}) by +${diff} points.`);
    } else {
      matchReasons.push(`Total marks (${studentScore}) are ${Math.abs(diff)} points below the historical cutoff (${requiredCutoff}).`);
    }

    if (isInterestMatched) {
      matchReasons.push(`Directly matches your selected field interest: ${fName}.`);
    }

    if (subjectCriteriaDetail) {
      matchReasons.push(subjectCriteriaDetail);
    }

    if (locationMatched && locationPref !== 'anywhere' && locationPref !== 'all') {
      matchReasons.push(`Campus in ${uObj.location} matches your preferred location.`);
    }

    results.push({
      program_id: prog.program_id,
      university_id: uObj.university_id,
      university_name: uObj.university_name,
      university_code: uObj.code,
      university_location: uObj.location,
      university_region: uObj.region,
      university_type: uObj.type,
      detail_url: uObj.detail_url,
      image_url: uObj.image_url,
      field_id: fObj.field_id,
      field_name: fName,
      field_icon: fObj.icon,
      program_name: prog.program_name,
      required_cutoff_score: requiredCutoff,
      min_score_male: prog.min_score_male,
      min_score_female: prog.min_score_female,
      min_eng_chem_bio_male: prog.min_eng_chem_bio_male,
      min_eng_chem_bio_female: prog.min_eng_chem_bio_female,
      min_4sub_male: prog.min_4sub_male,
      min_4sub_female: prog.min_4sub_female,
      score_difference: diff,
      eligible,
      is_interest_matched: isInterestMatched,
      profile_match_percent: profileMatch,
      admission_chance: admissionChance,
      admission_rate: admissionRate,
      tier,
      subject_criteria_detail: subjectCriteriaDetail,
      match_reasons: matchReasons
    });
  }

  // Sort results:
  // 1. Interest-matched & Eligible first
  // 2. Highest profile match percent
  // 3. Highest required cutoff
  results.sort((a, b) => {
    if (a.is_interest_matched !== b.is_interest_matched) {
      return a.is_interest_matched ? -1 : 1;
    }
    if (a.eligible !== b.eligible) {
      return a.eligible ? -1 : 1;
    }
    if (b.profile_match_percent !== a.profile_match_percent) {
      return b.profile_match_percent - a.profile_match_percent;
    }
    return b.required_cutoff_score - a.required_cutoff_score;
  });

  return results;
}

/**
 * Saves a student assessment into the database
 */
export function saveStudentAssessment(data) {
  const student_id = studentAssessmentsStore.length + 1;
  const assessmentRecord = {
    student_id,
    gender: data.gender || 'male',
    myanmar: parseInt(data.myanmar ?? data.marks?.myanmar) || 0,
    english: parseInt(data.english ?? data.marks?.english) || 0,
    mathematics: parseInt(data.mathematics ?? data.math ?? data.marks?.mathematics ?? data.marks?.math) || 0,
    physics: parseInt(data.physics ?? data.marks?.physics) || 0,
    chemistry: parseInt(data.chemistry ?? data.marks?.chemistry) || 0,
    biology: parseInt(data.biology ?? data.marks?.biology) || 0,
    history: parseInt(data.history ?? data.marks?.history) || 0,
    geography: parseInt(data.geography ?? data.marks?.geography) || 0,
    economics: parseInt(data.economics ?? data.marks?.economics) || 0,
    total_marks: parseInt(data.total_marks) || 0,
    fields: Array.isArray(data.fields) ? data.fields : (data.field ? [data.field] : []),
    location: data.location || data.preferred_location || 'Yangon',
    learning_style: data.learning_style || 'practical',
    subjects: Array.isArray(data.subjects) ? data.subjects : [],
    marks: data.marks || {},
    created_at: new Date().toISOString()
  };

  // If total_marks is 0, auto-compute from subject sum
  if (!assessmentRecord.total_marks) {
    assessmentRecord.total_marks =
      assessmentRecord.myanmar +
      assessmentRecord.english +
      assessmentRecord.mathematics +
      assessmentRecord.physics +
      assessmentRecord.chemistry +
      assessmentRecord.biology +
      assessmentRecord.history +
      assessmentRecord.geography +
      assessmentRecord.economics;
  }

  studentAssessmentsStore.push(assessmentRecord);
  return assessmentRecord;
}

/**
 * Saves a contact inquiry
 */
export function saveContactInquiry(data) {
  const inquiry_id = contactInquiriesStore.length + 1;
  const inquiry = {
    inquiry_id,
    name: data.name || data.fullName || 'Anonymous',
    email: data.email || '',
    subject: data.subject || 'General Inquiry',
    message: data.message || '',
    phone: data.phone || '',
    created_at: new Date().toISOString()
  };
  contactInquiriesStore.push(inquiry);
  return inquiry;
}
