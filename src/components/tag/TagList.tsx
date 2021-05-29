import React from 'react';

type PropsT = {
  children?: any;
};

export default function TagList(props: PropsT): JSX.Element | null {
  if (!props.children) {
    return null;
  }

  return (
    <>
      <div className="post-taglist grid gs4 gsy fd-column">
        <div className="ps-relative">{props.children}</div>
      </div>
    </>
  );
}
