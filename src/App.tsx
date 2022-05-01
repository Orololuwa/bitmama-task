import "./App.css";
import { useRoutes } from "react-router";
import routes from "routes";
import { Suspense } from "react";
import Loading from "components/loading";

function App() {
  const routesHere = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{routesHere}</Suspense>;
}

export default App;
