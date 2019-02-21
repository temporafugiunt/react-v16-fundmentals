import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { navigate, RouteComponentProps } from "@reach/router";

export class SearchParams extends Component<RouteComponentProps> {
  public handleSearchSubmit() {
    navigate("/");
  }
  public render() {
    return (
      <div className="search-params">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
