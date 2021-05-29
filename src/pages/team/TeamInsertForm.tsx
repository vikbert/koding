import React from 'react';
import InputTextField from '../../components/elements/InputTextField';
import InputTextarea from '../../components/elements/InputTextarea';
import Button from '../../components/elements/Button';
import FormAction from '../../components/elements/FormAction';
import Headline from '../../components/headline/Headline';

export default function TeamInsertForm(): JSX.Element {
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
  });

  const handleChangeName = (name: string): void => {
    setFormData({
      ...formData,
      name,
    });
  };

  const handleChangeDescription = (description: string): void => {
    setFormData({
      ...formData,
      description,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Headline headline={'Add a new team'} />
      <form onSubmit={handleSubmit}>
        <InputTextField
          name={'name'}
          value={formData.name}
          label={'Team Name'}
          onChangeSync={handleChangeName}
        />
        <InputTextarea
          name={'description'}
          label={'Team Description'}
          onChangeSync={handleChangeDescription}
        />
        <FormAction>
          <Button name={'Ok, Submit'} onClickHandler={handleSubmit} />
        </FormAction>
      </form>
    </>
  );
}
