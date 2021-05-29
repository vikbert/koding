export type Snippet = {
  id: string;
  body: string;
  isBad: boolean;
  path?: string;
  lang?: string;
  suggestion?: string;
  rules?: string[];
};
