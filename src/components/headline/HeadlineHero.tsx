import React from 'react';

type PropsT = {
  image: string;
  headline: string;
  description: string;
  linkPath: string;
  linkText: string;
};

export default function HeadlineHero(props: PropsT): JSX.Element {
  const {
    image = 'bg_team.svg',
    headline = 'default title',
    description = 'default description',
    linkPath = '/',
    linkText = 'Back to home',
  } = props;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + image})`,
          backgroundSize: '80%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          minHeight: '285px',
        }}
        className="p-wrapper mx-auto bg-white fs-body2"
      >
        <div className="grid md:fd-column ai-end md:ai-start sm:ai-stretch fw-wrap">
          <div className="grid--cell6">
            <h1 className="fs-display1 lh-sm p-ff-roboto-slab wmx4 mb24">
              {headline}
            </h1>
            <p className="bg-white bar-lg fs-subheading fc-black-600 mb32 wmx4">
              {description}
            </p>
            <a href={linkPath} className="s-btn s-btn__filled p-ff-source-bold">
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
