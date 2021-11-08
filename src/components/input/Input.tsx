import React, { BaseSyntheticEvent } from "react";

interface InputProps {
  className?: string;
  children?: React.ReactChildren;
  name: string;
  type: string;
  label?: string;
  onChange: (e: BaseSyntheticEvent) => void;
  value: string | number;
  max?: number;
  [propName: string]:
    | undefined
    | string
    | number
    | Function
    | React.ReactChildren;
}

const Input = (props: InputProps) => {
  const { max, name, children, type, label, onChange, value, ...rest } = props;
  return (
    <div {...rest}>
      <label htmlFor={name}>{label}</label>
      <input type={type} value={value} max={max} onChange={onChange} />
    </div>
  );
};

export default Input;
