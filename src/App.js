import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import ParallaxComponent from "./Components/ParallaxComponent";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

import './App.css';

class App extends React.Component {


  render() {
  return (
    <Router>
      <Header />
      <ParallaxComponent />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/" component={About} />
      <Footer />
    </Router>
  );
  }
}

export default App;
