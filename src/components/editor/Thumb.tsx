import React from 'react';

interface IProps {
  bad: boolean,
}

const Thumb = (props: IProps) => {

  const ThumbDown = () => (
      <div style={{color: 'red'}}>
        {/*<span className="iconify" data-icon="mdi:thumb-down-outline" data-inline="false"/>*/}
        <span className="iconify" data-icon="mdi:thumb-down" data-inline="false"/>
      </div>
  )

  const ThumbUp = () => (
      <div style={{color: 'green' }}>
        {/*<span className="iconify" data-icon="mdi:thumb-up-outline" data-inline="false"/>*/}
        <span className="iconify" data-icon="mdi:thumb-up" data-inline="false"/>
      </div>
  )

  return props.bad ? <ThumbDown/> : <ThumbUp/>;
};

export default Thumb;
