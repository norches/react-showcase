import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Navigation from "../../components/navigation/Navigation";
import { NavigationLinkObject } from "../../interfaces";

export interface HeaderProps {
  links: NavigationLinkObject[];
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header-wrapper">
      <Logo className="logo" />
      <div>
        <Navigation links={props.links} />
      </div>
    </div>
  );
};

export default Header;
