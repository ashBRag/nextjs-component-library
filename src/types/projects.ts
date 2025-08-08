export interface Projects {
  experience: Experience[];
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  leadership?: string[];
  projects: Project[];
}

export interface Project {
  name: string;
  duration: string;
  tech_stack: string[];
  achievements: string[];
}
