import LocalStorageClient from "../../services/LocalStorageClient";
import {Rule} from "../../types/Rule";

export const RULE_ADDED = 'rule.rule_added'
export const RULES_RECEIVED = 'rule.rules_RECEIVED'
export const SHOW_RULES = 'rule.SHOW'
export const HIDE_RULES = 'rule.HIDE'

export const ruleAdded = (rule: Rule) => ({
  type: RULE_ADDED,
  rule,
})

export const rulesReceived = (rules: string[]) => ({
  type: RULES_RECEIVED,
  rules,
})

export const addRule = (rule: Rule) => {
  const client = new LocalStorageClient();
  client.saveRule(rule);

  return function(dispatch: any) {
    dispatch(ruleAdded(rule));
  };
}

export const fetchRules = () => {
  const client = new LocalStorageClient();
  const rules = client.listRules();

  return function(dispatch: any) {
    dispatch(rulesReceived(rules));
  };
}

export const showRules = () => ({
  type: SHOW_RULES,
})

export const hideRules = () => ({
  type: HIDE_RULES,
})
