export interface HeroData {
  fullName: string;
  tagline: string;
  ctaLabel: string;
  ctaTarget: 'projects' | 'contact';
  profileImageUrl?: string;
}

export interface AboutData {
  description: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  cvUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiencyLevel?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  previewImageUrl?: string;
}

export interface ContactData {
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
