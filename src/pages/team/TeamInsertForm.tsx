import React from 'react';
import InputTextField from '../../components/elements/InputTextField';
import InputTextarea from '../../components/elements/InputTextarea';
import Button from '../../components/elements/Button';
import FormAction from '../../components/elements/FormAction';
import Headline from '../../components/headline/Headline';
import TeamReference from '../../http/teamReference';
import useNotify from '../../hooks/useToast';
import {useDispatch} from 'react-redux';
import {teamAdded} from '../../components/team/teamWidget';
import {useHistory} from 'react-router-dom';
import Cancel from '../../components/elements/Cancel';

const initData = {
  name: '',
  description: '',
};

export default function TeamInsertForm(): JSX.Element {
  const [formData, setFormData] = React.useState(initData);
  const notify = useNotify();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeName = (name: string): void => {
    setFormData({
      ...formData,
      name: name.trim(),
    });
  };

  const handleChangeDescription = (description: string): void => {
    setFormData({
      ...formData,
      description: description.trim(),
    });
  };

  const validateFormData = (): boolean => {
    const nameLength = formData.name.trim().length;

    if (nameLength < 3 || nameLength > 30) {
      notify({
        type: 'error',
        message:
          'Team name should longer than 3 letters and shorter than 30 letters.',
      });

      return false;
    }

    return true;
  };

  const handleResetForm = () => {
    setFormData(initData);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!validateFormData()) {
      return;
    }

    const teamRef = new TeamReference();
    teamRef.add(formData).then((result) => {
      dispatch(teamAdded(formData));

      notify({
        type: 'success',
        message: 'Your team is added!',
      });

      setTimeout(() => {
        window.location.replace('/teams');
      });
    });
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
          <Cancel fallbackPath={'/teams/insert'} />
          <Button name={'Ok, Submit'} onClickHandler={handleSubmit} />
        </FormAction>
      </form>
    </>
  );
}
