import React from 'react'

type PropsT = {
  headline: string,
  imagePath: string,
}

export default function HeadlineWithBg({
  imagePath,
  headline,
}: PropsT): JSX.Element {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + imagePath})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
        className="grid ai-center py24 bg-no-repeat bg-right-bottom wide:bg-image-ask-v2 wide:h-ask-v2-background"
      >
        <div className="fs-headline1">{headline}</div>
      </div>
    </>
  )
}
