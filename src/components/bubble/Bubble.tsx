import React from 'react';
import './bubble.css';
import IconCertificate from '../icons/IconCertificate';

type PropsT = {
  message: string;
};

export default function Bubble(props: PropsT): JSX.Element {
  const {message} = props;

  return (
    <div className="bubble bubble-bottom-left">
      <div>
        <IconCertificate size={2} />
      </div>
      <span>{message}</span>
    </div>
  );
}
