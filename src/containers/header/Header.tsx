import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Navigation from "../../components/navigation/Navigation";
import { PageObject } from "../../interfaces";

interface HeaderProps {
  links: PageObject[];
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header-wrapper">
      <div>
        <Navigation links={props.links}>
          <Logo className="logo" />
        </Navigation>
      </div>
    </div>
  );
};

export default Header;
