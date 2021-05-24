import React from 'react';
import {useDispatch} from 'react-redux';
import './formInsert.css';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import {loadRules, addRule} from '../ruleWidget';
import type {Snippet} from '../../../types/Snippet';
import type {Rule} from '../../../types/Rule';
import {addSnippet} from '../../snippet/snippetAction';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import useNotify from '../../../hooks/useToast';
import useVisibility from '../../../hooks/useVisibility';
import useKeypress from '../../../hooks/useKeyPress';
import FormPreview from './FormPreview';
import Bubble from '../../bubble/Bubble';
import IconEye from '../../icons/IconEye';
import {createAndUpdateTag} from '../../tag/tagWidget';
import TagItem from '../../tag/TagItem';

const initState = {
  rule: '',
  description: '',
  bad: '',
  good: '',
};
export default function FormInsert(): JSX.Element {
  useDocumentTitle('New convention with snippets');

  const dispatch = useDispatch();
  const notify = useNotify();
  const {visible, show, hide} = useVisibility();
  const [formData, setFormData] = React.useState(initState);
  const [tagItems, setTagItems] = React.useState<string[]>([]);
  const [tagInput, setTagInput] = React.useState('');

  useKeypress('Escape', () => {
    hide();
  });

  const isLastCharComma = (value: string) => {
    return value.slice(-1) === ',';
  };

  const addToTagItems = (value: string) => {
    const newTag = value.trim().replace(/,/g, '');
    if (!tagItems.includes(newTag)) {
      setTagItems([...tagItems, newTag]);
    }
  };

  function handleChangeTags(event: any) {
    const value = event.target.value;
    setTagInput(value);

    if (isLastCharComma(value)) {
      addToTagItems(value);
      setTagInput('');
    }
  }

  function handleRemoveTag(tag: string) {
    setTagItems(tagItems.filter((item: string) => item !== tag));
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    if (
      formData.rule.length === 0 ||
      formData.bad.length === 0 ||
      formData.good.length === 0 ||
      tagItems.length === 0
    ) {
      notify({
        type: 'error',
        message: 'title, tags and code snippets should not be empty!',
      });
      return;
    }

    const goodSnippet: Snippet = {
      id: nanoid(),
      body: formData.good,
      isBad: false,
      lang: 'php',
      path: '',
      suggestion: '',
      rules: [],
    };
    dispatch(addSnippet(goodSnippet));

    const badSnippet: Snippet = {
      id: nanoid(),
      body: formData.bad,
      isBad: true,
      lang: 'php',
      suggestion: goodSnippet.id,
      path: '',
      rules: [],
    };
    dispatch(addSnippet(badSnippet));

    const rule: Rule = {
      id: nanoid(),
      title: formData.rule,
      description: formData.description,
      snippets: [badSnippet.id],
      tags: tagItems,
      votes: 0,
      views: 0,
      isPublic: true,
      editors: [],
      createdAt: +new Date(),
    };
    dispatch(addRule(rule));

    tagItems.map((tagString: string) => {
      dispatch(
        createAndUpdateTag({
          name: tagString,
          rule: rule.id,
        }),
      );
    });

    notify({message: 'Saving this coding convention done!', type: 'success'});
    setTimeout(() => {
      window.location.reload();
    }, 800);
  }

  function handleChangeFormData(event: any, name: string) {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  }

  React.useEffect(() => {
    dispatch(loadRules());
  }, []);

  return (
    <div className="grid--cell fl1 wmn0">
      <div className={classNames('overlay', {open: visible})}>
        <div className="popup">
          <div className="title">Coding convention preview</div>
          <div className="content">
            <FormPreview
              rule={formData.rule}
              description={formData.description}
              badSnippet={formData.bad}
              goodSnippet={formData.good}
            />
          </div>
          <div className="action mb16 mr12">
            <button
              className="grid--cell s-btn s-btn__link"
              onClick={() => hide()}
            >
              Close the preview
            </button>

            <button
              className="grid--cell s-btn s-btn__filled"
              onClick={handleSubmit}
            >
              Yes, Submit
            </button>
          </div>
        </div>
      </div>
      <form
        id="post-form"
        className="post-form js-post-form"
        data-form-type="question"
        onSubmit={handleSubmit}
      >
        <div id="question-form">
          <div className="bg-white bar-sm bs-md p16 ba bc-black-100">
            <div id="post-title" className="ps-relative mb16">
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
                    name="rule"
                    type="text"
                    maxLength={300}
                    placeholder="e.g. Use always constant instead of magic number and string"
                    className="s-input js-post-title-field"
                    autoComplete="off"
                    value={formData.rule}
                    onChange={(event) => handleChangeFormData(event, 'rule')}
                  />
                </div>
              </div>
            </div>

            <div className="ps-relative mb16">
              <div className="grid fl1 fd-column js-stacks-validation">
                <label
                  className="d-block s-label mb4"
                  htmlFor="rule-description"
                >
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
                    value={formData.description}
                    onChange={(event: any) =>
                      handleChangeFormData(event, 'description')
                    }
                  />
                </div>
              </div>
            </div>

            {formData.rule.length > 0 && (
              <div className="ps-relative mb16">
                <div className="grid fl1 fd-column js-stacks-validation">
                  <div className="fl1 ps-relative">
                    <Bubble
                      title={formData.rule}
                      description={formData.description}
                    />
                  </div>
                </div>
              </div>
            )}

            <div
              id="post-editor"
              className="post-editor js-post-editor mt0 mb16"
            >
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
                  value={formData.bad}
                  onChange={(event: any) => handleChangeFormData(event, 'bad')}
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
                  value={formData.good}
                  onChange={(event: any) => handleChangeFormData(event, 'good')}
                />
              </div>
              <div className="edit-block">
                <input id="author" name="author" type="text" />
                <input
                  type="hidden"
                  name="i1l"
                  defaultValue="tKgzJZNt6tbfm4umbxTugXzCeW1yrrQvtLngOkno3nA="
                />
              </div>
            </div>
            <div className="ps-relative" id="tag-editor">
              <div className="ps-relative">
                <div className="form-item p0 js-stacks-validation js-tag-editor-container">
                  <div className="grid ai-center jc-space-between">
                    <label
                      htmlFor="tageditor-replacing-tagnames--input"
                      className="s-label mb4 d-block grid--cell fl1"
                    >
                      Tags
                      <div className="s-description mt2">
                        Max. 5 tagItems that are separated by a comma
                      </div>
                    </label>
                  </div>
                  <div className="ps-relative">
                    <div>
                      <input
                        className="s-input box-border js-post-tagItems-field"
                        name="tag-names"
                        type="text"
                        size={60}
                        tabIndex={103}
                        style={{display: 'none'}}
                      />
                      <div
                        className="js-tag-editor tag-editor multi-line s-input"
                        style={{
                          padding: '0px 9.1px',
                          boxSizing: 'border-box',
                          marginTop: '0px',
                          marginBottom: '0px',
                          width: '100%',
                        }}
                      >
                        <span>
                          {tagItems.map((tagName: string, index: number) => (
                            <TagItem
                              key={index}
                              name={tagName}
                              editable={true}
                              onClickCallback={() => handleRemoveTag(tagName)}
                            />
                          ))}
                        </span>
                        <input
                          type="text"
                          disabled={tagItems.length === 5}
                          onChange={handleChangeTags}
                          value={tagInput}
                          autoComplete="off"
                          className="s-input js-tageditor-replacing"
                          style={{
                            width: tagItems.length === 0 ? '100%' : '80px',
                            minWidth: 'inherit',
                          }}
                        />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="question-answer-section"
              className="dno js-show-on-question-and-answer"
            >
              <div id="inline-answer">
                <div id="post-editor-42" className="post-editor js-post-editor">
                  <div className="ps-relative">
                    <div className="wmd-container mb8">
                      <div className="wmd-button-bar btr-sm" />
                      <div className="js-stacks-validation">
                        <div className="ps-relative">
                          <textarea
                            id="wmd-input-42"
                            name="post-text-answer"
                            className="wmd-input s-input bar0 js-post-body-field"
                            data-post-type-id={2}
                            cols={92}
                            rows={15}
                            tabIndex={103}
                            defaultValue={''}
                          />
                        </div>
                        <div className="s-input-message mt4 d-none js-stacks-validation-message" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gsx gs4 mt32 float-right">
          <Link to={'/'} className="grid--cell s-btn s-btn__muted">
            Cancel
          </Link>
          {formData.rule.length > 0 && formData.bad.length > 0 && (
            <button
              className="grid--cell s-btn s-btn__outlined s-btn__icon"
              type="button"
              onClick={() => show()}
            >
              <IconEye />
              {' Preview'}
            </button>
          )}
          <button
            className="grid--cell s-btn s-btn__filled"
            type="submit"
            onClick={handleSubmit}
          >
            Submit the convention
          </button>
        </div>
      </form>
    </div>
  );
}
