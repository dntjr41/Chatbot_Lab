import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../../css/Slide.css'

import slide1 from "../../../src/images/slide/slide.png";
import slide2 from "../../../src/images/slide/slide2.png";
import slide3 from "../../../src/images/slide/slide3.png";
import slide4 from "../../../src/images/slide/slide4.png";

class Slide extends Component {
  render() {
    return (
      <Carousel className ="SlideContainer">
        <div>
          <img src={slide1} url="/tos" />
          <p className="legend">slide 1</p>
        </div>
        <div>
          <img src={slide2} />
          <p className="legend">slide 2</p>
        </div>
        <div>
          <img src={slide3} />
          <p className="legend">slide 3</p>
        </div>
        <div>
          <img src={slide4} />
          <p className="legend">slide 3</p>
        </div>

      </Carousel>
    );
  }
}

export default Slide;