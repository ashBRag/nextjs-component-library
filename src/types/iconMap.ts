export default interface IconMap {
    contact: Contact[]
    skills: Skill[]
  }
  
  export interface Contact {
    name: string
    icon: string
    color: string
  }
  
  export interface Skill {
    name: string
    icon: string
    color: string
  }

  export interface IconConfig {
    id?: string;
    name: string;
    icon: string;
    color: string;
  }