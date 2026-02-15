export interface Blog {
  title: string;
  source: string;
  url: string;
  description: string;
  image: string;
  createdAt: Date;
  tags: string[];
  type: string;
}
export interface BlogTypes {
  label: string;
  type: string;
}

export interface Blogs {
  blogs: Blog[];
  types: BlogTypes[];
}
