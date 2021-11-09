import React from "react";
import "./Page.css";

interface PageProps {
  children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return <div className="page-container">{props.children}</div>;
};

export default Page;
