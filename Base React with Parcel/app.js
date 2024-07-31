import React from "react";
import ReactDOM from "react-dom/client";

const block = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child-1" },
    React.createElement("h1", {}, "H1 from child1")
  ),
  React.createElement(
    "div",
    { id: "child-2" },
    React.createElement("h1", {}, "H1 from child2")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(block);
