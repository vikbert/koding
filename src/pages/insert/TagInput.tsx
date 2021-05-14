import React from 'react';

type PropsT = {
  name?: string
};

export default function TagInput(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
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
    </>
  );
};

