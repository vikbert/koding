import React from 'react';
import {Link} from 'react-router-dom';

type PropsT = {
  path: string;
  name: string;
};

export default function TagLink(props: PropsT): JSX.Element {
  return (
    <>
      <Link
        to={props.path}
        className="post-tag js-gps-track"
        title={`"show convention tagged ${props.name}`}
        rel="tag"
      >
        {props.name}
      </Link>{' '}
    </>
  );
}
