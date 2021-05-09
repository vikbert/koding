import React from 'react';

type ThumbProps = {
  bad: boolean,
}

export default function Thumb(props: ThumbProps) {
  const config = props.bad
      ? {color: 'red', icon: 'mdi:thumb-down'}
      : {color: 'green', icon: 'mdi:thumb-up'}

  return (
      <div style={{color: config.color}}>
        <span className="iconify" data-icon={config.icon} data-inline="false"/>
      </div>
  );
};

