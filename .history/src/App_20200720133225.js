import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager1" />
      <Contact />
    </div>
  );
}

export default App;
