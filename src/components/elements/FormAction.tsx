import React from 'react';

type PropsT = {
  children: any;
};

export default function FormAction(props: PropsT): JSX.Element {
  return (
    <>
      <div className="grid gsx gs4 mt32 float-right">{props.children}</div>
    </>
  );
}
