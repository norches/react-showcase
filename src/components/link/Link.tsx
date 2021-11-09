import React from "react";
import "./Link.css";

interface LinkProps {
  className: string;
  href: string;
  children: React.ReactNode;
  onClick?: (event?: any) => void;
}

const Link = (props: LinkProps) => {
  // prevent full page reload
  const onClickHandler = (event: any) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", props.href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    if (props.onClick) props.onClick(event);
  };

  return (
    <a className={props.className} href={props.href} onClick={onClickHandler}>
      {props.children}
    </a>
  );
};

export default Link;
