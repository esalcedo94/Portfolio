import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation.js";
import About from "./components/About.js";
import ContactMe from "./components/ContactMe.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route path="/" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contactme" exact component={ContactMe} />
        <Footer/>
      </Router>
    );
  }
}

export default App;
