import { lazy } from "react";
import { RouteObject } from "react-router";
import PrivateRoute from "./privateRoute";
import Layout from "layout";

import Home from "pages/home";

const Login = lazy(() => import("pages/login"));

const routes: RouteObject[] = [
  {
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    path: "/",
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        element: <Home />,
        path: "*"
      }
    ]
  },
  {
    element: <Login />,
    path: "/login"
  }
];

export default routes;
