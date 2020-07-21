import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";

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
          name: "Henry Johnson",
          email: "henry@gmail.com",
          phone: "090-5555-4356",
        },
      ],
    };
  }
  deleteContact = () => {
    console.log(123);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
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
  }
}

export default Contacts;
