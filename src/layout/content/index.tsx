import React from "react";

const Content = (props: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="px-4 md:ml-96 lg:ml-[420px] xl:ml-[650px] md:pr-10 lg:pr-20 xl:pr-80">
      {props.children}
    </main>
  );
};

export default Content;
