import { useOutletContext } from "react-router-dom";
import { BiCheck } from "react-icons/bi";

const Option = ({
  value,
  onClick
}: {
  value: string;
  onClick: any;
}): JSX.Element => {
  const { currentOption } = useOutletContext<{ currentOption: string }>();

  return (
    <div
      className="w-full text-black text-xs px-2 py-2 cursor-pointer capitalize z-50 whitespace-nowrap text-left overflow-hidden border-b-[.5px] border-gray-300 hover:bg-gray-300 transition-colors last:border-none flex items-center gap-1"
      onClick={onClick}
    >
      <p className="w-6">
        {currentOption === value ? <BiCheck size={20} /> : null}
      </p>
      <span>{value}</span>
    </div>
  );
};

export default Option;
