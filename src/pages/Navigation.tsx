import React from 'react';
import {Link} from 'wouter'

const Navigation = () => {
  return (
      <ul id="menu">
        <Link href="/">
          <li className="icon" id="uno">
            <span className="iconify" data-icon="fluent:home-12-regular" data-inline="false"/>
          </li>
        </Link>
        <Link href="/play">
          <li className="icon" id="dos">
            <span className="iconify" data-icon="ant-design:play-circle-outlined" data-inline="false"/>
          </li>
        </Link>
        <Link href="/insert">
          <li className="icon" id="tres">
            <span className="iconify" data-icon="carbon:add-alt" data-inline="false"/>
          </li>
        </Link>
        <Link href="/good">
          <li className="icon" id="cuatro">
            <span className="iconify" data-icon="ic:outline-thumb-up-off-alt" data-inline="false"/>
          </li>
        </Link>
      </ul>
  );
};

export default Navigation;
