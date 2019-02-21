import React, { Component } from "react";
import { PetMedia, PetPhoto } from "petfinder-client";

interface Props {
  media: PetMedia;
}

interface State {
  active: number;
  photos: PetPhoto[];
}

export class Carosel extends Component<Props, State> {
  public state = {
    photos: [] as PetPhoto[],
    active: 0,
  };
  public static getDerivedStateFromProps({ media }: Props) {
    let photos: PetPhoto[] = [];

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
  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (event.target.dataset.index) {
      this.setState({
        // + coerces the string to number
        // NOTE: Has access to data attributes.
        active: +event.target.dataset.index,
      });
    }
  };
  public render() {
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
