import { Link, LinkProps, useResolvedPath, useMatch } from "react-router-dom";
import cn from "classnames";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={cn({
        "flex items-center text-md text-gray-800  px-2 py-2 border-b-4 border-transparent":
          true,
        "font-semibold border-b-4 border-orange-300 w-max": match
      })}
      {...props}
    >
      <div className="px-2 py-1 rounded-md hover:bg-gray-200 transition-colors">
        {children}
      </div>
    </Link>
  );
};

export default CustomLink;
