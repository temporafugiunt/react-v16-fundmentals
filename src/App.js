import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import pf from "petfinder-client";
import Loadable from "react-loadable";

import { Provider } from "./SearchContext";

import Results from "./Results";
import SearchParams from "./SearchParams";
import NavBar from "./NavBar";
import GlobalStyles from "./GlobalStyles";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading</h1>;
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Rockford, IL",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds,
    };
  }
  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };
  handleAnimalChange = (event) => {
    this.setState(
      {
        animal: event.target.value,
        breed: "",
        // Callback for when state is properly updated.
      },
      this.getBreeds
    );
  };
  handleBreedChange = (event) => {
    this.setState({
      breed: event.target.value,
    });
  };
  // Always called in instance scope so doesn't need to be an arrow function or be bound.
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then((data) => {
        if (data.petfinder && data.petfinder.breeds && Array.isArray(data.petfinder.breeds.breed)) {
          this.setState({ breeds: data.petfinder.breeds.breed });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <NavBar />
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <LoadableDetails path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
