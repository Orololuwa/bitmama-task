import React from "react";

const Main = (props: { children: React.ReactNode }): JSX.Element => {
  return <section className="basis-3/4">{props.children}</section>;
};

export default Main;
