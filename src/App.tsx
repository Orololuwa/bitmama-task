import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router";
import routes from "routes";
import { Suspense } from "react";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./config/firebase-config";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

function App() {
  const routesHere = useRoutes(routes);

  const handleClick = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return <Suspense fallback={<div>loading...</div>}>{routesHere}</Suspense>;
}

export default App;
