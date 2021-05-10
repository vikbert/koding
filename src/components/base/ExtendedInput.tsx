import React from 'react';
import IconAdd from "./icons/IconAdd";

type ExtendedInputProps = {
  type: string,
  initValue: string,
  placeHolderText: string,
  handleOnChange: (userInput: string) => void,
};

export default function ExtendedInput(props: ExtendedInputProps): JSX.Element {
  const {type, initValue, placeHolderText} = props;

  const [inputValue, setInputValue] = React.useState(initValue);
  const handleOnChange = (event: any) => {
    let userInput = event.target.value;
    setInputValue(userInput)
    props.handleOnChange(userInput);
  }

  return (
      <div className={'extended-input space-between'}>
        {type === 'search' && (<span className="iconify" data-icon="fe:search" data-inline="false"/>)}
        {type === 'add' && (<IconAdd/>)}
        <input type="text" placeholder={placeHolderText} value={inputValue} onChange={handleOnChange}/>
      </div>
  );
};

