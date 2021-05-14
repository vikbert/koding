import React from 'react';
import TagLink from './TagLink';

type PropsT = {
  name?: string;
};

export default function TagList(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <div className="post-taglist grid gs4 gsy fd-column">
        <div className="grid ps-relative">
          <TagLink path={'/tags/javascript'} name={'JavaScript'} />
          <TagLink path={'/tags/php'} name={'PHP'} />
        </div>
      </div>
    </>
  );
}
