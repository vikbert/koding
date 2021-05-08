import React from 'react';

interface IProps {
  type: string,
  initValue: string,
  placeHolderText: string,
  handleOnChange: (userInput: string) => void,
}

const ExtendedInput = (props: IProps) => {
  const [inputValue, setInputValue] = React.useState(props.initValue);
  const handleOnChange = (event: any) => {
    let userInput = event.target.value;
    setInputValue(userInput)
    props.handleOnChange(userInput);
  }

  return (
      <div className={'extended-input space-between'}>
        {props.type === 'search' && (<span className="iconify" data-icon="fe:search" data-inline="false"/>)}
        {props.type === 'add' && (<span className="iconify" data-icon="carbon:add-alt" data-inline="false"/>)}
        <input type="text" placeholder={props.placeHolderText} value={inputValue} onChange={handleOnChange}/>
      </div>
  );
};

export default ExtendedInput;
