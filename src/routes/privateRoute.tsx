import * as React from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "store/hooks";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
