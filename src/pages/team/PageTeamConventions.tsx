import React from 'react';
import HeadlineWithBg from '../../components/headline/HeadlineWithBg';
import HeadlineTeam from '../../components/headline/HeadlineTeam';

type PropsT = {
  name?: string;
};

export default function PageTeamConventions(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <HeadlineTeam headline={'Your Team Name'} imagePath={'bg_team.svg'} />
    </>
  );
}
