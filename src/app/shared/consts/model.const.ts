export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

export interface Response {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Source {
  id: string | null;
  name: string;
}
