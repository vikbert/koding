import React from 'react';
import {Link} from 'react-router-dom';

type PropsT = {
  path: string;
  name: string;
};

export default function ActionLink(props: PropsT): JSX.Element {
  return (
    <>
      <Link to={props.path} className="js-suggest-edit-post js-gps-track">
        {props.name}
      </Link>
    </>
  );
}
