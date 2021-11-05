import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { NavigationLinkObject } from "../../interfaces";
import Link from "../link/Link";
import updatePathHook from "../../hooks/updatePathHook";

export interface NavigationProps {
  links: NavigationLinkObject[];
}

const Navigation = (props: NavigationProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    updatePathHook(() => setCurrentPath(window.location.pathname));
  }, []);
  return (
    <ul className="navigation-links">
      {props.links.map((link, i) => (
        <Link
          className={currentPath === link.path ? "active" : ""}
          key={`nav-link-${link.pageName}`}
          href={link.path}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default Navigation;
