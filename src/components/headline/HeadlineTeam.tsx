import React from 'react';

type PropsT = {
  headline: string;
  imagePath: string;
};

export default function HeadlineTeam({
  imagePath,
  headline,
}: PropsT): JSX.Element {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/img/' + imagePath
          })`,
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgb(244 128 36)',
          backgroundPosition: 'bottom',
        }}
        className="grid ai-center pt12 bar-sm bg-no-repeat bg-right-bottom wide:bg-image-ask-v2 wide:h-ask-v2-background"
      >
        <div className="fs-headline1 pl24 fc-white p-ff-roboto-slab-bold">
          {headline}
        </div>
      </div>
    </>
  );
}
