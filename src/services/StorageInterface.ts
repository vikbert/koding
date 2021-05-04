import {Snippet} from "../types/Snippet";
import {Criteria} from "../types/Criteria";

export interface StorageInterface {
  saveSnippet: (code: Snippet) => void
  list: (criteria?: Criteria) => Snippet[]
}
