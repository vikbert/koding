import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Layout from '../Layout';
import ListRules from './ListRules';
import AsideHome from './AsideHome';
import HeadlineHome from './HeadlineHome';
import {useSelector, useDispatch} from 'react-redux';
import {loadRules} from '../../components/Rule/ruleAction';
import {loadSnippets} from '../../components/code/snippetAction';

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
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <HeadlineHome />
            <ListRules rules={reduxRule.rules} />
          </div>
          <div id="sidebar">
            <AsideHome />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PageHome;
