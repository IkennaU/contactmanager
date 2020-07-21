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
                <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}{" "}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
