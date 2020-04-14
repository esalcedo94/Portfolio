import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route path="/" exact component={About} />
        <Route path="/projects" exact component={Projects} />
      </Router>
    );
  }
}

export default App;
