import Header from "./header";
import Content from "./content";
import { Outlet } from "react-router";
import Aside from "./content/aside";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Content>
        <Aside />
        <Outlet />
      </Content>
    </>
  );
};

export default Layout;
