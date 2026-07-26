export const profile = {
  name: "Shifa Imran",
  title: "AI/ML Engineer · Generative & Agentic AI · Software Engineer",
  location: "Islamabad, Pakistan",
  email: "shifaimran309@gmail.com",
  phone: "0346-5001003",
  linkedin: "https://www.linkedin.com/in/shifa-imran-2b5b5b220",
  github: "https://github.com/shifa309",
  objective:
    "AI/ML Engineer with hands-on experience building production Generative AI and Agentic AI systems across finance, retail, and recruitment. Currently shipping AI-augmented conversational flows and SOP chatbots at Funavry Technologies with LangChain, LangGraph, and RAG pipelines — previously delivered an AI-driven recruitment platform at Systems Limited on Azure OpenAI, and built full-stack web applications during a year at Walee.",
};

export const experience = [
  {
    company: "Funavry Technologies",
    role: "Associate Software Engineer – AI",
    period: "Oct 2025 – Present",
    location: "Islamabad, Pakistan",
    stack: ["LangChain", "LangGraph", "RAG", "FastAPI", "React", "TypeScript", "OpenAI"],
    points: [
      "Owned the conversational experience for Tamweel, Aljazeera's finance chatbot — free-text eligibility journeys with per-turn English/Arabic detection.",
      "Built Delmontie, an AI-powered SOP chatbot answering natural-language questions across policy documents and structured data.",
      "Built and maintain an API test-automation platform for Libbi, driving ~200 tracked test cases, with an LLM-as-judge validation layer and AI-generated failure diagnostics.",
    ],
  },
  {
    company: "Systems Limited",
    role: "Associate Consultant – AI",
    period: "Sept 2024 – Dec 2024",
    location: "Islamabad, Pakistan",
    stack: ["Azure OpenAI", "FastAPI", "Streamlit", "Blob Storage"],
    points: [
      "Delivered Geni, an end-to-end AI recruitment platform automating JD creation, résumé screening, and interview assessment.",
    ],
  },
  {
    company: "Walee",
    role: "Software Development Intern",
    period: "June 2023 – June 2024",
    location: "Islamabad, Pakistan",
    stack: ["Python", "Full-Stack Development", "Recommendation Systems"],
    points: [
      "Built Cre8iv, my Final Year Project, as a social media content recommendation platform for Instagram and Facebook.",
      "Contributed to full-stack feature delivery across web applications through the full development lifecycle.",
    ],
  },
];

export const projects = [
  {
    tag: "Final Year Project · NUST × Walee",
    icon: "sparkles",
    cover: "recommend",
    name: "Cre8iv — Social Media Content Recommendation System",
    description:
      "Content recommendation engine trained on Instagram and Facebook data, pairing deep-learning models with NLP-based feature extraction to surface tailored content suggestions. Shortlisted top 3 for the Rector's Gold Medal and selected for the 10 Pearls FYP Accelerator Program.",
    stack: ["Python", "Deep Learning", "NLP", "Recommendation Systems"],
    codeUrl: "",
    demoUrl: "",
  },
  {
    tag: "AI Project · Funavry Technologies",
    icon: "messageSquare",
    cover: "chat",
    name: "Tamweel — Aljazeera Finance Chatbot",
    description:
      "Conversational AI pipeline pairing free-text natural-language understanding with a structured eligibility engine. Implements per-turn language detection and response adaptation for English and Arabic.",
    stack: ["LangChain", "RAG", "Prompt Engineering", "Arabic NLP"],
    codeUrl: "",
    demoUrl: "",
  },
  {
    tag: "AI Project · Funavry Technologies",
    icon: "database",
    cover: "retrieval",
    name: "Delmontie — SOP Chatbot",
    description:
      "RAG + SQL-Agent architecture built on LangChain Self-Query Retrieval over a vector store, with metadata-aware routing that dispatches each query to document retrieval or a SQL agent.",
    stack: ["LangChain", "SQL Agent", "RAG", "Vector DB"],
    codeUrl: "",
    demoUrl: "",
  },
  {
    tag: "Test Automation · Funavry Technologies",
    icon: "workflow",
    cover: "workflow",
    name: "Libbi — Test Automation Platform",
    description:
      "A visual, node-based platform for building API test workflows without scripting — auth chains, HTTP steps, conditional routing, and response-validation checks as graph nodes, with dual-layer validation cross-checking MongoDB state against real-time Firebase events.",
    stack: ["React", "TypeScript", "FastAPI", "MongoDB", "Firebase", "OpenAI"],
    codeUrl: "",
    demoUrl: "",
  },
  {
    tag: "Gen AI Project · Systems Limited",
    icon: "userCheck",
    cover: "hiring",
    name: "Geni — The Genius Behind Smart Hiring",
    description:
      "End-to-end AI recruitment platform automating JD generation, résumé parsing and scoring, and interview evaluation — built on Azure OpenAI with FastAPI services, Blob Storage for artifacts, and a Streamlit interface.",
    stack: ["Azure OpenAI", "FastAPI", "Streamlit", "Blob Storage"],
    codeUrl: "",
    demoUrl: "",
  },
  {
    tag: "Artificial Intelligence · NUST",
    icon: "tags",
    cover: "classifier",
    name: "Social Media Brand Classifier",
    description:
      "Collected data from Instagram and applied NLP-based keyword extraction to classify brand type and page category.",
    stack: ["Python", "NLP", "Keyword Extraction"],
    codeUrl: "",
    demoUrl: "",
  },
];

