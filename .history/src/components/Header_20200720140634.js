import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
}
Header.propTypes = { brandiing: PropTypes.string.isRequired };

export default Header;
