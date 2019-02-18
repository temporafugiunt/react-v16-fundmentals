import React, { Component } from "react";
import SearchBox from "./SearchBox";

export class SearchParams extends Component {
  render() {
    return (
      <div className="search-params">
        <SearchBox />
      </div>
    );
  }
}

export default SearchParams;
