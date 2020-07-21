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
      <div className="card card-body mb-3">
        <h4>{this.props.name}</h4>
        <ul className="list-group">
          <li className="liist-group-item">Email: {this.props.email}</li>
          <li className="liist-group-item">Phone: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
