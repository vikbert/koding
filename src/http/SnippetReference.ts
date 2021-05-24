import {Database, Reference} from 'firebase-firestore-lite';
import useFirebase from '../hooks/useFirebase';
import {List} from 'firebase-firestore-lite/dist/List';
import {Snippet} from '../types/Snippet';

const COLLECTION_SNIPPET = 'KODING_SNIPPETS';

export default class SnippetReference {
  db: Database;
  ref: Reference;

  constructor(path?: string) {
    this.db = useFirebase();
    this.ref = this.db.ref(path || COLLECTION_SNIPPET);
  }

  async list(): Promise<List> {
    return await this.ref.list();
  }

  async getBySnippetId(snippetId: string): Promise<any> {
    const query = this.ref.query({
      where: [['id', '==', snippetId]],
    });

    return await query.run();
  }

  async add(snippet: Snippet): Promise<Reference> {
    const ref = await this.ref.add(snippet);
    if (ref instanceof Reference) {
      return ref;
    }

    throw new Error('Add a new snippet to firebase failed!');
  }

  async update(codeBody: string): Promise<void> {
    const ref = await this.ref.update({body: codeBody});

    if (undefined === ref) {
      return;
    }

    throw new Error('Update the snippet to firebase failed!');
  }
}
