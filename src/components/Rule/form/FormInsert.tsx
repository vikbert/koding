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

export default function FormInsert(): JSX.Element {
  const initState = {
    id: nanoid(),
    bad: '',
    good: '',
    rule: '',
    tags: [''],
    ruleDescription: '',
  };

  useDocumentTitle('New convention with snippets');

  const dispatch = useDispatch();
  const {visible, show, hide} = useVisibility();
  const notify = useNotify();
  const [editorState, setEditorState] = React.useState(initState);
  const [tags, setTags] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  useKeypress('Escape', () => {
    hide();
  });

  function handleChangeTags(event: any) {
    const value = event.target.value;
    setInputValue(value);
    const lastChar = value.slice(-1);
    if (lastChar === ',' && tags.length < 5) {
      setInputValue('');

      const tag = value.replace(/,/g, '');
      if (!tags.includes(tag)) {
        setTags([...tags, tag]);
      }
    }
  }

  function handleRemoveTag(tag: string) {
    setTags(tags.filter((item: string) => item !== tag));
  }

  React.useEffect(() => {
    dispatch(loadRules());
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();

    if (
      editorState.bad.length === 0 ||
      editorState.good.length === 0 ||
      editorState.rule.length === 0
    ) {
      notify({
        type: 'error',
        message: 'Both Code snippets should not be empty!',
      });
      return;
    }

    const goodSnippet: Snippet = {
      id: nanoid(),
      body: editorState.good,
      isBad: false,
      lang: 'php',
      path: '',
      suggestion: '',
      rules: [],
    };

    const badSnippet: Snippet = {
      id: initState.id,
      body: editorState.bad,
      isBad: true,
      lang: 'php',
      suggestion: goodSnippet.id,
      path: '',
      rules: [],
    };

    const rule: Rule = {
      id: nanoid(),
      title: editorState.rule,
      description: editorState.ruleDescription,
      snippets: [initState.id],
      tags: editorState.tags,
      votes: 0,
      views: 0,
      isPublic: true,
      editors: [],
      createdAt: +new Date(),
    };

    dispatch(addSnippet(goodSnippet));
    dispatch(addSnippet(badSnippet));
    editorState.tags.map((tagString: string) => {
      dispatch(
        createAndUpdateTag({
          name: tagString,
          rule: rule.id,
        }),
      );
    });

    dispatch(addRule(rule));
    notify({message: 'Saving this coding convention done!', type: 'success'});
    setTimeout(() => {
      window.location.reload();
    }, 800);
  }

  function handleChangeRule(event: any) {
    setEditorState({
      ...editorState,
      rule: event.target.value,
    });
  }

  function handleChangeRuleDescription(event: any) {
    setEditorState({
      ...editorState,
      ruleDescription: event.target.value,
    });
  }

  function handleChangeBadSnippet(event: any) {
    const codeWithoutTab = event.target.value.replace(/\t/g, '');
    setEditorState({
      ...editorState,
      bad: codeWithoutTab,
    });
  }

  function handleChangeGoodSnippet(event: any) {
    const codeWithoutTab = event.target.value.replace(/\t/g, '');
    setEditorState({
      ...editorState,
      good: codeWithoutTab,
    });
  }

  function handleUpdateTags(tags: any) {
    setEditorState({
      ...editorState,
      tags: tags,
    });
  }

  function handleOpenPreview() {
    show();
  }

  function handleClosePreview() {
    hide();
  }

  return (
    <div className="grid--cell fl1 wmn0">
      <div className={classNames('overlay', {open: visible})}>
        <div className="popup">
          <div className="title">Coding convention preview</div>
          <div className="content">
            <FormPreview
              rule={editorState.rule}
              ruleDescription={editorState.ruleDescription}
              badSnippet={editorState.bad}
              goodSnippet={editorState.good}
            />
          </div>
          <div className="action mb16 mr12">
            <button
              className="grid--cell s-btn s-btn__link"
              onClick={handleClosePreview}
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
                    id="title"
                    name="title"
                    type="text"
                    maxLength={300}
                    placeholder="e.g. Use always constant instead of magic number and string"
                    className="s-input js-post-title-field"
                    autoComplete="off"
                    value={editorState.rule}
                    onChange={handleChangeRule}
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
                    value={editorState.ruleDescription}
                    onChange={handleChangeRuleDescription}
                  />
                </div>
              </div>
            </div>

            {editorState.rule.length > 0 && (
              <div className="ps-relative mb16">
                <div className="grid fl1 fd-column js-stacks-validation">
                  <div className="fl1 ps-relative">
                    <Bubble
                      title={editorState.rule}
                      description={editorState.ruleDescription}
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
                  value={editorState.bad}
                  onChange={handleChangeBadSnippet}
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
                  value={editorState.good}
                  onChange={handleChangeGoodSnippet}
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
              {/*<TagsField updateTags={(tags) => handleUpdateTags(tags)} />*/}
              <div className="ps-relative">
                <div className="form-item p0 js-stacks-validation js-tag-editor-container">
                  <div className="grid ai-center jc-space-between">
                    <label
                      htmlFor="tageditor-replacing-tagnames--input"
                      className="s-label mb4 d-block grid--cell fl1"
                    >
                      Tags
                      <div className="s-description mt2">
                        Max. 5 tags that are separated by a comma
                      </div>
                    </label>
                  </div>
                  <div className="ps-relative">
                    <div>
                      <input
                        id="tagnames"
                        className="s-input box-border js-post-tags-field"
                        name="tagnames"
                        type="text"
                        size={60}
                        tabIndex={103}
                        placeholder="e.g. (regex android node.js)"
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
                          {tags.map((item: string, index: number) => (
                            <TagItem
                              key={index}
                              name={item}
                              editable={true}
                              onClickCallback={() => handleRemoveTag(item)}
                            />
                          ))}
                        </span>
                        <input
                          type="text"
                          disabled={tags.length === 5}
                          onChange={handleChangeTags}
                          value={inputValue}
                          autoComplete="off"
                          className="s-input js-tageditor-replacing"
                          style={{
                            width: tags.length === 0 ? '100%' : '80px',
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
                            data-min-length
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
          {editorState.rule.length > 0 && editorState.bad.length > 0 && (
            <button
              className="grid--cell s-btn s-btn__outlined s-btn__icon"
              type="button"
              onClick={handleOpenPreview}
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
