import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ListRules from '../../components/Rule/ListRules';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector, useDispatch} from 'react-redux';
import {loadRules} from '../../components/Rule/ruleWidget';
import {loadSnippets} from '../../components/snippet/snippetAction';
import HeadlineWithInsertButton from '../../components/headline/HeadlineWithInsertButton';

const PageHome = () => {
  useDocumentTitle('Top coding conventions');
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadRules());
    dispatch(loadSnippets());
  }, []);

  return (
    <>
      <div id="mainbar">
        <HeadlineWithInsertButton headline={`Top Coding Convention (${reduxRule.rules.length})`} />
        <ListRules rules={reduxRule.rules} />
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
};

export default PageHome;
