import React from 'react';
import {Link} from 'react-router-dom';
import {Team} from '../../types/Team';

type PropsT = {
  teams: Team[];
};

export default function TeamList(props: PropsT): JSX.Element {
  const {teams} = props;
  return (
    <>
      <div className="grid gs32 grid__allcells4 ff-row-wrap jc-center ta-left wmx12 mx-auto">
        {teams.map((item: Team, index: number) => (
          <div
            className="grid--cell p32 bg-white d:bg-black-800 bar-lg p-bs-wrapper wmn3"
            key={index}
          >
            <h3 className="p-ff-roboto-slab-bold fs-title mb8 d:fc-white">
              {item.name}
            </h3>
            <p className="fs-body3 fc-black-400 d:fc-black-200 mb0 h128">
              {item.description}
            </p>
            <Link
              to={`/team/${item.documentId}`}
              className="s-btn s-btn__filled"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
