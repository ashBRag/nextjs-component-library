export default interface IconMap {
  contact: IconConfig[];
  skills: IconConfig[];
  services: IconConfig[];
}

export interface Contact {
  id?: string;
  name: string;
  icon: string;
  color: string;
}

export interface Skill {
  id?: string;
  name: string;
  icon: string;
  color: string;
}

export interface IconConfig {
  id?: string;
  name: string;
  icon: string;
  color: string;
}
