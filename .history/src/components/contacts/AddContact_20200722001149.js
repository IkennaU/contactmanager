import React, { Component } from "react";
import PropTypes from "prop-types";

class AddContact extends Component {
  static propTypes = {};

  state = { name: "", email: "", phone: "" };

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
