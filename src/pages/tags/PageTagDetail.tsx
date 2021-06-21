import React from 'react';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import {useSelector} from 'react-redux';
import ListRules from '../../components/Rule/ListRules';
import HeadlineWithInsertButton from '../../components/headline/HeadlineWithInsertButton';
import RuleReference from '../../http/RuleReference';
import {useParams} from "react-router-dom";

export default function PageTagDetail(): JSX.Element | null {
  const [rules, setRules] = React.useState<any[]>([]);
  const {tagName} = useParams<{tagName?: string}>();

  React.useEffect(() => {
    if (tagName) {
      const ruleRef = new RuleReference();
      ruleRef.listByTag(tagName).then((documents: any[]) => {
        setRules(documents);
      });
    }
  }, [tagName]);

  if (rules.length === 0) {
    return null;
  }

  return (
    <>
      <div id="mainbar">
        <HeadlineWithInsertButton headline={`Tag: ${tagName}`} />
        <ListRules rules={rules} />
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
}
