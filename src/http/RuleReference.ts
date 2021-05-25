import {Database, Reference} from 'firebase-firestore-lite';
import {Rule} from '../types/Rule';
import useFireStore, {MAX_LIST_ITEMS} from '../hooks/useFireStore';
import {Document} from 'firebase-firestore-lite/dist/Document';

export const COLLECTION_RULES = 'KODING_RULES';

export default class RuleReference {
  db: Database;
  ref: Reference;

  constructor(path?: string) {
    this.db = useFireStore();
    this.ref = this.db.ref(path || COLLECTION_RULES);
  }

  async list(): Promise<any> {
    const topRulesQuery = this.ref.query({
      orderBy: {field: 'views', direction: 'desc'},
      limit: MAX_LIST_ITEMS,
    });

    return await topRulesQuery.run();
  }

  async loadLastRule(): Promise<any> {
    const topRulesQuery = this.ref.query({
      orderBy: {field: 'createdAt', direction: 'desc'},
      limit: 1,
    });

    return await topRulesQuery.run();
  }

  async loadMore(rule: Document, limit: number): Promise<any> {
    const topRulesQuery = this.ref.query({
      orderBy: {field: 'views', direction: 'desc'},
      startAt: rule,
      offset: 1,
      limit: limit,
    });

    return await topRulesQuery.run();
  }

  async listBatch(documentPaths: string[]): Promise<any> {
    return await this.db.batchGet(documentPaths);
  }

  async get(): Promise<any> {
    return await this.ref.get();
  }

  async add(rule: Rule): Promise<Reference> {
    const ref = await this.ref.add(rule);
    if (ref instanceof Reference) {
      return ref;
    }

    throw new Error('Add a new rule to firebase failed!');
  }

  async update(rule: Rule): Promise<void> {
    const ref = await this.ref.update(rule);

    if (undefined === ref) {
      return;
    }

    throw new Error('Update the rule to firebase failed!');
  }
}
