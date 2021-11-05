import React from "react";
import "./Form.css";
import { FormDataProps, ParentData } from "../../interfaces";

const Form = (props: FormDataProps) => {
  return <div>form {props?.data?.name}</div>;
};

export default Form;
