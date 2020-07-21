import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  static propTypes = {};

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    return;
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
                deleteClickHandler={this.deleteContact.bind(this, contact.id)}
              />
            ))}{" "}
          </div>
        );
      }}
    </Consumer>;
  }
}

export default Contacts;
