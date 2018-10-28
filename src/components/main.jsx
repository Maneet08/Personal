import React, { Component } from "react";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Contact from "./contact";
import projects from "./projects";
import Resume from "./resume";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
