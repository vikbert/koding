import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setTargetTag} from '../Rule/ruleWidget';

type PropsT = {
  path: string;
  name: string;
};

export default function TagLink(props: PropsT): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = (event: any) => {
    event.preventDefault();

    dispatch(setTargetTag(props.name));
    history.push(props.path);
  };
  return (
    <>
      <Link
        to={props.path}
        className="post-tag js-gps-track"
        title={`show conventions tagged by "${props.name}"`}
        onClick={handleOnClick}
        rel="tag"
      >
        {props.name}
      </Link>{' '}
    </>
  );
}
