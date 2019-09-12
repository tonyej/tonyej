import React, { Component } from "react";
import ReactDOM from "react-dom";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";
import About from "./About";

const App = () => {
  return (
    <div>
      <Introduction />
      <Sidebar />
      <About />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
