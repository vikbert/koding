import React from 'react';

type PropsT = {
  name?: string;
};

export default function FormInsert(props: PropsT): JSX.Element {
  return (
    <div className="grid--cell fl1 wmn0">
      <form
        id="post-form"
        className="post-form js-post-form"
        data-form-type="question"
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
                    data-min-length={15}
                    data-max-length={150}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div
              id="post-editor"
              className="post-editor js-post-editor mt0 mb16"
            >
              <div className="ps-relative">
                <label className="s-label mb4 d-block" htmlFor="bad-snippet">
                  Bad Code snippet
                  <p className="s-description mt2">
                    Add a bad code snippet to this convention
                  </p>
                </label>
                <textarea name={'bad-snippet'} />
              </div>
              <div className="ps-relative">
                <label className="s-label mb4 d-block" htmlFor="good-snippet">
                  Good Code snippet
                  <p className="s-description mt2">
                    Add a Good code snippet to this convention
                  </p>
                </label>
                <textarea name={'good-snippet'} />
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
                      Convention Tags
                      <div className="s-description mt2">
                        Add up to 5 tags to describe what your coding convention
                        is about
                      </div>
                    </label>
                  </div>
                  <div className="ps-relative">
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
                      <input
                        type="text"
                        autoComplete="off"
                        tabIndex={103}
                        placeholder="e.g. (php, javascript, css)"
                        id="tageditor-replacing-tagnames--input"
                        className="s-input js-tageditor-replacing"
                        style={{width: '19px'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-tag-suggestions hmn0" />
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
        <div className="js-visible-before-review">
          <div className="grid gsx gs4 mt32">
            <button className="grid--cell s-btn s-btn__filled" type="button">
              Submit your coding convention and snippets
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
