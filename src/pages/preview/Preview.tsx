import React from "react";
import "./Preview.css";
import { PreviewDataProps, ParentData } from "../../interfaces";

const Preview = (props: PreviewDataProps) => {
  return <div>preview {props?.data?.name}</div>;
};

export default Preview;
