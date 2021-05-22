import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Layout from '../Layout';
import ListRules from './ListRules';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import HeadlineHome from './HeadlineHome';
import {useSelector, useDispatch} from 'react-redux';
import {loadRules} from '../../components/Rule/ruleWidget';
import {loadSnippets} from '../../components/snippet/snippetAction';
import {Rule} from '../../types/Rule';
import useFirebase from "../../hooks/useFirebase";

const PageHome = () => {
  useDocumentTitle('Top coding conventions');
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const dispatch = useDispatch();

  const db = useFirebase();
  const ref = db.ref('APP_TAGS');

  const loadUser = async () => {
    const doc = await ref.list();
    console.log(doc);
  }

  React.useEffect(() => {
    dispatch(loadRules());
    dispatch(loadSnippets());
  }, []);

  return (
      <>
        <Layout>
          <div id="content" className="snippet-hidden">
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
          </div>
        </Layout>
      </>
  );
};

export default PageHome;
