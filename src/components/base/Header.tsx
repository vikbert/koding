import React from 'react';
import Logo from "../../assets/img/logo.png";

interface IProps {
  title: string,
  children: any,
}

const Header = (props: IProps) => {
  return (
      <section className="header space-between px-1">
        <a href="/">
          <img className="logo" src={Logo} alt=""/>
        </a>
        <span className={'title'}>{props.title}</span>
        {props.children}
      </section>
  );
};

export default Header;
