import "./actions.css";
import { FaCaretDown } from "react-icons/fa";
import { Icon } from "@iconify/react";
import Repo from "components/repo";
import { useAppSelector } from "store/hooks";

const Home = (): JSX.Element => {
  const repos = useAppSelector((state) => state.repos.data);
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
      {!!repos.length ? (
        <div>
          {repos.map((repl) => (
            <Repo
              key={repl.id}
              name={repl.name}
              description={repl.description}
              language={repl.language}
              visibility={repl.visibility}
              updated_at={repl.updated_at}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
