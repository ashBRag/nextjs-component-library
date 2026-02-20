export enum BlogType {
  CleanCode = "clean-code",
  Architecture = "architecture",
}

export interface BlogTypeItem {
  type: BlogType;
  label: string;
}

export interface Blog {
  title: string;
  description: string;
  url: string;
  alt: string;
  imageUrl: string;
  createdAt: string;
  tags: string[];
}

export interface BlogData {
  types: BlogTypeItem[];
  blogs: Partial<Record<BlogType, Blog[]>>;
}
