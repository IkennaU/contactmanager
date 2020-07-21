import React from "react";
import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact name="John Doe" email="jdoe@gmail.com" phone="090-8765-4356" />
        <Contact
          name="Karen Smith"
          email="karen@gmail.com"
          phone="090-7777-4222"
        />
      </div>
    </div>
  );
}

export default App;
