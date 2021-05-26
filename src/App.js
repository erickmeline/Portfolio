import React from "react";
import Header from "./Components/Header";
import ParallaxComponent from "./Components/ParallaxComponent";
import About from "./Components/About";
import Footer from "./Components/Footer";

import './App.css';

class App extends React.Component {


  render() {
  return (
    <div>
      <Header />
      <ParallaxComponent />
      <About />
      <Footer />
    </div>
  );
  }
}

export default App;
