import type {Snippet} from "../types/Snippet";

export interface StorageInterface {
  saveSnippet: (code: Snippet) => void
  list: (key: string) => any
}
