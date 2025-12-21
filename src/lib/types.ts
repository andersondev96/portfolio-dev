export interface ExperienceData {
  id: number;
  company: string;
  description: string;
  period: string;
  badges: string[];
  roles: Role[];
}

export interface Role {
  id?: string;
  title: string;
  period: string;
  responsibilities: string[];
}

export interface TechnologyIcon {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  github_repo: string;
  image: string;
  badges: string[];
  technologies: TechnologyIcon[];
  highlight?: boolean;
  role?: string;
  context?: string;
  features?: string[];
  results?: string[];
}

export interface Technology {
  name: string;
  icon: string;
  experience: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  tag: string;
  description: string;
  bullets: string[];
}
