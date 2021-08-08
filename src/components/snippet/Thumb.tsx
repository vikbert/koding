import React from 'react';

type ThumbProps = {
  bad: boolean;
};

export default function Thumb(props: ThumbProps) {
  const config = props.bad
    ? {color: 'rgba(255,0,0,0.6)', icon: 'heroicons-outline:thumb-down'}
    : {color: 'rgba(0,128,0,0.6)', icon: 'heroicons-outline:thumb-up'};

  return (
    <div style={{color: config.color}}>
      <span className="iconify" data-icon={config.icon} data-inline="false" />
    </div>
  );
}
