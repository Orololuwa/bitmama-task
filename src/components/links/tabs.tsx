import { Link, LinkProps, useResolvedPath, useMatch } from "react-router-dom";
import cn from "classnames";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={cn({
        "flex items-center text-md text-gray-800  px-4 py-3 border-b-4 border-transparent":
          true,
        "font-semibold border-b-4 border-orange-300 w-max": match
      })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
