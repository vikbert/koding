import React from 'react';

type PropsT = {
  size?: number;
};

export default function IconTeam(props: PropsT): JSX.Element {
  const {size = 2} = props;
  return (
    <span
      style={{fontSize: `${size}rem`}}
      className="iconify"
      data-icon="fluent:people-team-16-regular"
      data-inline="false"
    />
  );
}
