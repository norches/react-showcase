import React, { BaseSyntheticEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./Button.scss";

interface ButtonProps {
  className?: string;
  children?: React.ReactChildren | string;
  type?: "primary" | "secondary" | "link";
  icon?: IconDefinition;
  disabled?: boolean;
  onClick?: (e?: BaseSyntheticEvent) => void;
}

const Button = (props: ButtonProps) => {
  const { children, type = "primary", className, icon = null, ...rest } = props;
  return (
    <div>
      <button className={`button button-${type} ${className}`} {...rest}>
        {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        {children}
      </button>
    </div>
  );
};

export default Button;
