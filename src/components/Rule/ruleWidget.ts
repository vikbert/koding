import type {Rule} from '../../types/Rule';
import {Reference} from 'firebase-firestore-lite';
import RuleReference, {COLLECTION_RULES} from '../../http/RuleReference';
import {List} from 'firebase-firestore-lite/dist/List';
import {FirebaseDocument} from 'firebase-firestore-lite/dist/Document';
import {setError, unsetError} from '../error/errorWidget';

export const RULE_ADDED = 'rule.rule_added';
export const RULE_FETCHED = 'rule.rule_fetched';
export const RULE_DELETED = 'rule.rule_deleted';
export const RULE_UPDATED = 'rule.rule_updated';
export const RULES_RECEIVED = 'rule.rules_received';
export const SHOW_RULES = 'rule.show_wrapper';
export const HIDE_RULES = 'rule.hide_wrapper';
export const SHOW_POPUP = 'rule.show_popup';
export const HIDE_POPUP = 'rule.hide_popup';
export const TARGET_CLEANUP = 'rule.target_cleanup';

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
  console.log('update rule: ' + rule.documentId);
  const ruleRef = new RuleReference(`${COLLECTION_RULES}/${rule.documentId}`);

  return function (dispatch: any) {
    return ruleRef
      .update(rule)
      .then((document) => {
        dispatch(ruleUpdated(rule));
        dispatch(unsetError());
      })
      .catch(() => {
        dispatch(setError('Document can not be updated!'));
      });
  };
};

export const rulesReceived = (rules: any) => ({
  type: RULES_RECEIVED,
  rules,
});

export const loadRules = () => {
  return function (dispatch: any) {
    const ruleRef = new RuleReference();

    return ruleRef.list().then((list: List) => {
      dispatch(rulesReceived(list.documents));
    });
  };
};

export const ruleDeleted = (rule: Rule) => ({
  type: RULE_DELETED,
  rule,
});

export const deleteRule = (rule: Rule) => {
  return ruleDeleted(rule);
};

export const ruleFetched = (rule: Rule) => ({
  type: RULE_FETCHED,
  rule,
});

export const cleanUpTargetRule = () => ({
  type: TARGET_CLEANUP,
})

export const fetchRule = (documentId: string) => {
  const ruleRef = new RuleReference(`${COLLECTION_RULES}/${documentId}`);

  return function (dispatch: any) {
    return ruleRef
      .get()
      .then((document) => {
        dispatch(ruleFetched({...document, documentId}));
        dispatch(unsetError());
      })
      .catch(() => {
        dispatch(setError('Document was not found!'));
      });
  };
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

      return {...state, rules: updatedRules, targetRule: action.rule};

    case TARGET_CLEANUP:
      return {...state, targetRule: null};

    case RULE_DELETED:
      const reducedRules = state.rules.filter((item: Rule) => {
        return item.id !== action.rule.id;
      });

      return {...state, rules: reducedRules};

    case RULE_FETCHED:
      return {...state, targetRule: action.rule};

    case RULES_RECEIVED:
      const enriched = action.rules.map((rule: FirebaseDocument) => {
        // @ts-ignore
        const {__meta__: {path, id}} = rule;

        return {...rule, path, documentId: id};
      });

      return {...state, rules: enriched};

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
