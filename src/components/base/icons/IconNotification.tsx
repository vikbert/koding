import React from 'react';

type PropsType = {
  size?: string,
  opacity?: string,
}

export default function IconNotification(props: PropsType): JSX.Element {
  const inlineStyle = {
    fontSize: props.size || '28px',
    opacity: props.opacity || '75%'
  };

  return (
      <>
        <span className="iconify" data-icon="ant-design:notification-outlined" data-inline="false" style={inlineStyle}/>
      </>
  );
};

