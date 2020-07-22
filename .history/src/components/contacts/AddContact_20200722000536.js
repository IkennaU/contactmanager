import React, { Component } from "react";
import PropTypes from "prop-types";

class AddContact extends Component {
  static propTypes = {};

  state = { name: "", email: "", phone: "" };

  render() {
    return (
      <div>
        <h1>Add Contact</h1>
      </div>
    );
  }
}

export default AddContact;
