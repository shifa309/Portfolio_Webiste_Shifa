export const profile = {
  name: "Shifa Imran",
  title: "AI & Software Engineer",
  location: "Islamabad, Pakistan",
  email: "shifaimran309@gmail.com",
  phone: "0346-5001003",
  linkedin: "https://www.linkedin.com/in/shifa-imran-2b5b5b220",
  github: "https://github.com/shifa309",
  objective:
    "I build AI-augmented software — conversational systems, retrieval pipelines, and applied ML tools that hold up in production, not just in a notebook. Currently shipping generative AI systems at Funavry Technologies, previously at Systems Limited and Walee.",
};

export const experience = [
  {
    company: "Funavry Technologies",
    role: "Associate Software Engineer – AI",
    period: "Oct 2025 – Present",
    points: [
      "Building AI-augmented conversational systems and retrieval-driven chatbots for production clients.",
    ],
  },
  {
    company: "Systems Limited",
    role: "Associate Consultant – AI",
    period: "Sept 2024 – Dec 2024",
    points: [
      "Developed an AI-driven recruitment platform automating JD creation, resume screening and candidate evaluation.",
    ],
  },
  {
    company: "Walee",
    role: "Software Development Intern",
    period: "June 2023 – June 2024",
    points: [],
  },
];

export const projects = [
  {
    tag: "AI Project · Funavry Technologies",
    name: "Tamweel — Aljazeera Finance Chatbot",
    description:
      "Designed and implemented an AI-augmented conversational flow that seamlessly integrates free-text user input with structured eligibility workflows, enabling dynamic intent handling without disrupting core business logic. Added automatic English/Arabic language detection with per-turn response adaptation.",
    stack: ["LLM", "Conversational AI", "Arabic NLP", "Intent Handling"],
  },
  {
    tag: "AI Project · Funavry Technologies",
    name: "Delmontie Chatbot",
    description:
      "Built an AI-powered SOP chatbot using LangChain Self-Query Retrieval and a SQL Agent, enabling natural-language queries across vectorized SOP documents and structured databases, with metadata-aware filtering to intelligently route between RAG and SQL retrieval.",
    stack: ["LangChain", "RAG", "SQL Agent", "Vector Search"],
  },
  {
    tag: "Gen AI Project · Systems Limited",
    name: "Geni — The Genius Behind Smart Hiring",
    description:
      "An AI-driven recruitment platform automating JD creation, resume screening, candidate evaluation and interview assessment using Azure OpenAI, Azure Web Services, FastAPI, Blob Storage and Streamlit.",
    stack: ["Azure OpenAI", "FastAPI", "Streamlit", "Blob Storage"],
  },
  {
    tag: "Final Year Project · NUST",
    name: "Cre8iv — Social Media Content Recommendation System",
    description:
      "A one-stop platform for social media operations for businesses and content creators, targeting Instagram and Facebook. Shortlisted top 3 for the Rector's Gold Medal and selected for the 10 Pearls FYP Accelerator Program.",
    stack: ["Recommendation Systems", "Social Media APIs"],
  },
  {
    tag: "Artificial Intelligence · NUST",
    name: "Social Media Brand Classifier",
    description:
      "Collected data from Instagram and performed keyword extraction to identify the type of brand or page being represented.",
    stack: ["Python", "NLP", "Classification"],
  },
];

export const skills = {
  "AI / ML": ["AI/ML", "Generative AI", "NLP", "Deep Learning"],
  Development: ["Python", "JavaScript", "MERN", "Node.js"],
  "Cloud & Tools": ["Microsoft Azure", "GitHub", "Figma", "Canva"],
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
  { name: "Marketing Lead", org: "Notion Islamabad & MLSA Islamabad", period: "7/23 – 10/24 & 4/23 – 12/24" },
  { name: "Deep Learning Fellow", org: "ByteWise Limited", period: "3/23 – 6/23" },
];

export const blogPlaceholder = {
  note: "Writing up notes on RAG pipelines, agentic workflows, and what actually breaks in production. First posts coming soon.",
};
