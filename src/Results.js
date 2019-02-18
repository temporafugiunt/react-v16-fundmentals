import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import SearchBox from "./SearchBox";
import { Consumer as SearchConsumer } from "./SearchContext";

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
    this.search();
  }
  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed,
      })
      .then((data) => {
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
  };
  render() {
    return (
      <div>
        <SearchBox search={this.search} />
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
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

// Not using arrow funciton here so that function will show up in call stack for debugging purposes.
// When you need access to a context in lifecycle methods beyond render() then your component needs to be
// wrapped in this fashion so that you have access to context ino those other methods. If you only need access
// to context inside the redner method then how it was done in SearchBox is enough.
export default function ResultsWithContext(props) {
  return <SearchConsumer>{(searchContext) => <Results {...props} searchParams={searchContext} />}</SearchConsumer>;
}
