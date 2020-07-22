import React from "react";
import PropTypes from "prop-types";

function TextInputGroup({ label, name, value, placeholder, type, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

TextInputGroup.propTypes = {};

export default TextInputGroup;
