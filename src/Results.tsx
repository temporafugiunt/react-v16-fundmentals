import React from "react";
import pf, { Pet as PetType } from "petfinder-client";
import Pet from "./Pet";
import SearchBox from "./SearchBox";
import { Consumer as SearchConsumer } from "./SearchContext";
import { RouteComponentProps } from "@reach/router";

if (!process.env.API_KEY || !process.env.API_SECRET) {
  throw new Error("No API Keys defined");
}

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

interface Props {
  searchParams: {
    location: string;
    animal: string;
    breed: string;
  };
}

interface State {
  pets: PetType[];
}

class Results extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      pets: [],
    };
  }
  public componentDidMount() {
    this.search();
  }
  public search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed,
      })
      .then((data) => {
        let pets: PetType[];

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
  public render() {
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
export default function ResultsWithContext(props: RouteComponentProps) {
  return <SearchConsumer>{(searchContext) => <Results {...props} searchParams={searchContext} />}</SearchConsumer>;
}
