import React, {useState} from 'react'
import useVisibility from "../../hooks/useVisibility";
import Toast from "../toast";

const InsertConvention = () => {
  const [convention, setConvention] = useState('')
  const {visible, show} = useVisibility();

  function handleConventionChanged(event: any) {
    setConvention(event.target.value.trim())
  }

  function handleSubmit (event: any) {
    event.preventDefault();
    // save convention
    setConvention('');
    show();
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          {visible && <Toast type={'success'} title={"It's done."} description={''}/>}
        <input
            type="text"
            value={convention}
            onChange={handleConventionChanged}
            placeholder={'enter a new code convention'}/>
        </form>
      </>
  );
};

export default InsertConvention
