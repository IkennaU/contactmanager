import React, { Component } from "react";
import PropTypes from "prop-types";

class test extends Component {
  static propTypes = {};

  state = {
    test: "test",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default test;
