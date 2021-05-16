import React from 'react';
import IconConstruction from '../icons/IconConstruction';

type PropsT = {
  name?: string;
};

export default function AsideHome(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <div
        className="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16"
        data-tracker="cb=1"
      >
        <ul className="d-block p0 m0">
          <div className="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900 bb bbw1">
            Tips
          </div>
          <li className="s-sidebarwidget--item grid px16">
            <div className="grid--cell12 text-centered">
              <IconConstruction size={4} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
