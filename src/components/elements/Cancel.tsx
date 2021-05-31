import React from 'react';

type PropsT = {
  fallbackPath: string;
};

export default function Cancel(props: PropsT): JSX.Element {
  const {fallbackPath} = props;

  return (
    <a href={fallbackPath} className="grid--cell s-btn s-btn__muted">
      Cancel
    </a>
  );
}
