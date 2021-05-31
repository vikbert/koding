import {Action} from '../../types/Action';
import {Team} from '../../types/Team';
import TeamReference from '../../http/teamReference';
import {Document} from 'firebase-firestore-lite/dist/Document';

export const TEAM_ADDED = 'team_added';
export const TEAM_DETAIL_LOADED = 'team_loaded';
export const TEAMS_LOADED = 'teams_loaded';

export const teamState = {
  list: [],
  detail: null,
};
export const teamReducer = (state = teamState, action: any) => {
  switch (action.type) {
    case TEAMS_LOADED:
      return {...state, list: action.teams};

    case TEAM_DETAIL_LOADED:
      return {...state, detail: action.team};

    case TEAM_ADDED:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    default:
      return state;
  }
};

export const teamAdded = (newTeam: Team) => ({
  type: TEAM_ADDED,
  newTeam,
});

export const teamsLoaded = (teams: Team[]) => ({
  type: TEAMS_LOADED,
  teams,
});

export const loadTeams = () => {
  return function (dispatch: any) {
    const teamRef = new TeamReference();

    teamRef.listAll().then((documents: any) => {
      const teamsWithDocId = documents.map((item: Document) => {
        return {
          ...item,
          documentId: item.__meta__.id,
        };
      });
      return dispatch(teamsLoaded(teamsWithDocId));
    });
  };
};

export const detailLoaded = (team: Team) => ({
  type: TEAM_DETAIL_LOADED,
  team,
});
