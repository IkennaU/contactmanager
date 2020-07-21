import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"></nav>
  );
}
Header.propTypes = { branding: PropTypes.string.isRequired };

export default Header;
