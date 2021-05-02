import {Code} from "../types/Code";
import {Criteria} from "../types/Criteria";

export interface StorageInterface {
  addCode: (code: Code) => void
  list: (criteria?: Criteria) => Code[]
}
