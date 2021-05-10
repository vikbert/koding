import React from 'react';
import Logo from "../../assets/img/logo.png";

type HeaderProps = {
  title: string,
  children: any,
};

export default function Header(props: HeaderProps): JSX.Element {
  return (
      <section id={'header'} className="space-between px-1">
        <a href="/">
          <img className="logo" src={Logo} alt=""/>
        </a>
        <span className={'title'}>{props.title}</span>
        {props.children}
      </section>
  );
};

