import Header from "./header";
import Content from "./content";
import { Outlet } from "react-router";
import Aside from "./content/aside";

const Layout = (): JSX.Element => {
  return (
    <div className="relative">
      <Aside />
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default Layout;
