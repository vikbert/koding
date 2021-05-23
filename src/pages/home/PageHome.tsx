import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ListRules from './ListRules';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import HeadlineHome from './HeadlineHome';
import {useSelector, useDispatch} from 'react-redux';
import {loadRules} from '../../components/Rule/ruleWidget';
import {loadSnippets} from '../../components/snippet/snippetAction';
import {Rule} from '../../types/Rule';

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
          <HeadlineHome/>
          <ListRules
              rules={reduxRule.rules.sort((a: Rule, b: Rule) =>
                  a.votes > b.votes ? -1 : 1,
              )}
          />
        </div>
        <div id="sidebar">
          <AsideReadingTips/>
        </div>
      </>
  );
};

export default PageHome;
