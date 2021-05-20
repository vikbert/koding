import type {Snippet} from '../types/Snippet';
import type {Rule} from '../types/Rule';
import {Tag} from '../types/Tag';

class LocalStorageClient {
  KEY_SNIPPETS = 'APP_SNIPPETS';
  KEY_RULES = 'APP_RULES';
  KEY_TAGES = 'APP_TAGES';

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
  // snippets
  //-----------------------

  insertSnippet(code: Snippet): void {
    try {
      const list = this.listSnippets();
      this._setValue(this.KEY_SNIPPETS, [code, ...list]);
    } catch (error) {
      console.log(error);
    }
  }

  updateSnippet(snippet: Snippet): void {
    try {
      const list = this.listSnippets();

      this._setValue(
        this.KEY_SNIPPETS,
        list.map((item: Snippet, index: number) => {
          return item.id === snippet.id ? snippet : item;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  listSnippets(): any {
    return this._list(this.KEY_SNIPPETS, []);
  }

  //-----------------------
  // rules
  //-----------------------

  insertRule(rule: Rule): void {
    try {
      const list = this.listRules();
      this._setValue(this.KEY_RULES, [rule, ...list]);
    } catch (error) {
      console.log(error);
    }
  }

  fetchRule(id: string): any {
    try {
      const list = this.listRules();

      return list.find((rule: Rule) => rule.id === id);
    } catch (error) {
      console.log(error);
    }
  }

  updateRule(rule: Rule): void {
    try {
      const list = this.listRules();

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

  listRules(): any {
    return this._list(this.KEY_RULES, []);
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

  //-----------------------
  // tags
  //-----------------------

  createAndUpdateTag(tag: Tag) {
    // {'class': ["id_1", "id_2", "id_3"]}
    const tags = this.listTags();

    const keys = Object.keys(tags);
    if (keys.includes(tag.name)) {
      const prevRules = tags[tag.name];
      // @ts-ignore
      tags[tag.name] = [...new Set([...tag.rules, ...prevRules])];
    } else {
      tags[tag.name] = tag.rules;
    }

    this._setValue(this.KEY_TAGES, tags);
  }

  listTags(): any {
    return this._list(this.KEY_TAGES, {});
  }
}

export default LocalStorageClient;
