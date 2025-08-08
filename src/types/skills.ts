export interface Root {
  categories: Categories;
}

export interface Categories {
  frontend: SkillType;
  backend: SkillType;
  cloud: SkillType;
}

export interface SkillType {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: string;
  years: number;
  icon: string;
  color: string;
}
