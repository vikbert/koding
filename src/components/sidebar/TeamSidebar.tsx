import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './sidebar.css';
import IconTeam from '../icons/IconTeam';
import Divider from '../elements/Divider';
import {useSelector} from 'react-redux';

type BasicItemProps = {
  title: string;
  path: string;
  iconName: string;
};

export default function TeamSidebar(): JSX.Element {
  const {documentId} = useParams<{documentId: string}>();
  const reduxTeam = useSelector((state: any) => state.reduxTeam);

  let basicItems: BasicItemProps[] = [
    {
      title: 'Conventions',
      path: `/team/${documentId}/conventions`,
      iconName: 'fluent:align-top-24-filled',
    },
    {
      title: 'Tags',
      path: `/team/${documentId}/tags`,
      iconName: 'fluent:tag-24-filled',
    },
    {
      title: 'Users',
      path: `/team/${documentId}/users`,
      iconName: 'bx:bxs-user-circle',
    },
  ];

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
              <Link to={'/teams'}>
                <li className="pl8">
                  <span
                    className="iconify"
                    data-icon="bx:bx-arrow-back"
                    data-inline="false"
                  />
                  <IconTeam size={3} />
                </li>
              </Link>
              <li className="p8">
                <h5 className="p-ff-roboto-slab-bold my6">
                  {reduxTeam.detail ? reduxTeam.detail.name : '...'}
                </h5>
                <Divider color={'orange'} position={'left'} />
              </li>
              <li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">
                Team Area
              </li>
              <li>
                <ol className="nav-links">
                  {basicItems.map((item, index) => (
                    <LinkBasicItem
                      key={index}
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
