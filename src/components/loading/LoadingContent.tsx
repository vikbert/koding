import React from 'react';
import Loading from './Loading';

export default function LoadingContent(): JSX.Element {
  return (
      <div className="grid ai-center jc-center gs32 md:fd-column mt128">
        <Loading/>
      </div>
  );
}
