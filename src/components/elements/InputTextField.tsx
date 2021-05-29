import React from 'react';

type PropsT = {
  name: string;
  value: string;
  label: string;
  description?: string;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: string;
  onChangeSync: (value: string) => void;
};

export default function InputTextField(props: PropsT): JSX.Element {
  const {
    name,
    label,
    description,
    maxLength = 300,
    placeholder = `enter the ${name}`,
    autoComplete = 'off',
    onChangeSync,
  } = props;

  const [value, setValue] = React.useState('');

  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    onChangeSync(value);
  }, [value]);

  return (
    <>
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
            <input
              name={name}
              value={value}
              type="text"
              maxLength={maxLength}
              placeholder={placeholder}
              className="s-input js-post-title-field"
              autoComplete={autoComplete}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
