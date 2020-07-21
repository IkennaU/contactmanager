import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>Email: {this.props.email}</li>
          <li>Phone: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    return <div></div>;
  }
}
Contact.propTypes = {};

export default Contact;
