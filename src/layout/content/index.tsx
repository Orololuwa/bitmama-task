import React from "react";

const Content = (props: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="flex px-4 md:ml-96 lg:ml-[420px]">{props.children}</main>
  );
};

export default Content;
