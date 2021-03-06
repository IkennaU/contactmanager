import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import { v4 as uuidv4 } from "uuid";

class AddContact extends Component {
  static propTypes = {};

  state = { name: "", email: "", phone: "" };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({ name: "", email: "", phone: "" });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <TextInputGroup>
                    label="Name", name ="name", placeholder="Enter Name...",
                    value = {this.state.name}, onChange = {this.onChange}
                  </TextInputGroup>
                  <TextInputGroup>
                    label="Email", name ="email", type="email"
                    placeholder="Enter Name...", value = {this.state.email},
                    onChange = {this.onChange}
                  </TextInputGroup>
                  <TextInputGroup>
                    label="Name", name ="name", placeholder="Enter Name...",
                    value = {this.state.phone}, onChange = {this.onChange}
                  </TextInputGroup>
                  <input
                    type="submit"
                    value="Add Contact"
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

export default AddContact;
