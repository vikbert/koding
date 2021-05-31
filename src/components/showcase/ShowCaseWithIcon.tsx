import React from 'react';
import './showcase.css';

type ItemConfig = {
  icon: string;
  title: string;
};
type PropsT = {
  items: ItemConfig[];
};

export default function ShowCaseWithIcon(props: PropsT): JSX.Element {
  const {items} = props;
  return (
    <>
      <div className="p-wrapper mx-auto bg-white fs-body2">
        <div className="grid grid__allcells4 lg:gs48 gs24 md:fd-column fs-subheading lh-md fc-black-600 py64">
          {items.map((item: ItemConfig) => (
            <div
              key={item.title}
              className="grid--cell grid d:bg-black-900 ba bc-black-050 bar-lg p16 ai-center"
            >
              <div className="grid--cell mr24 showcase-icon">
                <span className="iconify" data-icon={item.icon}></span>
              </div>
              <h3 className="fs-subheading grid--cell fc-black-600 d:fc-white p-ff-source-bold mb0 d-inline-block">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
