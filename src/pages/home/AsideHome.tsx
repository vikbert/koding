import React from 'react';
import IconConstruction from "../../components/base/icons/IconConstruction";

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
            The Overflow Blog
          </div>
          <li className="s-sidebarwidget--item grid px16">
            <div className="grid--cell1 fl-shrink0">
              <svg
                aria-hidden="true"
                className="va-text-top svg-icon iconPencilSm"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z" />
              </svg>
            </div>
            <div className="grid--cell wmn0 ow-break-word">
              <a
                href="https://stackoverflow.blog/2021/05/11/building-a-space-based-isp/?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","The Overflow Blog","https://stackoverflow.blog/2021/05/11/building-a-space-based-isp/",null,null]'
                data-gps-track="communitybulletin.click({ priority: 1, position: 0 })"
              >
                Network protocols in orbit: Building a space-based ISP
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--item grid px16">
            <div className="grid--cell1 fl-shrink0">
              <svg
                aria-hidden="true"
                className="va-text-top svg-icon iconPencilSm"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z" />
              </svg>
            </div>
            <div className="grid--cell wmn0 ow-break-word">
              <a
                href="https://stackoverflow.blog/2021/05/11/testing-software-so-its-reliable-enough-for-space/?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","The Overflow Blog","https://stackoverflow.blog/2021/05/11/testing-software-so-its-reliable-enough-for-space/",null,null]'
                data-gps-track="communitybulletin.click({ priority: 1, position: 1 })"
              >
                Testing software so it’s reliable enough for space
              </a>
            </div>
          </li>
          <li className='s-sidebarwidget--item grid px16'>
            <div className="grid--cell12 text-centered">
              <IconConstruction size={4}/>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
