import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';

type PropsT = {
  name?: string;
};

export default function OverflowSidebar(props: PropsT): JSX.Element {
  const {name} = props;

  type LinkProps = {
    path: string;
    title: string;
    children?: any;
  };
  const LinkItem = (props: LinkProps) => {
    return (
      <li>
        <Link to={props.path} className="nav-links--link">
          <div className="grid ai-center">
            <div className="grid--cell truncate">{props.title}</div>
          </div>
        </Link>
      </li>
    );
  };

  const LinkActive = (props: LinkProps) => {
    return (
      <li className="youarehere">
        <Link to={props.path} className="pl8 nav-links--link">
          <div className="grid ai-center">
            <div className="grid--cell truncate">{props.title}</div>
          </div>
        </Link>
      </li>
    );
  };

  const LinkWithIcon = (props: LinkProps) => {
    return (
      <li>
        <Link
          to={props.path}
          className="pl8 js-gps-track nav-links--link -link__with-icon"
          id="nav-questions"
        >
          {props.children}
          <span className="-link--channel-name">{props.title}</span>
        </Link>
      </li>
    );
  };

  return (
    <>
      <div
        className="left-sidebar js-pinned-left-sidebar ps-relative"
        id="left-sidebar"
      >
        <div className="left-sidebar--sticky-container js-sticky-leftnav">
          <nav role="navigation">
            <ol className="nav-links">
              <LinkActive path={'/'} title={'Home'} />
              <li>
                <ol className="nav-links">
                  <li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">
                    Public
                  </li>
                  <LinkWithIcon path={'/'} title={'Top 20'}>
                    <span
                      className="iconify"
                      data-icon="fluent:align-top-24-filled"
                      data-inline="false"
                    />
                  </LinkWithIcon>
                  <LinkWithIcon path={'/snippets'} title={'Snippets'}>
                    <span
                      className="iconify"
                      data-icon="ant-design:code-sandbox-outlined"
                      data-inline="false"
                    />
                  </LinkWithIcon>
                  <LinkWithIcon path={'/tags'} title={'Tags'}>
                    <span
                      className="iconify"
                      data-icon="fluent:tag-24-filled"
                      data-inline="false"
                    />
                  </LinkWithIcon>
                  <LinkWithIcon path={'/users'} title={'Users'}>
                    <span
                      className="iconify"
                      data-icon="bx:bxs-user-circle"
                      data-inline="false"
                    />
                  </LinkWithIcon>
                </ol>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
