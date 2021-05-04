import React from 'react';
import {Snippet} from '../../types/Snippet'

interface IProps {
  snippet: Snippet,
}

/**
 *
 * init: show outlined
 * if one of them is click and activated, then show normal
 */

const Thumb = (props: IProps) => {

  return (
      <div className="flex flex-row">
        <div style={{color: 'red'}}>
          <span className="iconify" data-icon="mdi:thumb-down-outline" data-inline="false"/>
          <span className="iconify" data-icon="mdi:thumb-down" data-inline="false"/>
        </div>
        <div onClick={() => null} style={{color: 'green'}}>
          <span className="iconify" data-icon="mdi:thumb-up-outline" data-inline="false"/>
          <span className="iconify" data-icon="mdi:thumb-up" data-inline="false"/>
        </div>
      </div>
  );
};

export default Thumb;
