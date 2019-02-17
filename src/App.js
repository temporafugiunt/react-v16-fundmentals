import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt a Pet!"),
      React.createElement(Pet, {
        name: "Rudy",
        animal: "Dog",
        breed: "Dachshund",
      }),
      React.createElement(Pet, {
        name: "Katie",
        animal: "Dog",
        breed: "Dachshund",
      }),
      React.createElement(Pet, {
        name: "Corkie",
        animal: "Dog",
        breed: "Shnoodle",
      }),
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
