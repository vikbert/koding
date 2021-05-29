import React from 'react'

type PropsT = {
  name: string,
  label: string,
  rows?: number,
  description?: string,
  placeholder?: string,
  autoComplete?: string,
  onChangeSync: (value: string) => void,
}

export default function InputTextarea(props: PropsT): JSX.Element {
  const {
    name,
    label,
    rows = 10,
    description,
    placeholder = `enter the ${name}`,
    autoComplete = 'off',
    onChangeSync,
  } = props
  const [value, setValue] = React.useState('')

  const handleOnChange = (event: any) => {
    setValue(event.target.value)
  }

  React.useEffect(() => {
    onChangeSync(value)
  }, [value])

  return (
    <div className="ps-relative mb16">
      <div className="grid fl1 fd-column js-stacks-validation">
        <label className="d-block s-label mb4" htmlFor={name}>
          {label}
          {description && (
            <div className="grid">
              <p className="s-description mt2 grid--cell9">{description}</p>
            </div>
          )}
        </label>
        <div className="fl1 ps-relative">
          <textarea
            name={name}
            placeholder={placeholder}
            className="s-input js-post-title-field"
            autoComplete={autoComplete}
            rows={rows}
            value={value}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  )
}
