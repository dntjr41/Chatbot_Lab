import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class Slide extends Component {
  render() {
    return (
      <Carousel className ="SlideContainer">
        <div>
          <img src="../../../src/images/slide/slide.png" url="/tos" />
          <p className="legend">slide 1</p>
        </div>
        <div>
          <img src="../../../src/images/slide/slide2.png" />
          <p className="legend">slide 2</p>
        </div>
        <div>
          <img src="../../../src/images/slide/slide3.png" />
          <p className="legend">slide 3</p>
        </div>
        <div>
          <img src="../../../src/images/slide/slide4.png" />
          <p className="legend">slide 3</p>
        </div>

      </Carousel>
    );
  }
}

export default Slide;