export const skills = {
  "AI / Generative AI": [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Generative AI",
    "LLMs",
    "RAG",
    "AI Chatbots",
    "Prompt Engineering",
    "Agentic AI",
  ],
  "AI Frameworks": ["LangChain", "LangGraph", "OpenAI SDK", "Azure OpenAI", "Hugging Face"],
  "Backend Development": ["Python", "FastAPI", "REST APIs", "API Integration"],
  "ML Libraries": ["Scikit-learn", "TensorFlow", "PyTorch", "OpenCV"],
  Databases: ["MySQL", "MongoDB", "ChromaDB", "FAISS"],
  "Cloud & AI Services": ["Microsoft Azure", "Azure OpenAI", "Azure Blob Storage"],
  Programming: ["Python", "Node.js"],
  "Development Tools": ["Git", "GitHub", "VS Code", "Postman", "Figma", "Canva"],
};

export const education = [
  {
    degree: "Bachelors in Computer Science (BSCS)",
    school: "National University of Sciences & Technology (NUST)",
    period: "2020 – 2024",
    detail: "CGPA: 3.76 — Rector's Gold Medal shortlist (Top 3), GPA-based Financial Assistance (Sem 5, 6, 7)",
  },
  {
    degree: "Matric & Intermediate",
    school: "PakTurk Maarif Int'l Schools & Colleges",
    period: "2015 – 2020",
    detail: "2nd Position — Federal Board (Computer Group)",
  },
];

export const certifications = [
  { name: "Agentic AI with LangChain and LangGraph", issuer: "Coursera", date: "09/25" },
  { name: "Introduction to Prompt Engineering for Generative AI", issuer: "LinkedIn Learning", date: "10/24" },
  { name: "Generative AI with Large Language Models", issuer: "Coursera", date: "09/24" },
  { name: "Azure Data Fundamentals Challenge", issuer: "Microsoft", date: "12/23" },
  { name: "Start Your Career in AI, Data, and Machine Learning", issuer: "Microsoft", date: "04/23" },
  { name: "Machine Learning and Python", issuer: "National Productivity Organization", date: "08/21" },
  { name: "Learn to Code in Python 3", issuer: "Udemy", date: "08/21" },
];

export const extras = [
  { name: "Microsoft Learn Student Ambassador – Beta Level", org: "Microsoft", period: "11/23 – 12/25" },
  { name: "Marketing Lead", org: "Notion Islamabad & MLSA Islamabad", period: "04/23 – 12/24" },
  { name: "Deep Learning Fellow", org: "ByteWise Limited", period: "03/23 – 06/23" },
];

export const blogPlaceholder = {
  note: "Writing up notes on RAG pipelines, agentic workflows, and what actually breaks in production. First posts coming soon.",
};
