import React, { Fragment, useState, useMemo } from "react";
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

const App = () => {

  const blockchainService = useMemo(() => new BlockchainService(), []);  

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
            path="/wallet/:id"
            render={() => <Wallet blockchainService={blockchainService} />}
          />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
