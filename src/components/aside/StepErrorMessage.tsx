import React from 'react';

type PropsT = {
  title: string;
  message?: string;
};

export default function StepDoneMessage(props: PropsT): JSX.Element {
  const {title, message = ''} = props;

  return (
    <>
      <div className="js-post-review-summary">
        <div className="js-error-container grid">
          <div className="grid--cell mr16">
            <img
              width={20}
              height={20}
              src="https://cdn.sstatic.net/Img/ask/error.svg?v=b373711635d0"
              alt="Error"
            />
          </div>
          <div className="grid--cell mr4">
            <div
              className="d-flex ai-center fw-bold"
              style={{minHeight: '20px'}}
            >
              <div>{title}</div>
            </div>
            <p className="js-error-message mt6 mb0">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
