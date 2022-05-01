import "./actions.css";
import { FaCaretDown } from "react-icons/fa";
import { Icon } from "@iconify/react";
import Repo from "components/repo";

const Home = (): JSX.Element => {
  return (
    <div>
      <div className="action">
        <div className="search">
          <input type="text" placeholder="Find a repository..." />
        </div>
        <div className="buttons">
          <div className="flex">
            <button>
              <span>Type</span>
              <FaCaretDown />
            </button>
            <button>
              <span>Language</span>
              <FaCaretDown />
            </button>
            <button>
              <span>Sort</span>
              <FaCaretDown />
            </button>
            <button className="buttons-green">
              <Icon icon="octicon:repo-16" />
              <span>New</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Repo />
        <Repo />
      </div>
    </div>
  );
};

export default Home;
