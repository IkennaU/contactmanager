import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class EditContact extends Component {
  static propTypes = {};

  state = { name: "", email: "", phone: "", errors: {} };

  componentDidMount() {
    axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    );
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    // Check for Errors
    if (this.state.name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }
    if (this.state.email === "") {
      this.setState({ errors: { email: "Email is Required" } });
      return;
    }
    if (this.state.phone === "") {
      this.setState({ errors: { phone: "Phone is Required" } });
      return;
    }

    // clear state
    this.setState({ name: "", email: "", phone: "", errors: {} });
    // Redirect...
    this.props.history.push("/");
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    type="name"
                    placeholder="Enter Name..."
                    value={this.state.name}
                    onChange={this.onChange}
                    error={this.state.errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={this.state.email}
                    onChange={this.onChange}
                    error={this.state.errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    type="text"
                    placeholder="Enter Phone..."
                    value={this.state.phone}
                    onChange={this.onChange}
                    error={this.state.errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
