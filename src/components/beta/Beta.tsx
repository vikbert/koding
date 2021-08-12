import React from 'react';

const listSegmentData = {
  'Basic list view': [
    '✅ list of top coding rules',
    '✅ list of tags',
    '✅ list of teams',
    '✅ filter the rules by tag',
    '✅ sort the rules by votes',
  ],
  'Basic Detail View': [
    '✅ Detail of the coding rule',
    '✅ switch between good and bad snippet',
  ],
  'Basic Modification': [
    '✅ insert a new rule',
    '✅ insert a new code snippet',
    '✅ edit the existing coding rule',
    '✅ edit the code snippet',
  ],
  'Registration & Login': ['⬜️ register', '⬜️ login', '⬜️ Single Sign On'],
  'Permission Management': [
    '⬜️ Permission to manage the rules',
    '⬜️ Permission to manage the team',
  ],
};
const listSegmentDataItems = Object.values(listSegmentData);
const listSegmentDataKeys = Object.keys(listSegmentData);

type PropT = {
  title: string;
  items: string[];
};

function Beta() {
  const ListSegment = (props: PropT) => (
    <div>
      <h4 className="bold">{props.title}</h4>
      <ul>
        {props.items.map((item: string, index: any) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <h1 className="p-ff-roboto-slab-bold fs-title mb8 d:fc-white">
        Beta Version
      </h1>

      {listSegmentDataKeys.map((title, index) => (
        <ListSegment
          key={index}
          title={title}
          items={listSegmentDataItems[index]}
        />
      ))}
    </>
  );
}

export default Beta;
