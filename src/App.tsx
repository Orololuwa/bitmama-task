import "./App.css";
import { useRoutes } from "react-router";
import routes from "routes";
import { Suspense } from "react";

function App() {
  const routesHere = useRoutes(routes);

  return <Suspense fallback={<div>loading...</div>}>{routesHere}</Suspense>;
}

export default App;
