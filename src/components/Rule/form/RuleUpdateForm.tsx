import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useNotify from '../../../hooks/useToast';
import {updateRule} from '../ruleWidget';
import type {Rule} from '../../../types/Rule';
import './formInsert.css';
import {createAndUpdateTag} from '../../tag/tagWidget';
import TagInput from '../../tag/TagInput';
import {Snippet} from '../../../types/Snippet';
import {nanoid} from 'nanoid';
import {addSnippet} from '../../snippet/snippetAction';

type PropsType = {
  rule: Rule;
  closePopup: () => void;
};

export default function RuleUpdateForm(props: PropsType): JSX.Element {
  const {rule, closePopup} = props;
  const reduxRule = useSelector((state: any) => state.reduxRule);

  const dispatch = useDispatch();
  const notify = useNotify();
  const [targetRule, setTargetRule] = React.useState(rule);
  const [tagItems, setTagItems] = React.useState(rule.tags);
  const [bad, setBad] = React.useState('');
  const [good, setGood] = React.useState('');

  function handleUpdateTags(tags: string[]) {
    setTagItems(tags);
    setTargetRule({...targetRule, tags});
  }

  function handleSubmitDefault(event: any) {
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

  function handleSubmitWithNewSnippets(event: any) {
    event.preventDefault();

    if (bad.trim().length === 0 || good.trim().length === 0) {
      notify({
        type: 'error',
        message: 'New Snippets should not be empty!',
      });
      return;
    }

    const goodSnippet: Snippet = {
      id: nanoid(),
      body: good,
      isBad: false,
      lang: 'php',
      path: '',
      suggestion: '',
      rules: [],
    };
    dispatch(addSnippet(goodSnippet));

    const badSnippet: Snippet = {
      id: nanoid(),
      body: bad,
      isBad: true,
      lang: 'php',
      suggestion: goodSnippet.id,
      path: '',
      rules: [],
    };
    dispatch(addSnippet(badSnippet));

    const ruleWithNewSnippets = {
      ...targetRule,
      snippets: [...targetRule.snippets, badSnippet.id],
    };
    dispatch(updateRule(ruleWithNewSnippets));

    closePopup();
    notify({type: 'success', message: 'Adding new snippets done!'});
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

  function handleOnChangeBadSnippet(event: any) {
    setBad(event.target.value);
  }

  function handleOnChangeGoodSnippet(event: any) {
    setGood(event.target.value);
  }

  return (
    <div className="grid--cell fl1 wmn0">
      <form>
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
                disabled={reduxRule.withSnippets}
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

        {!reduxRule.withSnippets && (
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
        )}

        {!reduxRule.withSnippets && (
          <TagInput
            tags={targetRule.tags}
            updateTags={(tags) => handleUpdateTags(tags)}
          />
        )}

        {reduxRule.withSnippets && (
          <div id="post-editor" className="post-editor js-post-editor mt0 mb16">
            <div className="mt24">
              <label className="s-label mb4 d-block" htmlFor="bad-snippet">
                Bad Code snippet
                <p className="s-description mt2">
                  Add a bad code snippet to this convention
                </p>
              </label>
              <textarea
                className="snippet"
                name={'bad'}
                placeholder={'Bad snippet'}
                value={bad}
                onChange={handleOnChangeBadSnippet}
              />
            </div>
            <div className="mt24">
              <label className="s-label mb4 d-block" htmlFor="good-snippet">
                Good Code snippet
                <p className="s-description mt2">
                  Add a Good code snippet to this convention
                </p>
              </label>
              <textarea
                className="snippet"
                name={'good'}
                placeholder={'Good snippet'}
                value={good}
                onChange={handleOnChangeGoodSnippet}
              />
            </div>
          </div>
        )}

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
            onClick={
              reduxRule.withSnippets
                ? handleSubmitWithNewSnippets
                : handleSubmitDefault
            }
          >
            {reduxRule.withSnippets
              ? 'Insert new snippets to this convention'
              : 'Update the convention'}
          </button>
        </div>
      </form>
    </div>
  );
}
