import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

class Results extends React.Component {
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

      // Since property name and variable have the same name we don't need to name property we are setting.
      this.setState({ pets });
    });
  }
  render() {
    return (
      <div>
        {/* <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre> */}
        {this.state.pets.map((pet) => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;