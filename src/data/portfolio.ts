import type {
  HeroData,
  AboutData,
  SkillCategory,
  Project,
  ContactData,
} from "./types";

export const heroData: HeroData = {
  fullName: "Rambu Ilalang",
  tagline:
    "Informatics Engineering graduate focused on AI Engineering and Data Science, specializing in Large Language Models (LLMs), RAG systems, and Machine Learning.",
  ctaLabel: "Contact Me",
  ctaTarget: "contact",
  profileImageUrl: "/profile.jpg",
};

export const aboutData: AboutData = {
  description:
    "Informatics Engineering graduate focused on AI Engineering and Data Science. Completed the Machine Learning Engineer program at Asah led by Dicoding with a predictive lead scoring capstone (XGBoost, ROC-AUC 0.91), reached the top 80 finalists of PIDI Digdaya x Hackathon 2026, and built a RAG system with a locally run 2B-parameter LLM as an undergraduate thesis.",
  education: [
    {
      institution: "Universitas Gunadarma - Indonesia",
      degree:
        "Bachelor of Informatics (GPA: 3.71/4.00), Thesis: Implementation of a RAG-Based Chatbot API Using Qwen 3.5",
      year: "Sep 2022 - Aug 2026",
    },
    {
      institution: "Asah led by Dicoding",
      degree: "Machine Learning Engineer Certification",
      year: "Jan 2026",
    },
  ],
  experience: [
    {
      company: "PIDI Digdaya x Hackathon 2026",
      role: "AI Engineer - FinCrime",
      period: "Mar 2026 - Sep 2026",
      description:
        "Reached the top 80 finalists of PIDI Digdaya x Hackathon 2026 (Bank Indonesia x OJK) as an AI Engineer on a financial crime detection platform covering Risk Scoring, Fraud Detection, and Crypto Tracing. Pitched the solution directly to PPATK as the prospective off-taker.",
    },
    {
      company: "Asah led by Dicoding",
      role: "Machine Learning Engineer",
      period: "Aug 2025 - Jan 2026",
      description:
        "Completed the Capstone Project with front-end and back-end teams. Built a predictive lead scoring model with XGBoost to predict customers likely to subscribe to a term deposit, achieving ROC-AUC 0.91 and recall 0.61 on the positive (subscribing) class.",
    },
  ],
  cvUrl: "/Rambu_Ilalang_CV.pdf",
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming & Web Frameworks",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "FastAPI" },
      { name: "React" },
      { name: "LangChain" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Large Language Models (LLMs)" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "Fine-tuning & Deep Learning" },
      { name: "XGBoost & scikit-learn" },
      { name: "Gen AI & Agentic AI" },
      { name: "RAGAS" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "ChromaDB" },
      { name: "Ollama & llama.cpp" },
      { name: "Docker & Git" },
      { name: "VSCode" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Bahasa Indonesia", proficiencyLevel: "Native" },
      { name: "English", proficiencyLevel: "Intermediate" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description: "Personal portfolio website built for professionals.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/Rambu464/portfolio-frontend",
    demoUrl: "https://portfolio-frontend-nine-rouge-93.vercel.app/",
    previewImageUrl: "/portofolio.png",
  },
  {
    id: "project-2",
    title: "Skill Advisor",
    description:
      "Interactive career and skill advisor chatbot powered by the Gemini 2.5 Flash-Lite API.",
    technologies: ["HTML", "JavaScript", "Node.js", "CSS"],
    repoUrl: "https://github.com/Rambu464/gemini-chatbot-api",
    demoUrl: "https://gemini-chatbot-api-five.vercel.app/",
    previewImageUrl: "/skill_advisor.png",
  },
  {
    id: "project-3",
    title: "RAG Chatbot",
    description:
      "RAG-based document chatbot with hybrid retrieval and semantic prompt caching using a quantized Qwen3.5-2B model via llama.cpp (RAGAS context recall 0.917, 85.7% cache decision accuracy).",
    technologies: ["LangChain", "Next.js", "FastAPI", "llama.cpp", "ChromaDB"],
    repoUrl: "https://github.com/Rambu464/chatbot",
    demoUrl: "Coming",
    previewImageUrl: "/rag_chatbot.png",
  },
  {
    id: "project-4",
    title: "Predictive Lead Scoring",
    description:
      "A predictive lead scoring model with XGBoost to predict customers likely to subscribe to a term deposit (achieved ROC-AUC 0.91).",
    technologies: ["Flask", "FastAPI", "XGBoost", "React"],
    repoUrl: "https://github.com/Rambu464/Predictive-Lead-Scoring",
    demoUrl: "Coming",
    previewImageUrl: "/lead_scoring.png",
  },
];

export const contactData: ContactData = {
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Rambu464",
      iconName: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/rambu-ilalang-b154b431a/",
      iconName: "linkedin",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/alang.rambu/",
      iconName: "instagram",
    },
    {
      platform: "Email",
      url: "mailto:rambu.ilalang@gmail.com",
      iconName: "email",
    },
  ],
};
