import React from 'react';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector} from 'react-redux';
import ListRules from '../../components/Rule/ListRules';
import HeadlineWithInsertButton from '../../components/headline/HeadlineWithInsertButton';
import RuleReference from '../../http/RuleReference';

export default function PageTagDetail(): JSX.Element | null {
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const [rules, setRules] = React.useState<any[]>([]);
  const name = reduxRule.targetTag;

  if (!reduxRule.targetTag) {
    return null;
  }

  React.useEffect(() => {
    if (name) {
      const ruleRef = new RuleReference();
      ruleRef.listByTag(name).then((documents: any[]) => {
        setRules(documents);
      });
    }
  }, [name]);

  if (rules.length === 0) {
    return null;
  }

  return (
    <>
      <div id="mainbar">
        <HeadlineWithInsertButton headline={`Tag: ${name}`} />
        <ListRules rules={rules} />
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
}
