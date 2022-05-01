import { useEffect } from "react";
import cn from "classnames";

// const backdropRoot = document.getElementById("backdrop");

interface BackdropProps {
  children?: React.ReactNode;
  onClick?: () => void;
  bg?: "dark" | "plain";
}

const Backdrop = ({ onClick, children, bg = "dark" }: BackdropProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  return (
    <div
      onClick={onClick}
      className={cn({
        "fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50":
          true,
        "bg-black opacity-50": bg === "dark",
        "bg-transparent": bg === "plain"
      })}
    >
      {children}
    </div>
  );
};

export default Backdrop;
