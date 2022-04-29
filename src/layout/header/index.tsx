import CustomLink from "components/links/tabs";
import { Icon } from "@iconify/react";
import "./header.css";

const Header = (): JSX.Element => {
  return (
    <header className="flex mt-4 pl-96 relative">
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
    </header>
  );
};

export default Header;
