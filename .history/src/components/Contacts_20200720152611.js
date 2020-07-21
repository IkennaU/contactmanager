import React, { Component } from "react";
import PropTypes from "prop-types";

class Contacts extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "090-8765-4356",
        },
      ],
    };
  }

  render() {
    return <div></div>;
  }
}

export default Contacts;
