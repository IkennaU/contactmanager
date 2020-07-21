import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  };
  state = {
    showContactInfo: true,
  };
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    return (
      <div className="card card-body mb-3">
        <h4>
          {this.props.name}{" "}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {this.props.email}</li>
            <li className="list-group-item">Phone: {this.props.phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
