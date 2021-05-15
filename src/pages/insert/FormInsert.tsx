import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useNotify from '../../hooks/useToast';
import {loadRules, addRule} from '../../components/Rule/ruleAction';
import {nanoid} from 'nanoid';
import type {Snippet} from '../../types/Snippet';
import {addSnippet} from '../../components/code/snippetAction';
import type {Rule} from '../../types/Rule';
import './formInsert.css';
import useVisibility from '../../hooks/useVisibility';
import classNames from 'classnames';
import FormPreview from './FormPreview';
import useKeypress from '../../hooks/useKeyPress';
import Bubble from '../../components/bubble/Bubble';

export default function FormInsert(): JSX.Element {
  const initState = {
    id: nanoid(),
    bad: '',
    good: '',
    rule: '',
    ruleDescription: '',
  };
  useDocumentTitle('new snippet and convention');

  const dispatch = useDispatch();
  const {visible, show, hide} = useVisibility();
  const notify = useNotify();
  const [editorState, setEditorState] = React.useState(initState);
  const history = useHistory();

  useKeypress('Escape', () => {
    hide();
  });

  React.useEffect(() => {
    dispatch(loadRules());
  }, []);

  function resetEditor() {
    setEditorState(initState);
  }

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

    const goodSnippet = {
      id: nanoid(),
      body: editorState.good,
      isBad: false,
      lang: 'php',
    };

    const badSnippet: Snippet = {
      id: initState.id,
      body: editorState.bad,
      isBad: true,
      lang: 'php',
      suggestion: goodSnippet.id,
    };

    const rule: Rule = {
      id: nanoid(),
      title: editorState.rule,
      description: editorState.ruleDescription,
      snippets: [initState.id],
      votes: 0,
      views: 0,
      isPublic: true,
      editors: [],
      createdAt: +(new Date()),
    };

    dispatch(addSnippet(goodSnippet));
    dispatch(addSnippet(badSnippet));
    dispatch(addRule(rule));
    console.table({
      bad: badSnippet.id,
      good: goodSnippet.id,
      'rule suggestion': rule.snippets,
    });
    resetEditor();
    notify({type: 'success', message: 'Both Code snippets are added!'});

    history.push(`/convention/${rule.id}`);
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
    console.log(codeWithoutTab);
  }

  function handleChangeGoodSnippet(event: any) {
    const codeWithoutTab = event.target.value.replace(/\t/g, '');
    setEditorState({
      ...editorState,
      good: codeWithoutTab,
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
          <div className="title">
            <h3>Coding convention preview</h3>
          </div>
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
              {/*tags input*/}
            </div>
            <div
              id="question-answer-section"
              className="dno js-show-on-question-and-answer"
            >
              <div id="inline-answer">
                <div id="post-editor-42" className="post-editor js-post-editor">
                  <div className="ps-relative">
                    <div className="wmd-container mb8">
                      <div
                        id="wmd-button-bar-42"
                        className="wmd-button-bar btr-sm"
                      />
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
          {editorState.rule.length > 0 && editorState.bad.length > 0 && (
            <button
              className="grid--cell s-btn s-btn__outlined s-btn__icon"
              type="button"
              onClick={handleOpenPreview}
            >
              <svg
                aria-hidden="true"
                className="svg-icon iconEye"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9.06 3C4 3 1 9 1 9s3 6 8.06 6C14 15 17 9 17 9s-3-6-7.94-6zM9 13a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 002-2 2 2 0 00-2-2 2 2 0 00-2 2 2 2 0 002 2z"></path>
              </svg>
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
