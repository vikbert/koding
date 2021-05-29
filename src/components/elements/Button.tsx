import React from 'react';

type PropsT = {
  name: string;
  variantClass?: string;
  onClickHandler: (event: any) => void;
};

export default function Button(props: PropsT): JSX.Element {
  const {name, variantClass = 's-btn__filled', onClickHandler} = props;

  return (
    <>
      <button
        className={'grid--cell s-btn ' + variantClass}
        onClick={(event: any) => onClickHandler(event)}
      >
        {name}
      </button>
    </>
  );
}
