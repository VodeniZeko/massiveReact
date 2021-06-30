import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Loader from "./components/util/Loader";

const HomePage = lazy(() => import("./App"));

function App() {
  return (
    <div className="App">
      <Suspense maxDuration={300} fallback={<Loader />}>
        <HomePage />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
