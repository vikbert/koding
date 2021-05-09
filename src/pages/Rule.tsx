import React from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import RulePopup from "../components/Rule/RulePopup";
import {useSelector} from "react-redux";
import InsertRule from "../components/Rule/InsertRule";

const Rule = () => {
  useDocumentTitle('Bad snippets')
  const ruleState = useSelector((state: any) => state.reduxRule);

  function handleOnClick() {

  }

  return (
      <>
        {ruleState.showPopup && (
            <RulePopup rule={ruleState.targetRule}/>
        )}

        <div className="page" id="page-bad">
          <Header title={'Coding Conventions'}>
            <div className={'menu-icon'} onClick={handleOnClick}>
              <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
            </div>
          </Header>
          <section className="page-content">
            <div className="container">
              <InsertRule/>
            </div>
          </section>
        </div>
      </>
  );
};

export default Rule;
