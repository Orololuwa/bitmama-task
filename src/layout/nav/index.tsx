import CustomLink from "components/links/tabs";
import { Icon } from "@iconify/react";
import { useAppSelector } from "store/hooks";

const Nav = (): JSX.Element => {
  const data = useAppSelector((state) => state.user.data);

  return (
    <nav className="flex md:pl-96 lg:pl-[420px] xl:pl-[650px] relative overflow-y-scroll no-scrollbar border-b-2">
      <div className="flex mt-4 w-full">
        <CustomLink to="/overview">
          <span className="flex gap-2 items-center">
            <Icon icon="octicon:book-16" />
            <p>Overview</p>
          </span>
        </CustomLink>
        <CustomLink to="/">
          <span className="flex gap-2 items-center">
            <Icon icon="octicon:repo-16" />
            <p>Repositories</p>
            {data?.public_repos && (
              <span className="font-normal bg-gray-300 px-2 rounded-full">
                {data?.public_repos}
              </span>
            )}
          </span>
        </CustomLink>
        <CustomLink to="/projects">
          <span className="flex gap-2 items-center">
            <Icon icon="octicon:project-16" />
            <p>Projects</p>
          </span>
        </CustomLink>
        <CustomLink to="/packages">
          <span className="flex gap-2 items-center">
            <Icon icon="octicon:package-16" />
            <p>Packages</p>
          </span>
        </CustomLink>
        <CustomLink to="/stars">
          <span className="flex gap-2 items-center">
            <Icon icon="octicon:star-16" /> <p>Stars</p>
          </span>
        </CustomLink>
      </div>
    </nav>
  );
};

export default Nav;
