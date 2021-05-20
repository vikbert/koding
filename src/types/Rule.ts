export type Rule = {
  id: string;
  title: string;
  description?: string;
  snippets: string[];
  tags: string[];
  votes: number;
  views: number;
  editors?: string[];
  isPublic?: boolean;
  createdAt: number;
};
