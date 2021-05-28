import React from 'react';
import HeadlineWithInsertButton from '../../components/headline/HeadlineWithInsertButton';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import NoContent from '../../components/error/NoContent';
import Headline from '../../components/headline/Headline';

export default function PageTeam(): JSX.Element {
  return (
    <>
      <div id="mainbar">
        <Headline headline={'Teams'} />
        <div className="grid page__tag-list">
          <div className="grid--cell12">
            <NoContent />
          </div>
        </div>
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
}
