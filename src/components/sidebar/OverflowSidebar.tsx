import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';

type BasicItemProps = {
  title: string;
  path: string;
  iconName: string;
};
const basicItems: BasicItemProps[] = [
  {
    title: 'Top',
    path: '/conventions/top',
    iconName: 'fluent:align-top-24-filled',
  },
  {
    title: 'Tags',
    path: '/Tags',
    iconName: 'fluent:tag-24-filled',
  },
  {
    title: 'Teams',
    path: '/Teams',
    iconName: 'bx:bxs-user-circle',
  },
];
export default function OverflowSidebar(): JSX.Element {
  const LinkActive = (props: any) => {
    return (
      <Link to={props.path} className="pl8 nav-links--link">
        <div className="grid ai-center">
          <div className="grid--cell truncate">{props.title}</div>
        </div>
      </Link>
    );
  };

  const LinkBasicItem = ({title, path, iconName}: BasicItemProps) => {
    return (
      <Link
        to={path}
        title={title}
        className="pl8 js-gps-track nav-links--link -link__with-icon"
      >
        <span className="iconify" data-icon={iconName} data-inline="false" />
        <span className="-link--channel-name">{title}</span>
      </Link>
    );
  };

  return (
    <>
      <div className="left-sidebar js-pinned-left-sidebar ps-relative">
        <div className="left-sidebar--sticky-container js-sticky-leftnav">
          <nav role="navigation">
            <ol className="nav-links">
              <li className="youarehere">
                <LinkActive path={'/'} title={'Home'} />
              </li>
              <li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">
                Public
              </li>
              <li>
                <ol className="nav-links">
                  {basicItems.map((item, index) => (
                    <LinkBasicItem
                      title={item.title}
                      path={item.path}
                      iconName={item.iconName}
                    />
                  ))}
                </ol>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
