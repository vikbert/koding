import React from 'react';

type PropsT = {
  size?: number;
};

export default function IconCertificate(props: PropsT): JSX.Element {
  const {size = 2} = props;

  return (
    <span
      style={{fontSize: `${size}rem`}}
      className="iconify"
      data-icon="grommet-icons:certificate"
      data-inline="false"
    />
  );
}
