import {Database, Reference} from 'firebase-firestore-lite';
import useFirebase from '../hooks/useFirebase';
import {List} from 'firebase-firestore-lite/dist/List';
import {Rule} from '../types/Rule';

export const COLLECTION_RULES = 'KODING_RULES';

export default class RuleReference {
  db: Database;
  ref: Reference;

  constructor(path?: string) {
    this.db = useFirebase();
    this.ref = this.db.ref(path || COLLECTION_RULES);
  }

  async list(): Promise<List> {
    return await this.ref.list();
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