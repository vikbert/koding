import React, {useState, useEffect} from 'react'
import {Link} from 'wouter'
import classNames from 'classnames'
import '../assets/css/navigation.css'

const Navigation = () => {
  const [current, setCurrent] = useState('');

  const setActive = (linkName: string) => {
    setCurrent(linkName)
  }

  const LinkItem = (props: any) => {
    return (
        <Link href={props.linkName} onClick={() => setActive(props.linkName)}>
          <li className={classNames("icon", {'active': current === props.linkName})}>
            {props.children}
          </li>
        </Link>
    );
  }

  return (
      <ul id={'menu'}>
        <LinkItem linkName={'/'}>
          <span className="iconify" data-icon="fluent:home-12-regular" data-inline="false"/>
        </LinkItem>
        <LinkItem linkName={'/play'}>
          <span className="iconify" data-icon="ant-design:play-circle-outlined" data-inline="false"/>
        </LinkItem>
        <LinkItem linkName={'/insert'}>
          <span className="iconify" data-icon="carbon:add-alt" data-inline="false"/>
        </LinkItem>
        <LinkItem linkName={'/favorite'}>
          <span className="iconify" data-icon="bx:bxs-bookmark-star" data-inline="false"></span>
        </LinkItem>
        <LinkItem linkName={'/bad'}>
          <span className="iconify" data-icon="ic:outline-thumb-up-off-alt" data-inline="false"/>
        </LinkItem>
      </ul>
  );
};

export default Navigation;
