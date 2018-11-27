import React, { Component } from "react";
import axios from "axios";

class ProjectsInput extends Component {
  state = { name: "", description: "", link: "", category: "" };

  handleChange = event => {
    this.setState({
      name: this.refs.projectName.value,
      description: this.refs.description.value,
      link: this.refs.link.value,
      category: this.refs.category.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let p = {
      name: this.state.name,
      description: this.state.description,
      link: this.state.link,
      category: this.state.category
    };

    axios.post("http://localhost:3000/api/Projects", p).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="text-center">Add New Project</h3>
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          className="m-5"
        >
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Project Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" ref="projectName" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Project Description{" "}
            </label>
            <div className="col-sm-10">
              <textarea className="form-control" ref="description" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Project Link </label>
            <div className="col-sm-10">
              <input className="form-control" type="text" ref="link" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Project Category </label>
            <div className="col-sm-10">
              <input className="form-control" type="text" ref="category" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"> </label>
            <div className="col-sm-10">
              <input className="form-control" type="submit" />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ProjectsInput;
