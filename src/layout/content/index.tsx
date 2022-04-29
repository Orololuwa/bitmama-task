import React from "react";

const Content = (props: { children: React.ReactNode }): JSX.Element => {
  return <main>{props.children}</main>;
};

export default Content;
