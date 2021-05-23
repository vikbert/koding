import React from 'react';
import {useParams} from 'react-router-dom';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useDispatch} from 'react-redux';
import {loadRules} from '../../components/Rule/ruleWidget';

export default function PageTagDetail(): JSX.Element | null {
  const dispatch = useDispatch();

  const {name} = useParams<{ name?: string }>();
  if (!name) {
    return null;
  }

  React.useEffect(() => {
    if (name) {
      dispatch(loadRules());
    }
  }, [name]);

  return (
      <>
        <div id="mainbar">
          <div className="grid">
            <h1 className={'grid-cell fl1'}>Tag: {name}</h1>
          </div>
          <div className="grid">
            <div className="grid--cell12 text-centered"></div>
          </div>
        </div>
        <div id="sidebar">
          <AsideReadingTips/>
        </div>
      </>
  );
}
