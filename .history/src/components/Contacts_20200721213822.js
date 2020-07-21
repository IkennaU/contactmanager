import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  static propTypes = {};

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div>
              {value.contacts.map((contact) => (
                <Contact key={contact.id} Contact={contact} />
              ))}{" "}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
