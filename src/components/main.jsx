import React, { Component } from "react";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Contact from "./contact";
import projects from "./projects";
import Resume from "./resume";
import login from "./login";
import { Switch, Route } from "react-router-dom";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PropsRoute exact path="/" component={LandingPage} />
          <PropsRoute path="/aboutme" component={About} />
          <PropsRoute path="/contact" component={Contact} />
          <PropsRoute path="/projects" component={projects} />
          <PropsRoute path="/resume" component={Resume} />
          <PropsRoute path="/login" component={login} />
        </Switch>
      </div>
    );
  }
}

export default Main;
