import React, { BaseSyntheticEvent, useEffect } from "react";
import "./Input.scss";

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
  useEffect(() => {
    const setActive = (el: any, active: any) => {
      const formField = el.parentNode.parentNode;
      if (active) {
        formField.classList.add("form-field--is-active");
      } else {
        formField.classList.remove("form-field--is-active");
        el.value === ""
          ? formField.classList.remove("form-field--is-filled")
          : formField.classList.add("form-field--is-filled");
      }
    };

    [].forEach.call(
      document.querySelectorAll(".form-field__input, .form-field__textarea"),
      (el: any) => {
        if (el.value) {
          setActive(el, true);
        }
        el.onblur = () => {
          setActive(el, false);
        };
        el.onfocus = () => {
          setActive(el, true);
        };
      }
    );
  });
  return (
    <div className="form-field" {...rest}>
      <div className="form-field__control">
        <label htmlFor={name} className="form-field__label">
          {label}
        </label>
        <input
          placeholder=" "
          name={name}
          className="form-field__input"
          type={type}
          value={value}
          max={max}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
