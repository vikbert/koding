import {Snippet} from "../types/Snippet";
import {Criteria} from "../types/Criteria";
import {StorageInterface} from "./StorageInterface";

class LocalStorageClient implements StorageInterface {
  readonly KEY_CODE_LIST = 'RATE-CODE-LIST';

  setValue(value: Snippet[]): void {
    window.localStorage.setItem(this.KEY_CODE_LIST, JSON.stringify(value));
  }

  saveSnippet(code: Snippet): void {
    try {
      const list = this.list();
      this.setValue([code, ...list])
    } catch (error) {
      console.log(error);
    }
  }

  list(criteria?: Criteria): Snippet[] {
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
