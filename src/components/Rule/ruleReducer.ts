import {RULE_ADDED, RULES_RECEIVED, SHOW_RULES, HIDE_RULES} from "./ruleAction";

export const ruleState = {show: false, rules: []}

export const ruleReducer = (state = ruleState, action: any) => {
  switch (action.type) {
    case RULE_ADDED:
      return {...state, rules: [action.rule, ...state.rules]};
    case RULES_RECEIVED:
      return {...state, rules: action.rules};
    case SHOW_RULES:
      return {...state, show: true};
    case HIDE_RULES:
      return {...state, show: false};
  }

  return state;
}
