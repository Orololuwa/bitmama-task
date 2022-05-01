import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import { Outlet } from "react-router";
import Aside from "./content/aside";
import { useEffect, useState } from "react";
import userservice, { RepoQParams } from "services/userservice";
import { useAppDispatch } from "store/hooks";
import { setRepo } from "store/repos/repoSlice";
import { setUser } from "store/user/userSlice";
import Loading from "components/loading";

const Layout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [repoQueryParams, setRepoQueryParams] = useState<RepoQParams>({
    per_page: 20,
    sort: "created"
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const [user, repos] = await Promise.all([
          userservice.getUser(),
          userservice.getRepos(repoQueryParams)
        ]);
        dispatch(setRepo(repos.data));
        dispatch(setUser(user.data));
        setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, [repoQueryParams, repoQueryParams.sort, dispatch]);

  return (
    <>
      {loading && <Loading />}
      <div>
        <Header />
        <div className="relative">
          <Aside />
          <Nav />
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </>
  );
};

export default Layout;
