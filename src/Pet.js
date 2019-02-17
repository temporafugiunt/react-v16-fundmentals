import React from "react";

// Function components are good when a component doean't need state or
// other lifecycle functions built in react.
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

export default Pet;
