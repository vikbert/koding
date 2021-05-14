import {
  RULE_ADDED,
  RULES_RECEIVED,
  SHOW_RULES,
  HIDE_RULES,
  SHOW_POPUP,
  HIDE_POPUP,
  RULE_UPDATED,
  RULE_DELETED,
} from './ruleAction';
import type {Rule} from '../../types/Rule';

export const ruleState = {
  showWrapper: false,
  showPopup: false,
  rules: [],
  targetRule: null,
};

export const ruleReducer = (state = ruleState, action: any) => {
  switch (action.type) {
    case RULE_ADDED:
      return {
        ...state,
        rules: [action.rule, ...state.rules],
        targetRule: action.rule,
      };

    case RULE_UPDATED:
      const updatedRules = state.rules.map((item: Rule) => {
        return item.id === action.rule.id ? action.rule : item;
      });

      return {...state, rules: updatedRules};

    case RULE_DELETED:
      const reducedRules = state.rules.filter((item: Rule) => {
        return item.id !== action.rule.id;
      });

      return {...state, rules: reducedRules};

    case RULES_RECEIVED:
      return {...state, targetRule: action.rule};

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
};
