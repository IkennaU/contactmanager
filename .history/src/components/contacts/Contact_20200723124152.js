import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  state = {
    showContactInfo: true,
  };
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {this.props.contact.name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(
                    this,
                    this.props.contact.id,
                    value.dispatch
                  )}
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt"></i>
                </Link>
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    Email: {this.props.contact.email}
                  </li>
                  <li className="list-group-item">
                    Phone: {this.props.contact.phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
