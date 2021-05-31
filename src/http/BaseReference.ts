import {Database, Reference} from 'firebase-firestore-lite';
import useFireStore from '../hooks/useFireStore';

export default class BaseReference {
  db: Database;
  ref: Reference;

  constructor(path: string) {
    this.db = useFireStore();
    this.ref = this.db.ref(path);
  }

  async listAll(): Promise<any> {
    return await this.ref.query({}).run();
  }

  async get(): Promise<any> {
    return await this.ref.get();
  }
}
