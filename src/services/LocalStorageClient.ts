import type {Snippet} from '../types/Snippet';
import type {Rule} from '../types/Rule';

class LocalStorageClient {
  KEY_RULES_BOOKMARKED = 'KODING_RULES_BOOKMARKED';

  _setValue(key: string, value: Snippet[]): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  _list(key: string, initValue?: any): any {
    try {
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return [];
    }
  }

  //-----------------------
  // bookmarked rules
  //-----------------------

  bookmarkRule(rule: Rule): void {
    try {
      const list = this.listRules();
      this._setValue(this.KEY_RULES_BOOKMARKED, [rule.documentId, ...list]);
    } catch (error) {
      console.log(error);
    }
  }

  listRules(): any {
    return this._list(this.KEY_RULES_BOOKMARKED, []);
  }

  unBookmarkRule(rule: Rule): any {
    try {
      const list = this._list(this.KEY_RULES_BOOKMARKED);

      this._setValue(
        this.KEY_RULES_BOOKMARKED,
        list.filter((item: Rule, index: number) => {
          return item.documentId !== rule.documentId;
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default LocalStorageClient;
