import React from 'react'

type PropsT = {
  title: string,
  message?: string,
}

export default function StepDoneMessage(props: PropsT): JSX.Element {
  const {title, message = ''} = props

  return (
    <>
      <div className="js-post-review-summary">
        <div className="js-success-no-warnings grid">
          <div className="grid--cell mr16">
            <img
              width={20}
              height={20}
              src="https://cdn.sstatic.net/Img/ask/success.svg?v=b9c8125e2f1c"
              alt="Success"
            />
          </div>
          <div className="grid--cell mr4">
            <div
              className="d-flex ai-center fw-bold"
              style={{minHeight: '20px'}}
            >
              <div>{title}</div>
            </div>
            <p className="mt6 mb0">{message}</p>
          </div>
        </div>
      </div>
    </>
  )
}
