import RuleReference from '../../http/RuleReference';
import TagReference from '../../http/TagReference';
import {Tag} from '../../types/Tag';
import {removeDuplicatedTags} from '../../utils/Array';

export const SEARCH_RULES_FINISHED = 'search_rules_finished';
export const SEARCH_TAGES_FINISHED = 'search_tags_finished';

export const searchState = {rules: [], tags: []};

export const searchReducer = (state = searchState, action: any) => {
  switch (action.type) {
    case SEARCH_RULES_FINISHED:
      return {
        ...state,
        rules: action.rules,
      };

    case SEARCH_TAGES_FINISHED:
      return {
        ...state,
        tags: action.tags,
      };
    default:
      return state;
  }
};

export const searchRulesSucceed = (rules: any[]) => ({
  type: SEARCH_RULES_FINISHED,
  rules,
});

export const searchRules = (keyword: string) => {
  return function (dispatch: any) {
    const ruleRef = new RuleReference();

    return ruleRef.search(keyword).then((documents: any) => {
      dispatch(searchRulesSucceed(documents));
    });
  };
};

export const searchTagsSucceed = (tags: any[]) => ({
  type: SEARCH_TAGES_FINISHED,
  tags,
});

export const searchTags = (keyword: string) => {
  return function (dispatch: any) {
    const tagRef = new TagReference();

    return tagRef.listAll().then((tags: any) => {
      const matchedByKeyword = removeDuplicatedTags(tags).filter((item: Tag) =>
        item.name.toLowerCase().includes(keyword.toLowerCase()),
      );
      dispatch(searchTagsSucceed(matchedByKeyword));
    });
  };
};
