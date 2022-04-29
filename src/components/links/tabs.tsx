import { Link, LinkProps, useResolvedPath, useMatch } from "react-router-dom";
import cn from "classnames";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={cn({
        "flex items-center text-md text-gray-400 hover:text-yellow-300 hover:font-bold transition-all px-4 border-b-4 border-transparent":
          true,
        "text-yellow-300 font-bold border-b-4 border-yellow-300 w-max": match
      })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
