import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer as SearchConsumer } from "./SearchContext";

export class SearchBox extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <SearchConsumer>
        {/* Function as a child pattern
        {function(context)} {
            return (
                <markup>...</markup>
            )
        } */}
        {(searchContext) => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location
                <input
                  onChange={searchContext.handleLocationChange}
                  id="location"
                  value={searchContext.location}
                  placeholder="location"
                />
              </label>
              <label htmlFor="animal">
                Animal
                <select
                  id="animal"
                  value={searchContext.animal}
                  onChange={searchContext.handleAnimalChange}
                  onBlur={searchContext.handleAnimalChange}
                >
                  <option value="">All Animal Types</option>
                  {ANIMALS.map((animal) => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="breed">
                Breed
                <select
                  id="breed"
                  value={searchContext.breed}
                  onChange={searchContext.handleBreedChange}
                  onBlur={searchContext.handleBreedChange}
                  disabled={!searchContext.breeds.length}
                >
                  <option value="">All Breeds</option>
                  {searchContext.breeds.map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Search</button>
            </form>
          </div>
        )}
      </SearchConsumer>
    );
  }
}

export default SearchBox;
