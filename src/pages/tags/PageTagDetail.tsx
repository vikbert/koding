import React from 'react';
import {useParams} from 'react-router-dom';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useDispatch, useSelector} from 'react-redux';
import {loadRules} from '../../components/Rule/ruleWidget';
import TagReference from '../../http/TAGReference';
import {Rule} from '../../types/Rule';
import ListRules from '../home/ListRules';

export default function PageTagDetail(): JSX.Element | null {
  const dispatch = useDispatch();
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const [rules, setRules] = React.useState<any[]>([]);
  const tagRef = new TagReference();

  const {name} = useParams<{ name?: string }>();
  if (!name) {
    return null;
  }

  React.useEffect(() => {
    if (name) {
      dispatch(loadRules());
    }
  }, [name]);

  React.useEffect(() => {
    if (!reduxRule || reduxRule.rules.length === 0) {
      return;
    }

    tagRef.listByName(name).then((list: any) => {
      let rules: any[] = [];
      list.forEach((item: any) => {
        const found = reduxRule.rules.find(
            (rule: Rule) => rule.id === item.rule,
        );
        if (found) {
          rules = [found, ...rules];
        }
      });

      setRules(rules);
    });
  }, [reduxRule, name]);

  if (rules.length === 0) {
    return null;
  }

  return (
      <>
        <div id="mainbar">
          <div className="grid">
            <h1 className={'grid-cell fl1'}>Tag: {name}</h1>
          </div>
          <ListRules rules={rules}/>
        </div>
        <div id="sidebar">
          <AsideReadingTips/>
        </div>
      </>
  );
}
