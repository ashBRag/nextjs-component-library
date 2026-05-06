export interface BlogTypeItem {
  type: string;
  label: string;
}

export interface Blog {
  url: string;
  souurce: string;
}

export interface BlogData {
  types: BlogTypeItem[];
  blogs: Partial<Record<string, Blog[]>>;
}

export interface BlogMetaData {
  title: string;
  url: string;
  description: string;
  previewImage: string;
  publishedDate: string;
}
