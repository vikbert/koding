import LocalStorageClient from '../../services/LocalStorageClient';
import type {Rule} from '../../types/Rule';
import TagReference from "../../http/TAGReference";
import {Reference} from "firebase-firestore-lite";
import {tagUpdated} from "../tag/tagWidget";
import RuleReference from "../../http/RuleReference";

export const RULE_ADDED = 'rule.rule_added';
export const RULE_FETCHED = 'rule.rule_fetched';
export const RULE_DELETED = 'rule.rule_deleted';
export const RULE_UPDATED = 'rule.rule_updated';
export const RULES_RECEIVED = 'rule.rules_received';
export const SHOW_RULES = 'rule.show_wrapper';
export const HIDE_RULES = 'rule.hide_wrapper';
export const SHOW_POPUP = 'rule.show_popup';
export const HIDE_POPUP = 'rule.hide_popup';

export const showRules = () => ({
  type: SHOW_RULES,
});

export const hideRules = () => ({
  type: HIDE_RULES,
});

export const showPopup = (targetRule: Rule) => ({
  type: SHOW_POPUP,
  targetRule,
});

export const hidePopup = () => ({
  type: HIDE_POPUP,
});

export const ruleAdded = (rule: Rule) => ({
  type: RULE_ADDED,
  rule,
});

export const addRule = (rule: Rule) => {
  const client = new LocalStorageClient();
  client.insertRule(rule);

  return function (dispatch: any) {
    const ruleRef = new RuleReference();
    return ruleRef.add(rule).then((ref: Reference) => {
      dispatch(ruleAdded(rule));
    });
  };
};

export const ruleUpdated = (rule: Rule) => ({
  type: RULE_UPDATED,
  rule,
});

export const updateRule = (rule: Rule) => {
  const client = new LocalStorageClient();
  client.updateRule(rule);

  return ruleUpdated(rule);
};

export const rulesReceived = (rules: any) => ({
  type: RULES_RECEIVED,
  rules,
});

export const loadRules = () => {
  const client = new LocalStorageClient();
  const rules = client.listRules();

  return rulesReceived(rules);
};

export const ruleDeleted = (rule: Rule) => ({
  type: RULE_DELETED,
  rule,
});

export const deleteRule = (rule: Rule) => {
  const client = new LocalStorageClient();
  client.deleteRule(rule);

  return ruleDeleted(rule);
};

export const ruleFetched = (rule: Rule) => ({
  type: RULE_FETCHED,
  rule,
});

export const fetchRule = (id: string) => {
  const client = new LocalStorageClient();
  const matchedRule = client.fetchRule(id);

  return ruleFetched(matchedRule);
};

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

    case RULE_FETCHED:
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
