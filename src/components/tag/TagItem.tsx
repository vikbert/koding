import React from 'react';
import classNames from 'classnames';

type PropsT = {
  name: string;
  onClickCallback: () => void;
  editable: boolean;
};

export default function TagItem(props: PropsT): JSX.Element {
  const {name, onClickCallback, editable} = props;

  return (
    <>
      <span className="s-tag rendered-element" style={{marginRight: '2px'}}>
        {name}
        <span
          className={classNames({'js-delete-tag s-tag--dismiss': editable})}
          title="convention tag"
          onClick={onClickCallback}
        >
          {editable && (
            <svg
              className="svg-icon iconClearSm pe-none"
              width={14}
              height={14}
              viewBox="0 0 14 14"
            >
              <path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z" />
            </svg>
          )}
        </span>
      </span>
    </>
  );
}
