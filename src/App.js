import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    // return React.createElement("div", {}, [
    //   React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt a Pet!"),
    //   React.createElement(Pet, {
    //     name: "Rudy",
    //     animal: "Dog",
    //     breed: "Dachshund",
    //   }),
    //   React.createElement(Pet, {
    //     name: "Katie",
    //     animal: "Dog",
    //     breed: "Dachshund",
    //   }),
    //   React.createElement(Pet, {
    //     name: "Corkie",
    //     animal: "Dog",
    //     breed: "Shnoodle",
    //   }),
    // ]);
    return (
      <React.Fragment>
        <h1>Adopt Me!</h1>
        <Pet name="Rudy" animal="Dog" breed="Dachshund" />
        <Pet name="Katie" animal="Dog" breed="Dachshund" />
        <Pet name="Corkie" animal="Dog" breed="Shnoodle" />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
