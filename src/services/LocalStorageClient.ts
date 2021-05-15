import type {Snippet} from '../types/Snippet';
import type {Rule} from '../types/Rule';

class LocalStorageClient {
   KEY_SNIPPETS = 'APP_SNIPPETS';
   KEY_RULES = 'APP_RULES';

  _setValue(key: string, value: Snippet[]): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  _list(key: string): any {
    try {
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : [];
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return [];
    }
  }

  insertSnippet(code: Snippet): void {
    try {
      const list = this._list(this.KEY_SNIPPETS);
      this._setValue(this.KEY_SNIPPETS, [code, ...list]);
    } catch (error) {
      console.log(error);
    }
  }

  insertRule(rule: Rule): void {
    try {
      const list = this._list(this.KEY_RULES);
      this._setValue(this.KEY_RULES, [rule, ...list]);
    } catch (error) {
      console.log(error);
    }
  }

  fetchRule(id: string): any {
    try {
      const list = this._list(this.KEY_RULES);

      return list.find((rule: Rule) => rule.id === id);
    } catch (error) {
      console.log(error);
    }
  }

  updateRule(rule: Rule): void {
    try {
      const list = this._list(this.KEY_RULES);

      this._setValue(
        this.KEY_RULES,
        list.map((item: Rule, index: number) => {
          return item.id === rule.id ? rule : item;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  listSnippets(): any {
    return this._list(this.KEY_SNIPPETS);
  }

  listRules(): any {
    return this._list(this.KEY_RULES);
  }

  deleteRule(rule: Rule): any {
    try {
      const list = this._list(this.KEY_RULES);

      this._setValue(
        this.KEY_RULES,
        list.filter((item: Rule, index: number) => {
          return item.id !== rule.id;
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default LocalStorageClient;
