import React from 'react';

export default function NotificationIcon(): JSX.Element {
  const inlineStyle = {fontSize: '28px', opacity: '75%'};

  return (
      <>
        <span className="iconify" data-icon="ant-design:notification-outlined" data-inline="false" style={inlineStyle}/>
      </>
  );
};

