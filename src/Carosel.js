import React, { Component } from "react";

export class Carosel extends Component {
  state = {
    photos: [],
    active: 0,
  };
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter((photo) => photo["@size"] === "pn");
    }

    return { photos };
  }
  // Arrow function binds to proper this.
  // Therefore don't need:
  // constructor(props) {
  //       super(props);
  //       this.handleIndexClick = thils.handleIndexClick.bind(this); <-- es5 syntax
  //   }
  handleIndexClick = (event) => {
    this.setState({
      // + coerces the string to number
      // NOTE: Has access to data attributes.
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carosuel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carosusel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              // NOTE: Using data attributes for eventing.
              data-index={index}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carosel;
