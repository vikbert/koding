import React from 'react';
import TagItem from './TagItem';

type PropsT = {
  updateTags: (tags: any) => void;
};

export default function TagsField(props: PropsT): JSX.Element {
  const [tags, setTags] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  function handleOnChange(event: any) {
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
    props.updateTags(tags);
  }, [tags]);

  return (
    <>
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
                  onChange={handleOnChange}
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
    </>
  );
}
