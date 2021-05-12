export type Snippet = {
  id: string;
  body: string;
  isBad: boolean;
  lang?: string;
  suggestion?: string;
  rules?: string[];
};
