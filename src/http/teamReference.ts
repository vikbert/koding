import {Database, Reference} from 'firebase-firestore-lite'
import useFireStore from '../hooks/useFireStore'

const COLLECTION_TEAM = 'KODING_TEAMS'

export default class TeamReference {
  db: Database
  ref: Reference

  constructor(path?: string) {
    this.db = useFireStore()
    this.ref = this.db.ref(path || COLLECTION_TEAM)
  }

  async listAll(): Promise<any> {
    return await this.ref.query({}).run()
  }
}
