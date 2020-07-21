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
        {
          id: 2,
          name: "Karen Williams",
          email: "karen@gmail.com",
          phone: "090-6665-4446",
        },
        {
          id: 3,
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
