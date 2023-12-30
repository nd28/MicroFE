import React from "react";
import { createRoot } from "react-dom/client";
import Sidebar from "./Sidebar";

import StopwatchApp from "stopwatch/App";
console.log(StopwatchApp);

import "./index.scss";

const App = () => {
  const [state, setState] = React.useState({ stopwatchOpen: false });
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Sidebar
        toggleButtonClick={() =>
          setState((currentState) => ({
            ...currentState,
            stopwatchOpen: currentState.stopwatchOpen ? false : true,
          }))
        }
      >
        <React.Suspense fallback={<div>Loading...</div>}>
          {state.stopwatchOpen && <StopwatchApp />}
        </React.Suspense>
      </Sidebar>
      {/* <div>Name: my-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div> */}
    </div>
  );
};
const root = createRoot(document.getElementById("app"));
root.render(<App />);
