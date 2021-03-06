import {Database, Reference} from 'firebase-firestore-lite';
import {Tag} from '../types/Tag';
import useFireStore from '../hooks/useFireStore';

const COLLECTION_SNIPPET = 'KODING_TAGS';

export default class TagReference {
  db: Database;
  ref: Reference;

  constructor(path?: string) {
    this.db = useFireStore();
    this.ref = this.db.ref(path || COLLECTION_SNIPPET);
  }

  async listAll(): Promise<any> {
    return await this.ref.query({}).run();
  }

  async listByName(tagName: string): Promise<any> {
    const queryByName = this.ref.query({
      where: [['name', '==', tagName]],
    });

    return await queryByName.run();
  }

  async add(tag: Tag): Promise<Reference> {
    const ref = await this.ref.add(tag);
    if (ref instanceof Reference) {
      return ref;
    }

    throw new Error('Add a new tag to firebase failed!');
  }
}
