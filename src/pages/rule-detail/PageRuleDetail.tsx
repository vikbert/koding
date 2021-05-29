import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRule, cleanUpTargetRule} from '../../components/Rule/ruleWidget';
import AsideInformation from '../../components/aside/AsideInformation';
import LoadingContent from '../../components/loading/LoadingContent';
import RuleDetail from '../../components/Rule/RuleDetail';

export default function PageRuleDetail(): JSX.Element | null {
  const {documentId} = useParams<{documentId?: string}>();
  const dispatch = useDispatch();
  const targetRule = useSelector((state: any) => state.reduxRule.targetRule);

  if (!documentId) {
    return null;
  }

  React.useEffect(() => {
    try {
      dispatch(fetchRule(documentId));
    } catch (error) {}

    return function () {
      dispatch(cleanUpTargetRule());
    };
  }, [documentId]);

  return (
    <>
      <div id="mainbar">
        {!targetRule ? (
          <LoadingContent />
        ) : (
          <RuleDetail targetRule={targetRule} />
        )}
      </div>
      <div id="sidebar">
        <AsideInformation title={'Toggle code preview view'}>
          <p>click on the code snippet to expand or collapse the preview.</p>
        </AsideInformation>
      </div>
    </>
  );
}
