import * as React from "react";
import { Navigate, useLocation } from "react-router";
import { useAppSelector } from "store/hooks";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  let { pathname } = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={pathname || "/"} replace />;
  }

  return children;
};

export default PrivateRoute;
