import { Icon } from "@iconify/react";
import { FaCaretDown } from "react-icons/fa";
import dateFormatter from "utils/dateFormatter";

interface RepoType {
  name: string | null;
  visibility: string | null;
  description: string | null;
  language: string | null;
  updated_at: string;
}

const Repo = (props: RepoType): JSX.Element => {
  return (
    <div className="border-t-[1px] border-gray-300 pt-6 pb-2">
      <div className="flex justify-between">
        <div>
          <span className="text-xl font-semibold text-blue-500 leading-none">
            {props.name && props.name}
          </span>
          <span className="text-xs font-semibold text-gray-500 border-[1px] border-gray-200 rounded-2xl py-1 px-2 ml-2 leading-none">
            {props.visibility && props.visibility}
          </span>
        </div>
        <div className="buttons">
          <div className="flex">
            <button>
              <Icon icon="octicon:star-16" />
              <span className="divider">star</span>
              <FaCaretDown className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm py-2 text-gray-600">
          {props.description && props.description}{" "}
        </p>
        <div className="w-36 h-[2px] mt-6 mr-2 bg-green-400" />
      </div>
      <div className="text-sm">
        <div className="flex items-center gap-3 py-3 text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-[50%] bg-orange-500" />
            <p>{props.language && props.language}</p>
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="octicon:star-16" />
            <p>1</p>
          </span>
          <span>{dateFormatter(new Date(props.updated_at))}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
