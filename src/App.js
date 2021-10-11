import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./components/dashboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}
export default App;
