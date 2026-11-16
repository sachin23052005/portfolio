// Single source of truth for all site content.
// Edit this file to update the portfolio — no component changes needed.

export const profile = {
  name: "Sachin Prasad",
  headline: "Software Engineer | Backend Developer | AI/ML Enthusiast",
  location: "Pune, Maharashtra, India",
  email: "sachinprasad977@gmail.com",
  intro:
    "Computer Engineering student at VIT Pune. I build backend systems, data pipelines and machine learning models, and I enjoy solving problems with data structures and algorithms.",
  photo: "/profile.png", // Replace public/profile.png to change the photo.
  resume: "/Sachin_Prasad_Resume.pdf", // Replace public/Sachin_Prasad_Resume.pdf to update.
  links: {
    github: "https://github.com/sachin23052005",
    linkedin: "https://www.linkedin.com/in/sachin-prasad-0b6795308",
    leetcode: "https://leetcode.com/u/BitByBitSachin/",
  },
};

export const heroStats = [
  { value: "8.58", label: "CGPA" },
  { value: "201", label: "LeetCode problems" },
  { value: "1500", label: "Peak contest rating" },
  { value: "IEEE", label: "Published paper" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Engineering student at Vishwakarma Institute of Technology, Pune, with a CGPA of 8.58/10. My work so far spans three areas: data engineering, systems programming and deep learning.",
    "I've built a PySpark and PostgreSQL pipeline for payment transactions, a mini operating system simulator in C++, and a diffusion-based model that separates heart and lung sounds. I have also published a research paper at an IEEE conference.",
  ],
  interests: [
    "Software Engineer (SDE)",
    "Backend Developer",
    "AI/ML Engineer",
    "Data Engineer",
    "C++ / Systems Engineer",
  ],
};

export const skillGroups = [
  { title: "Programming", items: ["C", "C++", "Python", "Java", "JavaScript"] },
  {
    title: "Web & Backend",
    items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Flask", "REST APIs"],
  },
  { title: "Databases", items: ["SQL", "PostgreSQL", "MongoDB"] },
  {
    title: "AI / ML",
    items: [
      "LLMs",
      "Transformers",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "RAG",
      "Vector Databases",
      "LoRA/QLoRA",
      "AI Agents",
      "PyTorch",
      "Librosa",
      "Torchaudio",
    ],
  },
  {
    title: "Core CS",
    items: ["DSA", "OOP", "Operating Systems", "DBMS", "System Design"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "VS Code", "GCC", "Apache Spark", "PySpark"],
  },
];

export const projects = [
  {
    title: "Payment Transaction Data Engineering & Analytics Pipeline",
    description:
      "An end-to-end data engineering pipeline that ingests, validates, transforms and deduplicates around 1M payment transactions, then loads 994K+ processed records into PostgreSQL for analytical querying.",
    tech: ["Python", "PySpark", "Apache Spark", "PostgreSQL", "SQL", "Docker", "PyTest", "Git"],
    highlights: [
      "Built an end-to-end pipeline using Python and PySpark to ingest, validate, transform, deduplicate and process ~1M payment transactions.",
      "Implemented data-quality validation and transformation: invalid-amount checks, duplicate detection, timestamp processing, transaction-hour extraction, and high-value/failed transaction flags.",
      "Designed a scalable CSV → PySpark → Parquet → Spark JDBC → PostgreSQL workflow and loaded 994K+ processed transactions for analytical querying.",
      "Developed SQL analytics for transaction status, payment methods, locations, transaction amounts, and high-value/failed transaction analysis, with automated validation tests using PyTest.",
    ],
    github:
      "https://github.com/sachin23052005/Payment-Transaction-Data-Engineering-Analytics-Pipeline",
  },
  {
    title: "Operating System Simulation — Phase I & Phase II",
    description:
      "A mini operating system simulator written in C++ covering job loading, instruction execution, memory management, paging and interrupt handling.",
    tech: ["C++", "Operating Systems", "Memory Management", "Paging"],
    highlights: [
      "Developed a mini operating system simulator in C++ implementing job loading, instruction execution, memory management, paging and interrupt handling.",
      "Simulated CPU operations, memory allocation, page mapping, and I/O instructions including READ and WRITE operations.",
      "Implemented virtual-to-real address mapping, page tables, process execution, and system calls to emulate core operating-system functionality.",
      "Designed error handling for opcode, operand, page fault, time limit, and line limit exceptions.",
    ],
    github: "https://github.com/sachin23052005/Operating-System-Simulator",
  },
  {
    title: "Biomedical Sound Separation Using Diffusion Models",
    description:
      "A deep learning system that uses conditional diffusion networks to separate mixed biomedical audio into heart and lung sounds.",
    tech: ["Python", "PyTorch", "Librosa", "Torchaudio", "Deep Learning"],
    highlights: [
      "Developed a deep learning system using conditional diffusion networks to separate mixed biomedical audio into heart and lung sounds.",
      "Implemented an end-to-end pipeline covering audio preprocessing, spectrogram generation, model training, inference, and waveform reconstruction.",
      "Evaluated model performance using Scale-Invariant Signal-to-Distortion Ratio (SI-SDR) as an objective evaluation metric.",
      "Integrated PyTorch, Librosa and Torchaudio for model development, audio processing and inference, with support for interactive inference.",
    ],
    github:
      "https://github.com/sachin23052005/Biomedical-Sound-Separation-Using-Conditional-Diffusion-Models",
  },
];

export const leetcode = {
  solved: 201,
  easy: 87,
  medium: 98,
  hard: 16,
  peakRating: 1500,
  submissionsPastYear: 394,
};

export const achievements = {
  ieee: {
    title: "IEEE Conference Publication",
    description: "Published a research paper at an IEEE conference.",
    url: "", // TODO: paste the IEEE Xplore / DOI link here. Leave empty to show "Link coming soon".
  },
  certification: {
    title: "IBM Full Stack Software Developer",
    issuer: "Coursera",
    description: "Professional certification covering full stack software development.",
  },
};

export const education = {
  school: "Vishwakarma Institute of Technology",
  city: "Pune, Maharashtra",
  degree: "Bachelor of Technology in Computer Engineering",
  cgpa: "8.58 / 10",
  period: "2023 – 2027", // Resume lists "2023 – Present"; 2027 is the expected graduation year.
};

export const learning = {
  aws: {
    title: "AWS",
    note: "Currently learning — theoretical study, not hands-on project experience yet.",
    items: ["EC2", "S3", "IAM", "Lambda"],
  },
  interests: [
    "Large language models and retrieval-augmented generation",
    "Scalable data processing with Apache Spark",
    "System design",
  ],
};
