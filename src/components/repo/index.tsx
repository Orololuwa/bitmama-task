import { Icon } from "@iconify/react";
import { FaCaretDown } from "react-icons/fa";

const Repo = (): JSX.Element => {
  return (
    <div className="border-t-[1px] border-gray-300 pt-6 pb-2">
      <div className="flex justify-between">
        <div>
          <span className="text-xl font-semibold text-blue-500 leading-none">
            api-design-with-django-rest
          </span>
          <span className="text-xs font-semibold text-gray-500 border-[1px] border-gray-200 rounded-2xl py-1 px-2 ml-2 leading-none">
            Public
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
          Api design with django rest framework
        </p>
        <div className="w-36 h-[2px] mt-6 mr-2 bg-green-400" />
      </div>
      <div className="text-sm">
        <div className="flex items-center gap-3 py-3 text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-[50%] bg-orange-500" />
            <p>python</p>
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="octicon:star-16" />
            <p>1</p>
          </span>
          <span>Updated 5 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
