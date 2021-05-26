import React, { Component } from 'react';
import Parallax from 'parallax-js';

class ParallaxComponent extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }
  componentWillUnmount() {
    this.parallax.disable();
  }
  render() {
    return (
      <ul id="parallax" ref={el => this.scene = el} className="header-content d-flex align-items-center">
        <li className="header-shape shape-one layer" data-depth="0.10">
          <img src="assets/images/shapes/shape-1.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-tow layer" data-depth="0.30">
          <img src="assets/images/shapes/shape-2.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-three layer" data-depth="0.40">
          <img src="assets/images/shapes/shape-3.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-fore layer" data-depth="0.60">
          <img src="assets/images/shapes/shape-2.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-five layer" data-depth="0.20">
          <img src="assets/images/shapes/shape-1.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-six layer" data-depth="0.15">
          <img src="assets/images/shapes/shape-4.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-seven layer" data-depth="0.50">
          <img src="assets/images/shapes/shape-5.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-eight layer" data-depth="0.40">
          <img src="assets/images/shapes/shape-3.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-nine layer" data-depth="0.20">
          <img src="assets/images/shapes/shape-6.png" alt="Shape"/>
        </li>
        <li className="header-shape shape-ten layer" data-depth="0.30">
          <img src="assets/images/shapes/shape-3.png" alt="Shape"/>
        </li>
      </ul>
    )
  }
}

export default ParallaxComponent;
