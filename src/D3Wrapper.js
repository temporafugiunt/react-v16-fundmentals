/* global d3 */
import React, { Component } from "react";

// This is a theoretical class wrapping libraries that utilize DOM elements directly.
export class D3Wrapper extends Component {
  componentDidMount() {
    d3.init(this.div);
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnmount() {
    d3.destroy(this.div);
  }
  render() {
    return <div ref={(el) => (this.div = el)} />;
  }
}

export default D3Wrapper;
