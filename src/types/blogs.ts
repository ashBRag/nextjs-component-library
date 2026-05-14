export interface BlogData {
  type: string;
  label: string;
  blogs: BlogItem[];
}

export interface BlogItem {
  url: string;
  source?: string;
  id?: string;
  title?: string;
  description?: string;
  previewImage?: string;
  publishedAt?: string;
  tags?: string[];
}
