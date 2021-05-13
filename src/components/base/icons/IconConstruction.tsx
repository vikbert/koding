import React from 'react';

type PropsT = {
  size?: number;
};

export default function IconConstruction(props: PropsT): JSX.Element {
  const {size} = props;

  return (
    <>
      <span
        style={{fontSize: `${size}rem`}}
        className="iconify"
        data-icon="emojione-monotone:construction"
        data-inline="false"
      />
    </>
  );
}
