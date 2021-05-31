import React from 'react';
import TeamReference, {COLLECTION_TEAM} from '../../http/teamReference';
import {useParams} from 'react-router-dom';
import {Team} from '../../types/Team';
import HeadlineHero from '../../components/headline/HeadlineHero';
import ShowCaseWithIcon from '../../components/showcase/ShowCaseWithIcon';
import {useDispatch} from 'react-redux';
import {detailLoaded} from '../../components/team/teamWidget';

export default function PageTeamDetail(): JSX.Element | null {
  const {documentId} = useParams<{documentId: string}>();
  const [team, setTeam] = React.useState<Team>({name: '', description: ''});
  const dispatch = useDispatch();

  React.useEffect(() => {
    const teamRef = new TeamReference(`/${COLLECTION_TEAM}/${documentId}`);
    teamRef.get().then((document: any) => {
      setTeam(document);
      dispatch(detailLoaded(document));
    });
  }, [documentId]);

  const items = [
    {
      icon: 'carbon:rule',
      title: '30 Coding Conventions',
    },
    {
      icon: 'fluent:tag-16-regular',
      title: '16 Convention Tags',
    },
    {
      icon: 'fluent:people-team-32-regular',
      title: '8 Team Members',
    },
  ];
  return (
    <>
      <HeadlineHero
        image={'bg_team.svg'}
        headline={team.name}
        description={team.description}
        linkPath={`/conventions/top`}
        linkText={'Check the community conventions'}
      />
      <ShowCaseWithIcon items={items} />
    </>
  );
}
