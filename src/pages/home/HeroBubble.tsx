import React from 'react';
import {Link} from 'react-router-dom';
import IconSearch from '../../components/icons/IconSearch';
import IconTeam from '../../components/icons/IconTeam';

export default function HeroBubble(): JSX.Element {
  return (
    <>
      <div className="grid--cell p16 sm:p12">
        <div className="ps-relative p-speech-bubble--right h100 p24 bblr-lg btlr-lg btrr-lg bg-orange-100 fc-black-800">
          <IconSearch size={4} />
          <h2 className="fs-subheading wmx3 mx-auto">
            Find the best coding convention for your team, share others your
            best
          </h2>
          <Link
            to={'/convention/newest'}
            className="s-btn w100 wmx2 fs-body2 px32 bar-md bg-orange-500 h:bg-orange-600 fc-white d:fc-black-900 p-ff-source-bold mt-auto"
          >
            Let's go
          </Link>
          <p className="mb0 mt12 fc-black-600">
            or{' '}
            <Link
              to={'/convention/newest'}
              className="s-link s-link__underlined fc-black-700 h:fc-orange-600"
            >
              search conventions
            </Link>
          </p>
        </div>
      </div>
      <div className="grid--cell p16 sm:p12">
        <div className="ps-relative p-speech-bubble--left h100 p24 bbrr-lg btlr-lg btrr-lg bg-blue-100 fc-black-800">
          <IconTeam size={4} />
          <h2 className="fs-subheading wmx3 mx-auto">
            Want a team space for your coding knowledge?
          </h2>
          <Link
            to={'/teams/insert'}
            className="s-btn w100 wmx2 fs-body2 px32 bar-md bg-blue-500 h:bg-blue-600 fc-white d:fc-black-900 p-ff-source-bold mt-auto"
          >
            Create a free Team
          </Link>
          <p className="mb0 mt12 fc-black-600">
            or{' '}
            <Link
              to={'/teams'}
              className="s-link s-link__underlined fc-black-700 h:fc-blue-600"
            >
              discover Teams
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
