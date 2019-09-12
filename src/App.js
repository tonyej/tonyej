import React from "react";
import ReactDOM from "react-dom";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";
import About from "./About";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Introduction />
      <Sidebar />
      <About />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
