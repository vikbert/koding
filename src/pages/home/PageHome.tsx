import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ListRules from './ListRules';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import HeadlineHome from './HeadlineHome';
import {useSelector, useDispatch} from 'react-redux';
import {loadRules, loadMoreRules} from '../../components/Rule/ruleWidget';
import {loadSnippets} from '../../components/snippet/snippetAction';
import {Rule} from '../../types/Rule';
import {MAX_LIST_ITEMS} from '../../hooks/useFireStore';

const PageHome = () => {
  useDocumentTitle('Top coding conventions');
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const dispatch = useDispatch();

  function handleLoadMore() {
    dispatch(loadMoreRules(reduxRule.lastDocument, 1));
  }

  React.useEffect(() => {
    dispatch(loadRules());
    dispatch(loadSnippets());
  }, []);

  return (
    <>
      <div id="mainbar">
        <HeadlineHome />

        <ListRules rules={reduxRule.rules} />

        {/*<div className="grid float-right">*/}
        {/*  <button className="s-btn s-btn__filled" onClick={handleLoadMore}>load more</button>*/}
        {/*</div>*/}
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
};

export default PageHome;
