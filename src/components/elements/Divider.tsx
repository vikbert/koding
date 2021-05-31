import React from 'react';
import classNames from 'classnames';

type PropsT = {
  color?: string;
  size?: number;
  position?: string;
};

export default function Divider(props: PropsT): JSX.Element {
  const {color = 'yellow', size = 64, position = 'center'} = props;

  return (
    <>
      <span
        className={classNames(`w${size} h8 bar-pill d-block bg-${color}-500`, {
          'mx-auto': position === 'center',
        })}
      />
    </>
  );
}
