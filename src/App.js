import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Interface from "./components/layout/Interface";
import { BlockchainService } from "./utils/blockchain";

function App() {
  const blockchainService = new BlockchainService();
  console.log("App");
  return (
    <Router>
      <Interface blockchainService={blockchainService} />
    </Router>
  );
}

export default App;
