import React from 'react';

const Navigation = () => {
  return (
      <ul id="menu">
        <a href="#home">
          <li className="icon" id="uno">
            <span className="iconify" data-icon="fluent:home-12-regular" data-inline="false"/>
          </li>
        </a>
        <a href="#play">
          <li className="icon" id="dos">
            <span className="iconify" data-icon="ant-design:play-circle-outlined" data-inline="false"/>
          </li>
        </a>
        <a href="#insert">
          <li className="icon" id="tres">
            <span className="iconify" data-icon="carbon:add-alt" data-inline="false"/>
          </li>
        </a>
        <a href="#good">
          <li className="icon" id="cuatro">
            <span className="iconify" data-icon="ic:outline-thumb-up-off-alt" data-inline="false"/>
          </li>
        </a>
        <a href="#bad">
          <li className="icon" id="cinco">
            <span className="iconify" data-icon="ic:outline-thumb-down-off-alt" data-inline="false"/>
          </li>
        </a>
      </ul>
  );
};

export default Navigation;
