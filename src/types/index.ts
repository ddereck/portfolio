export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}