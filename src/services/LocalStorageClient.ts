import {Code} from "../types/Code";
import {Criteria} from "../types/Criteria";
import {StorageInterface} from "./StorageInterface";

class LocalStorageClient implements StorageInterface {
  readonly KEY_CODE_LIST = 'RATE-CODE-LIST';

  setValue(value: Code[]): void {
    window.localStorage.setItem(this.KEY_CODE_LIST, JSON.stringify(value));
  }

  addCode(code: Code): void {
    try {
      const list = this.list();
      this.setValue([code, ...list])
    } catch (error) {
      console.log(error);
    }
  }

  list(criteria?: Criteria): Code[] {
    try {
      const item = window.localStorage.getItem(this.KEY_CODE_LIST);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : [];
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return [];
    }
  }

}

export default LocalStorageClient;
