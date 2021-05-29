import React from 'react'
import TagItem from './TagItem'

type PropsT = {
  tags: string[],
  updateTags: (tags: string[]) => void,
}

export default function TagInput({tags, updateTags}: PropsT): JSX.Element {
  const [tagItems, setTagItems] = React.useState(tags)
  const [tagInput, setTagInput] = React.useState('')

  const isLastCharComma = (value: string) => {
    return value.slice(-1) === ','
  }

  const addToTagItems = (value: string) => {
    const newTag = value.trim().replace(/,/g, '')
    if (!tagItems.includes(newTag)) {
      const updated = [...tagItems, newTag]
      setTagItems(updated)
    }
  }

  function handleChangeTags(event: any) {
    const value = event.target.value
    setTagInput(value)

    if (isLastCharComma(value)) {
      addToTagItems(value)
      setTagInput('')
    }
  }

  function handleRemoveTag(tag: string) {
    setTagItems(tagItems.filter((item: string) => item !== tag))
  }

  React.useEffect(() => {
    updateTags(tagItems)
  }, [tagItems])

  return (
    <>
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
    </>
  )
}
