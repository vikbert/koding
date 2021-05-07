import {RULE_ADDED, RULES_RECEIVED, SHOW_RULES, HIDE_RULES, SHOW_POPUP, HIDE_POPUP, RULE_UPDATED} from "./ruleAction";
import {Rule} from "../../types/Rule";

export const ruleState = {showWrapper: false, showPopup: false, rules: [], targetRule: null}

export const ruleReducer = (state = ruleState, action: any) => {
  switch (action.type) {
    case RULE_ADDED:
      return {...state, rules: [action.rule, ...state.rules]};
    case RULE_UPDATED:
      const updatedRules = state.rules.map((item: Rule, index: number) => {
        return item.id === action.rule.id ? action.rule : item;
      });
      return {...state, rules: updatedRules};
    case RULES_RECEIVED:
      return {...state, rules: action.rules};
    case SHOW_RULES:
      return {...state, showWrapper: true};
    case HIDE_RULES:
      return {...state, showWrapper: false};
    case SHOW_POPUP:
      return {...state, showPopup: true, targetRule: action.targetRule};
    case HIDE_POPUP:
      return {...state, showPopup: false};
  }

  return state;
}
