import React from 'react';
import {useDispatch} from 'react-redux';
import useNotify from '../../../hooks/useToast';
import {updateRule} from '../ruleWidget';
import type {Rule} from '../../../types/Rule';
import './formInsert.css';
import {createAndUpdateTag} from '../../tag/tagWidget';
import TagInput from '../../tag/TagInput';

type PropsType = {
  rule: Rule;
  closePopup: () => void;
};

export default function RuleUpdateForm(props: PropsType): JSX.Element {
  const {rule, closePopup} = props;

  const dispatch = useDispatch();
  const notify = useNotify();
  const [targetRule, setTargetRule] = React.useState(rule);
  const [tagItems, setTagItems] = React.useState(rule.tags);

  function handleUpdateTags(tags: string[]) {
    setTagItems(tags);
    setTargetRule({...targetRule, tags});
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    if (targetRule.title.length === 0) {
      notify({
        type: 'error',
        message: 'Title of a coding convention can not be empty!',
      });
      return;
    }

    dispatch(updateRule(targetRule));

    tagItems
      .filter((item: string) => !rule.tags.includes(item))
      .forEach((tagString: string) => {
        dispatch(
          createAndUpdateTag({
            name: tagString,
            rule: targetRule.id,
          }),
        );
      });

    closePopup();
    notify({type: 'success', message: 'Updating content done!'});
  }

  function handleCancelUpdate(event: any) {
    event.preventDefault();
    closePopup();
  }

  function handleChangeRule(event: any) {
    setTargetRule({
      ...targetRule,
      title: event.target.value,
    });
  }

  function handleChangeRuleDescription(event: any) {
    setTargetRule({
      ...targetRule,
      description: event.target.value,
    });
  }

  return (
    <div className="grid--cell fl1 wmn0">
      <form onSubmit={handleSubmit}>
        <div className="ps-relative mb16">
          <div className="grid fl1 fd-column js-stacks-validation">
            <label className="d-block s-label mb4" htmlFor="rule">
              Coding Convention
              <div className="grid">
                <p className="s-description mt2 grid--cell9">
                  Use plain english and keep the definition simple and short
                </p>
              </div>
            </label>
            <div className="fl1 ps-relative">
              <input
                id="title"
                name="title"
                type="text"
                maxLength={300}
                placeholder="e.g. Use always constant instead of magic number and string"
                className="s-input js-post-title-field"
                autoComplete="off"
                value={targetRule.title}
                onChange={handleChangeRule}
              />
            </div>
          </div>
        </div>

        <div className="ps-relative mb16">
          <div className="grid fl1 fd-column js-stacks-validation">
            <label className="d-block s-label mb4" htmlFor="rule-description">
              <div className="grid">
                <p className="s-description mt2 grid--cell9">
                  (Optional) Description about the coding convention
                </p>
              </div>
            </label>
            <div className="fl1 ps-relative">
              <textarea
                name="description"
                placeholder="e.g. add more information about the coding convention"
                className="s-input js-post-title-field"
                autoComplete="off"
                rows={10}
                value={targetRule.description}
                onChange={handleChangeRuleDescription}
              />
            </div>
          </div>
        </div>

        <TagInput
          tags={targetRule.tags}
          updateTags={(tags) => handleUpdateTags(tags)}
        />

        <div className="grid gsx gs4 mt32 float-right">
          <button
            className="grid--cell s-btn s-btn__muted"
            type="submit"
            onClick={handleCancelUpdate}
          >
            Cancel
          </button>
          <button
            className="grid--cell s-btn s-btn__filled"
            type="submit"
            onClick={handleSubmit}
          >
            Update the convention
          </button>
        </div>
      </form>
    </div>
  );
}
