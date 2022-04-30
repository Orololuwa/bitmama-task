import Header from "./header";
import Content from "./content";
import { Outlet } from "react-router";
import Aside from "./content/aside";
import Main from "./content/main";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Content>
        <Aside />
        <Main>
          <Outlet />
        </Main>
      </Content>
    </>
  );
};

export default Layout;
