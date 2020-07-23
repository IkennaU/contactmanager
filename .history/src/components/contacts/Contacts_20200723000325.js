import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "../contacts/Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  static propTypes = {};

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {value.contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}{" "}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
