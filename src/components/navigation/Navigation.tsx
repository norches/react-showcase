import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { PageObject } from "../../interfaces";
import Link from "../link/Link";
import updatePathHook from "../../hooks/updatePathHook";

interface NavigationProps {
  children: React.ReactNode;
  links: PageObject[];
}

const Navigation = (props: NavigationProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    updatePathHook(() => setCurrentPath(window.location.pathname));
  }, []);
  return (
    <ul className="navigation-links">
      {props.children}
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
