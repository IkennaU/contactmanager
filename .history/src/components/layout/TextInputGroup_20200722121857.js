import React from "react";
import PropTypes from "prop-types";

function TextInputGroup({ label, name, value, placeholder, type, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        className="form-control form-control-lg"
        placeholder="Enter Name..."
        value={this.state.name}
        onChange={this.onChange}
      />
    </div>
  );
}

TextInputGroup.propTypes = {};

export default TextInputGroup;
