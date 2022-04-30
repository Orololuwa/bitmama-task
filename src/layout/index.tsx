import Nav from "./nav";
import Content from "./content";
import { Outlet } from "react-router";
import Aside from "./content/aside";

const Layout = (): JSX.Element => {
  return (
    <div className="relative">
      <Aside />
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default Layout;
