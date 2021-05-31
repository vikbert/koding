import {Team} from '../types/Team';
import BaseReference from './BaseReference';

export const COLLECTION_TEAM = 'KODING_TEAMS';

export default class TeamReference extends BaseReference {
  constructor(path?: string) {
    super(path || COLLECTION_TEAM);
  }

  async add(newTeam: Team): Promise<any> {
    const instance = this.db.transaction();

    instance.add(COLLECTION_TEAM, newTeam);

    try {
      return await instance.commit();
    } catch (error) {
      console.error(error);
    }
  }
}
