import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router";

export class SearchParams extends Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-params">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
