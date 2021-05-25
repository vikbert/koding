import type {Rule} from '../../types/Rule';
import RuleReference, {COLLECTION_RULES} from '../../http/RuleReference';
import {setError, unsetError} from '../error/errorWidget';
import {Document} from 'firebase-firestore-lite/dist/Document';

export const RULE_ADDED = 'rule.rule_added';
export const RULE_FETCHED = 'rule.rule_fetched';
export const RULE_DELETED = 'rule.rule_deleted';
export const RULE_UPDATED = 'rule.rule_updated';
export const RULES_RECEIVED = 'rule.rules_received';
export const MORE_RULES_RECEIVED = 'rule.more_rules_received';
export const SHOW_RULES = 'rule.show_wrapper';
export const HIDE_RULES = 'rule.hide_wrapper';
export const SHOW_POPUP = 'rule.show_popup';
export const HIDE_POPUP = 'rule.hide_popup';
export const TARGET_CLEANUP = 'rule.target_cleanup';
export const LAST_DOCUMENT_MARKED = 'rule.last_document_marked';

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
    return ruleRef.add(rule).then(() => {
      dispatch(ruleAdded(rule));
    });
  };
};

export const ruleUpdated = (rule: Rule) => ({
  type: RULE_UPDATED,
  rule,
});

export const rulesReceived = (rules: any) => ({
  type: RULES_RECEIVED,
  rules,
});

export const moreRulesReceived = (rules: any) => ({
  type: MORE_RULES_RECEIVED,
  rules,
});

export const lastDocumentMarked = (rule: any) => ({
  type: LAST_DOCUMENT_MARKED,
  rule,
});

export const loadRules = () => {
  return function (dispatch: any) {
    const ruleRef = new RuleReference();

    return ruleRef.list().then((documents: any) => {
      dispatch(rulesReceived(documents));
      dispatch(lastDocumentMarked(documents.slice(-1).pop()));
    });
  };
};

export const loadLastRule = () => {
  return function (dispatch: any) {
    const ruleRef = new RuleReference();

    return ruleRef.loadLastRule().then((documents: any) => {
      if (documents.length > 0) {
        dispatch(ruleFetched(documents[0]));
        dispatch(lastDocumentMarked(documents[0]));
      } else {
        dispatch(setError('No data found!'));
      }
    });
  };
};

export const loadMoreRules = (rule: Document, limit: number) => {
  return function (dispatch: any) {
    const ruleRef = new RuleReference();

    return ruleRef.loadMore(rule, limit).then((documents: any) => {
      dispatch(moreRulesReceived(documents));
      dispatch(lastDocumentMarked(documents.slice(-1).pop()));
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
});

export const updateRule = (rule: Rule) => {
  const ruleRef = new RuleReference(`${COLLECTION_RULES}/${rule.documentId}`);

  return function (dispatch: any) {
    return ruleRef
        .update(rule)
        .then(() => {
          dispatch(ruleUpdated(rule));
          dispatch(unsetError());
        })
        .catch(() => {
          dispatch(setError('Document can not be updated!'));
        });
  };
};

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
  lastDocument: null,
  targetRule: null,
};

const enrichRuleMetaData = (rule: any) => {
  if (rule.hasOwnProperty('__meta__')) {
    return {
      ...rule,
      path: rule.__meta__.path,
      documentId: rule.__meta__.id,
    };
  }

  return rule;
}

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
      return {...state, targetRule: enrichRuleMetaData(action.rule)};

    case LAST_DOCUMENT_MARKED:
      return {...state, lastDocument: action.rule};

    case RULES_RECEIVED:
      const enriched = action.rules.map((rule: any) => {
        return {
          ...rule,
          path: rule.__meta__.path,
          documentId: rule.__meta__.id,
        };
      });

      return {...state, rules: enriched};

    case MORE_RULES_RECEIVED:
      const enrichedRules = action.rules.map((rule: any) => {
        return {
          ...rule,
          path: rule.__meta__.path,
          documentId: rule.__meta__.id,
        };
      });

      return {...state, rules: [...state.rules, ...enrichedRules]};

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
