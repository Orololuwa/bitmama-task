import Option from "./option";
import { AiOutlineClose } from "react-icons/ai";
import { RepoQParams } from "services/userservice";
import { useOutletContext } from "react-router-dom";
import Backdrop from "components/backdrop";

const options = ["created", "updated", "pushed", "fullname"];

const SortDropdown = ({ onClose }: { onClose?: () => void }): JSX.Element => {
  const { onChange } = useOutletContext<{
    onChange: React.Dispatch<React.SetStateAction<RepoQParams>>;
  }>();
  return (
    <>
      <Backdrop bg="plain" />
      <div className="absolute top-[calc(100%+4px)] -right-3 w-56 bg-white border-[1px] border-gray-300 rounded-md z-[60]">
        <div className="text-left px-3 w-full border-b-[1px] border-gray-300 py-2 font-semibold flex items-center justify-between">
          <span>select order</span>
          <AiOutlineClose />
        </div>
        {options.map((val, idx) => (
          <Option
            key={idx}
            value={val}
            onClick={() => {
              onChange((prevState) => ({ ...prevState, sort: val }));
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SortDropdown;
