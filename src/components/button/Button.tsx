import React from "react";

const Button = (props: any) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
