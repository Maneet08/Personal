import React, { Component } from "react";
import axios from "axios";

import {
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      projects: []
    };
  }
  componentDidMount() {
    axios.get("http://192.168.0.112:3000/api/Projects").then(res => {
      this.setState({ projects: res.data });
    });
  }

  toggleCategories() {
    let cat = "";

    switch (this.state.activeTab) {
      case 0:
        cat = "Wordpress";
        break;

      case 1:
        cat = "PHP";
        break;

      case 2:
        cat = "React JS";
        break;
    }

    return this.state.projects
      .filter(p => p.category == cat)
      .map(project => (
        <Card shadow={5} className="col-md-3 mt-2" style={{ margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000",
              height: "176px",
              background:
                "url(https://image.flaticon.com/icons/svg/174/174881.svg) center / cover"
            }}
          >
            {project.name}
          </CardTitle>
          <CardText>{project.description}</CardText>
          <CardActions border>
            <button colored>
              <a href={"https://" + project.link}>Live Demo</a>
            </button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      ));
  }

  render() {
    setInterval(this.componentDidMount(), 500);
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tab => this.setState({ activeTab: tab })}
          ripple
        >
          <Tab>Wordpress</Tab>
          <Tab>PHP</Tab>
          <Tab>React JS</Tab>
          <Tab>React Native</Tab>
          <Tab>Node JS</Tab>
        </Tabs>

        <select
          activeTab={this.state.activeTab}
          onChange={tab => this.setState({ activeTab: tab })}
          ripple
        >
          <option>Wordpress</option>
          <option>PHP</option>
          <option>React</option>
          <option>React Native</option>
          <option>Node JS</option>
        </select>

        <div className="flex-container">{this.toggleCategories()}</div>
      </div>
    );
  }
}

export default projects;
