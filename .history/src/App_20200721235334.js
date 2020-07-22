import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
