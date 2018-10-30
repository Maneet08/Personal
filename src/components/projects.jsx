import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
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
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://image.flaticon.com/icons/svg/174/174881.svg) center / cover"
              }}
            >
              Wordpress Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Codepen</button>
              <button colored>Live Demo</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://image.flaticon.com/icons/svg/174/174881.svg) center / cover"
              }}
            >
              Wordpress Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Codepen</button>
              <button colored>Live Demo</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://image.flaticon.com/icons/svg/174/174881.svg) center / cover"
              }}
            >
              Wordpress Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Codepen</button>
              <button colored>Live Demo</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>PHP</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>React</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Wordpress</Tab>
          <Tab>PHP</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default projects;
