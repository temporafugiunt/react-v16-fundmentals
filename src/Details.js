import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";
import Carosel from "./Carosel";
import Modal from "./Modal";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

class Details extends React.Component {
  state = {
    loading: true,
    showModal: false,
  };
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id,
      })
      .then((data) => {
        const pet = data.petfinder.pet;
        let breed;

        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false,
          // Spread operation usage instead of explicit usage.
          // {...pet}
        });
      })
      .catch(navigate("/"));
  }
  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }

    const { name, animal, breed, location, description, media, showModal } = this.state;

    return (
      <div className="details">
        <Carosel media={media} />
        <div onClick={console.log}>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}{" "}
          </h2>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1> Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.toggleModal}>Yes</button>
                <button onClick={this.toggleModal}>Nope</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;