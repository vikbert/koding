import React from 'react';
import AsideInsert from './insert/AsideInsert';
import FormInsert from './insert/FormInsert';

type PropsT = {
  name?: string;
};

export default function OverflowInsert(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <div className="container">
        <div className="left-sidebar js-pinned-left-sidebar ps-relative" />
        <div id="content" className="pt0 snippet-hidden">
          <div className="grid ai-center py24 bg-no-repeat bg-right-bottom wide:bg-image-ask-v2 wide:h-ask-v2-background">
            <div className="fs-headline1">Add a new coding convention</div>
          </div>
          <div className="grid ai-start jc-space-between md:fd-column md:ai-stretch">
            <FormInsert />
            <AsideInsert />
          </div>
        </div>
      </div>
    </>
  );
}
