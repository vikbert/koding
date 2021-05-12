import LocalStorageClient from "../../services/LocalStorageClient";
import type {Rule} from "../../types/Rule";

export const RULE_ADDED = 'rule.rule_added'
export const RULE_DELETED = 'rule.rule_deleted'
export const RULE_UPDATED = 'rule.rule_updated'
export const RULES_RECEIVED = 'rule.rules_received'
export const SHOW_RULES = 'rule.show_wrapper'
export const HIDE_RULES = 'rule.hide_wrapper'
export const SHOW_POPUP = 'rule.show_popup'
export const HIDE_POPUP = 'rule.hide_popup'

export const showRules = () => ({
  type: SHOW_RULES,
})

export const hideRules = () => ({
  type: HIDE_RULES,
})

export const showPopup = (targetRule: Rule) => ({
  type: SHOW_POPUP,
  targetRule,
})

export const hidePopup = () => ({
  type: HIDE_POPUP,
})

export const ruleAdded = (rule: Rule) => ({
  type: RULE_ADDED,
  rule,
})

export const addRule = (rule: Rule) => {
  const client = new LocalStorageClient();
  client.insertRule(rule);

  return ruleAdded(rule);
}

export const ruleUpdated = (rule: Rule) => ({
  type: RULE_UPDATED,
  rule,
})

export const updateRule = (rule: Rule) => {
  const client = new LocalStorageClient();
  client.updateRule(rule);

  return ruleUpdated(rule);
}

export const rulesReceived = (rules: any) => ({
  type: RULES_RECEIVED,
  rules,
})

export const receiveRules = () => {
  const client = new LocalStorageClient();
  const rules = client.listRules();

  return rulesReceived(rules)
}

export const ruleDeleted = (rule: Rule) => ({
  type: RULE_DELETED,
  rule,
})

export const deleteRule = (rule: Rule) => {
  const client = new LocalStorageClient();
  client.deleteRule(rule);

  return ruleDeleted(rule);
}
