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
  onDeleteClick = (e) => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="card card-body mb-3">
        <h4>
          {this.props.name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          ></i>
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
