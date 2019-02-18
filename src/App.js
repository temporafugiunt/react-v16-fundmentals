import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    petfinder.pet.find({ output: "full", location: "Rockrord, IL" }).then((data) => {
      let pets;

      if (data.petfinder.pets && data.petfinder.pets.pet) {
        if (Array.isArray(data.petfinder.pets.pet)) {
          pets = data.petfinder.pets.pet;
        } else {
          pets = [data.petfinder.pets.pet];
        }
      } else {
        pets = [];
      }

      this.setState({ pets: pets });
    });
  }
  render() {
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
