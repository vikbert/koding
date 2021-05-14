import React from 'react';

export default function (): JSX.Element {
  return (
    <>
      <div className="grid ai-center jc-center gs32 md:fd-column">
        <div className="grid--cell sm:d-none">
          <img
            className="wmx100"
            src="https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"
            alt="Page not found"
          />
        </div>
        <div className="grid--cell wmx5">
          <h1 className="fs-headline1 mb4">Ops</h1>
          <p>Page not found !</p>
        </div>
      </div>
    </>
  );
}
