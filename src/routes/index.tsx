import { lazy } from "react";
import { RouteObject } from "react-router";
import PrivateRoute from "./privateRoute";

import Home from "pages/home";

const Login = lazy(() => import("pages/login"));

const routes: RouteObject[] = [
  {
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    path: "/"
  },
  {
    element: <Login />,
    path: "/login"
  }
];

export default routes;
