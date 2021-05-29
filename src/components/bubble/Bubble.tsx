import React from 'react';
import './bubble.css';
import IconCertificate from '../icons/IconCertificate';

type PropsT = {
  title: string;
  description?: string;
};

export default function Bubble(props: PropsT): JSX.Element {
  const {title, description = ''} = props;

  return (
    <div className="bubble bubble-bottom-left">
      <div>
        <IconCertificate size={2} />
      </div>
      <span className="bubble-title">{title}</span>
      <span></span>
      <span className="bubble-body">{description}</span>
    </div>
  );
}
