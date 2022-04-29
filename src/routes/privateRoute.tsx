import * as React from "react";
import { Navigate, useLocation } from "react-router";
import { useAppSelector } from "store/hooks";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  let { pathname } = useLocation();

  if (!isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={pathname || "/"} replace />;
  }

  return children;
};

export default PrivateRoute;
