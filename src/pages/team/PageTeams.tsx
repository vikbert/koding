import React from 'react';
import Headline from '../../components/headline/Headline';
import {useSelector, useDispatch} from 'react-redux';
import {loadTeams} from '../../components/team/teamWidget';
import LoadingContent from '../../components/loading/LoadingContent';
import TeamList from '../../components/team/TeamList';

export default function PageTeams(): JSX.Element {
  const dispatch = useDispatch();
  const reduxTeam = useSelector((state: any) => state.reduxTeam);
  const teamsFound = reduxTeam && reduxTeam.list.length > 0;

  React.useEffect(() => {
    dispatch(loadTeams());
  }, []);

  return (
    <>
      <div id="mainbar">
        <Headline headline={'Teams'} />
        <div className="grid page__tag-list">
          <div className="grid--cell12">
            {teamsFound ? (
              // reduxTeam.map((item: Team, index: number) => <h1 key={index}>{item.name}</h1>)
              <TeamList teams={reduxTeam.list} />
            ) : (
              <LoadingContent />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
