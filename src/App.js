import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Interface from "./components/layout/Interface";

function App() {
  return (
    <Router>
      <Interface />
    </Router>
  );
}

export default App;
