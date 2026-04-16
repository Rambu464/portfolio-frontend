import type {
  HeroData,
  AboutData,
  SkillCategory,
  Project,
  ContactData,
} from './types';

export const heroData: HeroData = {
  fullName: 'Rambu Ilalang',
  tagline: 'AI Engineer with data-driven mindset, passionate about technology and AI transformation.',
  ctaLabel: 'Look at my projects',
  ctaTarget: 'projects',
  profileImageUrl: '/profile.jpeg',
};

export const aboutData: AboutData = {
  description:
    'I am a last year student of Universitas Gunadarma, previously participated in intensive program by dicoding. I specialize in AI development and enjoy applying data-driven approaches to answer and solve challenges',
  education: [
    {
      institution: 'Universitas Gunadarma',
      degree: 'S1 Teknik Informatika',
      year: '2022 - present',
    },
    {
      institution: 'Asah led by Dicoding',
      degree: 'Sertifikasi ML Engineer',
      year: 'August 2025 - January 2026',
    },
  ],
  experience: [
    {
      company: 'Asah led By dicoding',
      role: 'Machine Learning Cohort',
      period: 'August 2025 - January 2026',
      description:
        'Intentive 6 months program with real use case capstone project.',
    },
  ]
};

export const skillsData: SkillCategory[] = [
  {
    category: 'Language',
    skills: [
      { name: 'Bahasa Indonesia', proficiencyLevel: 'Fluent' },
      { name: 'English', proficiencyLevel: 'Intermediate' },
    ],
  },
  {
    category: 'AI Engineer',
    skills: [
      { name: 'Python'},
      { name: 'Tensorflow'},
      { name: 'Numpy'},
      { name: 'Scikit-learn' },
      { name: 'PyTorch' },
      { name: 'Scikit-learn' },
      { name: 'Matplotlib' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub'},
      { name: 'Docker'},
      { name: 'MLFlow' },
      { name: 'Figma' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Website Portfolio',
    description:
      'Website portofolio untuk profesional',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Rambu464/portfolio-frontend',
    demoUrl: 'coming',
    previewImageUrl: '\portofolio.png',
  },
  {
    id: 'project-2',
    title: 'Skill Advisor',
    description:
      'Chatbot dengan API Gemini flash lite 2.5.',
    technologies: ['html', 'Javascript', 'node.js', 'css'],
    repoUrl: 'https://github.com/Rambu464/gemini-chatbot-api',
    demoUrl: 'https://gemini-chatbot-api-five.vercel.app/',
    previewImageUrl: '\skill_advisor.png',
  },
];

export const contactData: ContactData = {
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/Rambu464',
      iconName: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rambu-ilalang-b154b431a/',
      iconName: 'linkedin',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/alang.rambu/',
      iconName: 'instagram',
    },
  ],
};
