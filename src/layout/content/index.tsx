import React from "react";

const Content = (props: { children: React.ReactNode }): JSX.Element => {
  return <main className="flex px-20">{props.children}</main>;
};

export default Content;
