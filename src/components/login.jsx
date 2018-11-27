import React, { Component } from "react";
import axios from "axios";
import ProjectsInput from "./form";
import ReactDOM from "react-dom";

class login extends Component {
  state = { username: "", password: "" };

  handleChange = event => {
    this.setState({
      username: this.refs.user.value,
      password: this.refs.pass.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(
        "http://localhost:3000/api/admins/count?where=%7B%22username%22%20%3A%20%22" +
          this.state.username +
          "%22%2C%20%22password%22%20%3A%20%22" +
          this.state.password +
          "%22%20%7D"
      )
      .then(function(res) {
        console.log(res.status);
        console.log(res.data);
        if (res.data.count != 0) {
          ReactDOM.render(<ProjectsInput />, document.getElementById("root"));
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      });
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="text-center">Please Login</h3>
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          className="m-5"
        >
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" ref="user" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" ref="pass" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input type="submit" />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default login;
