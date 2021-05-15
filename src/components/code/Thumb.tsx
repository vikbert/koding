import React from 'react';

type ThumbProps = {
  bad: boolean;
};

export default function Thumb(props: ThumbProps) {
  const config = props.bad
    ? {color: 'red', icon: 'heroicons-outline:thumb-down'}
    : {color: 'green', icon: 'heroicons-outline:thumb-up'};

  return (
    <div style={{color: config.color}}>
      <span className="iconify" data-icon={config.icon} data-inline="false" />
    </div>
  );
}
