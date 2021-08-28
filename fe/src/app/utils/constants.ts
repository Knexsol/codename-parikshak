export const Q_TYPES_INFO = [
  { id: 'MCQ_SA', text: 'MCQ - Single Answer' },
  { id: 'MCQ_MA', text: 'MCQ - Multiple Answers' }
]

export const Q_TYPES = {
  MCQ_SA: 'MCQ_SA',
  MCQ_MA: 'MCQ_MA'
}

export const CATS = {
  "business": "Business",
  "energy": "Energy",
  "engineering": "Engineering",
  "finearts": "Fine Arts",
  "healthandmedicine": "Health and Medicine",
  "humanities": "Humanities",
  "mathematics": "Mathematics",
  "science": "Science",
  "socialscience": "Social Science",
  "society": "Society",
  "teachingandeducation": "Teaching and Education"
}

export const SUBCATS: { [catID: string]: Array<{[id:string]: string}> } = {
  business: [
    { "accounting": "Accounting" },
    { "businessethics": "Business Ethics" },
    { "entrepreneurship": "Entrepreneurship" },
    { "finance": "Finance" },
    { "globalization": "Globalization" },
    { "healthcaremanagement": "Health Care Management" },
    { "industrialrelationsandhumanresourcemanagement": "Industrial Relations and Human Resource Management" },
    { "informationtechnology": "Information Technology" },
    { "innovation": "Innovation" },
    { "leadership": "Leadership" },
    { "management": "Management" },
    { "marketing": "Marketing" },
    { "operationsmanagement": "Operations Management" },
    { "organizationalbehavior": "Organizational Behavior" },
    { "projectmanagement": "Project Management" },
    { "realestate": "Real Estate" },
    { "supplychainmanagement": "Supply Chain Management" }
  ],
  energy: [
    { "buildings": "Buildings" },
    { "climate": "Climate" },
    { "combustion": "Combustion" },
    { "electricity": "Electricity" },
    { "fossilfuels": "Fossil Fuels" },
    { "fuelcells": "Fuel Cells" },
    { "hydrogenandalternatives": "Hydrogen and Alternatives" },
    { "nuclear": "Nuclear" },
    { "renewables": "Renewables" },
    { "technology": "Technology" },
    { "transportation": "Transportation" }
  ],
  engineering: [
    { "aerospaceengineering": "Aerospace Engineering" },
    { "biologicalengineering": "Biological Engineering" },
    { "chemicalengineering": "Chemical Engineering" },
    { "civilengineering": "Civil Engineering" },
    { "computerscience": "Computer Science" },
    { "electricalengineering": "Electrical Engineering" },
    { "environmentalengineering": "Environmental Engineering" },
    { "materialsscienceandengineering": "Materials Science and Engineering" },
    { "mechanicalengineering": "Mechanical Engineering" },
    { "nanotechnology": "Nanotechnology" },
    { "nuclearengineering": "Nuclear Engineering" },
    { "oceanengineering": "Ocean Engineering" },
    { "systemsengineering": "Systems Engineering" }
  ],
  finearts: [
    { "architecture": "Architecture" },
    { "arthistory": "Art History" },
    { "gamedesign": "Game Design" },
    { "mediastudies": "Media Studies" },
    { "music": "Music" },
    { "performancearts": "Performance Arts" },
    { "visualarts": "Visual Arts" }
  ],
  healthandmedicine: [
    { "anatomyandphysiology": "Anatomy and Physiology" },
    { "biomedicalenterprise": "Biomedical Enterprise" },
    { "biomedicalinstrumentation": "Biomedical Instrumentation" },
    { "biomedicalsignalandimageprocessing": "Biomedical Signal and Image Processing" },
    { "biomedicine": "Biomedicine" },
    { "cancer": "Cancer" },
    { "cellularandmolecularmedicine": "Cellular and Molecular Medicine" },
    { "epidemiology": "Epidemiology" },
    { "functionalgenomics": "Functional Genomics" },
    { "healthandexercisescience": "Health and Exercise Science" },
    { "immunology": "Immunology" },
    { "medicalimaging": "Medical Imaging" },
    { "mentalhealth": "Mental Health" },
    { "pathologyandpathophysiology": "Pathology and Pathophysiology" },
    { "pharmacologyandtoxicology": "Pharmacology and Toxicology" },
    { "physicaleducationandrecreation": "Physical Education and Recreation" },
    { "publichealth": "Public Health" },
    { "sensory-neuralsystems": "Sensory-Neural Systems" },
    { "socialmedicine": "Social Medicine" },
    { "spectroscopy": "Spectroscopy" },
    { "speechpathology": "Speech Pathology" }
  ],
  humanities: [
    { "history": "History" },
    { "language": "Language" },
    { "linguistics": "Linguistics" },
    { "literature": "Literature" },
    { "philosophy": "Philosophy" },
    { "religion": "Religion" }
  ],
  mathematics: [
    { "algebraandnumbertheory": "Algebra and Number Theory" },
    { "appliedmathematics": "Applied Mathematics" },
    { "calculus": "Calculus" },
    { "computation": "Computation" },
    { "differentialequations": "Differential Equations" },
    { "discretemathematics": "Discrete Mathematics" },
    { "linearalgebra": "Linear Algebra" },
    { "mathematicalanalysis": "Mathematical Analysis" },
    { "mathematicallogic": "Mathematical Logic" },
    { "probabilityandstatistics": "Probability and Statistics" },
    { "topologyandgeometry": "Topology and Geometry" }
  ],
  science: [
    { "biology": "Biology" },
    { "chemistry": "Chemistry" },
    { "cognitivescience": "Cognitive Science" },
    { "earthscience": "Earth Science" },
    { "physics": "Physics" }
  ],
  socialscience: [
    { "anthropology": "Anthropology" },
    { "archaeology": "Archaeology" },
    { "communication": "Communication" },
    { "economics": "Economics" },
    { "gametheory": "Game Theory" },
    { "geography": "Geography" },
    { "legalstudies": "Legal Studies" },
    { "politicalscience": "Political Science" },
    { "psychology": "Psychology" },
    { "publicadministration": "Public Administration" },
    { "sociology": "Sociology" },
    { "urbanstudies": "Urban Studies" }
  ],
  society: [
    { "africanamericanstudies": "African American Studies" },
    { "asianstudies": "Asian Studies" },
    { "europeanandrussianstudies": "European and Russian Studies" },
    { "genderstudies": "Gender Studies" },
    { "globalpoverty": "Global Poverty" },
    { "indigenousstudies": "Indigenous Studies" },
    { "latinandcaribbeanstudies": "Latin and Caribbean Studies" },
    { "middleeasternstudies": "Middle Eastern Studies" },
    { "thedevelopingworld": "The Developing World" },
    { "women'sstudies": "Women's Studies" }
  ],
  teachingandeducation: [
    { "curriculumandteaching": "Curriculum and Teaching" },
    { "educationpolicy": "Education Policy" },
    { "educationaltechnology": "Educational Technology" },
    { "highereducation": "Higher Education" }
  ]
}