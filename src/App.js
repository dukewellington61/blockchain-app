<<<<<<< HEAD
import React, { Fragment, useState, useMemo } from "react";
=======
import React, { Fragment, useState } from "react";
>>>>>>> 7be6aafe50b9e8a055b0d2a4bb5c498410a4935c
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BlockchainService } from "./utils/blockchain";
import Interface from "./components/layout/Interface";
import Settings from "./components/settings/Settings";
import CreateTransaction from "./components/transactions/CreateTransaction";
import Navbar from "./components/layout/Navbar";
import Wallet from "./components/wallets/Wallet";
import Alert from "./components/layout/Alert";
import PendingTransactions from "./components/transactions/PendingTransactions";

<<<<<<< HEAD
const App = () => {

  const blockchainService = useMemo(() => new BlockchainService(), []);  
=======
function App() {
  const blockchainService = new BlockchainService();
>>>>>>> 7be6aafe50b9e8a055b0d2a4bb5c498410a4935c

  const [renderAlert, setRenderAlert] = useState(false);

  const displayAlert = (val) => {
    setRenderAlert(val);
    setTimeout(() => setRenderAlert(false), 10000);
  };

  return (
    <Router>
      <Fragment>
        <Navbar blockchainService={blockchainService} />
        <div style={{ visibility: renderAlert ? "visible" : "hidden" }}>
          <Alert content={renderAlert} />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Interface blockchainService={blockchainService} />}
          />
          <Route
            exact
            path="/settings"
            render={() => (
              <Settings
                blockchainService={blockchainService}
                displayAlert={displayAlert}
              />
            )}
          />
          <Route
            exact
            path="/create-transaction"
            render={() => (
              <CreateTransaction
                blockchainService={blockchainService}
                displayAlert={displayAlert}
              />
            )}
          />
          <Route
            exact
            path="/pending-transactions"
            render={() => (
              <PendingTransactions
                blockchainService={blockchainService}
                displayAlert={displayAlert}
              />
            )}
          />
          <Route
            exact
            path="/wallet"
            render={() => <Wallet blockchainService={blockchainService} />}
          />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
