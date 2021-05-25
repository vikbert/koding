import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector, useDispatch} from 'react-redux';
import {loadLastRule} from '../../components/Rule/ruleWidget';
import LoadingContent from '../../components/loading/LoadingContent';
import RuleDetail from '../../components/Rule/RuleDetail';
import Headline from '../../components/headline/Headline';

const PageHome = () => {
  useDocumentTitle('The newest');
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadLastRule());
  }, []);

  return (
    <>
      <div id="mainbar">
        <Headline headline="The newest Coding Convention" />
        {!reduxRule || !reduxRule.targetRule ? (
          <LoadingContent />
        ) : (
          <RuleDetail targetRule={reduxRule.targetRule} />
        )}
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
};

export default PageHome;
