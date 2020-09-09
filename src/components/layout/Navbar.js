import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Settings from "../settings/Settings";
import CreateTransaction from "../transactions/CreateTransaction";
import PendingTransactions from "../transactions/PendingTransactions";
import Alerts from "../layout/Alerts";

const Navbar = ({ blockchainService, clickHandlerTwo }) => {
  const [renderSettings, setRenderSettings] = useState(false);

  const yesRenderSettings = () => {
    setRenderSettings(true);
    notRenderMinePendingTransactions();
    notRenderCreateTransaction();
    clickHandlerTwo(false);
  };

  const notRenderSettings = () => {
    setRenderSettings(false);
    clickHandlerTwo(true);
  };

  const [renderCreateTransaction, setRenderCreateTransaction] = useState(false);

  const yesRenderCreateTransaction = () => {
    setRenderCreateTransaction(true);
    notRenderSettings();
    notRenderMinePendingTransactions();
    clickHandlerTwo(false);
  };

  const notRenderCreateTransaction = () => {
    setRenderCreateTransaction(false);
    clickHandlerTwo(true);
  };

  const [
    renderMinePendingTransactions,
    setRenderMinePendingTransactions,
  ] = useState(false);

  const yesRenderMinePendingTransactions = () => {
    setRenderMinePendingTransactions(true);
    notRenderSettings();
    notRenderCreateTransaction();
    clickHandlerTwo(false);
  };

  const notRenderMinePendingTransactions = () => {
    setRenderMinePendingTransactions(false);
    clickHandlerTwo(true);
  };

  const [renderAlert, setRenderAlert] = useState(false);

  const displayAlert = (val) => {
    setRenderAlert(val);
    setTimeout(() => setRenderAlert(false), 10000);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div id="test_block_chain">
          <Link
            className="nav-link active"
            onClick={() => {
              notRenderSettings();
              notRenderCreateTransaction();
              notRenderMinePendingTransactions();
            }}
            style={{ color: "white" }}
          >
            &nbsp;&nbsp;testBlockChain
          </Link>
        </div>
        <div>
          {blockchainService.getPendingTransactions().length > 0 && (
            <button
              onClick={yesRenderMinePendingTransactions}
              className="btn btn-outline-light"
            >
              Pending transactions
              <span className="badge badge-light">
                {blockchainService.getPendingTransactions().length}
              </span>
            </button>
          )}
          &nbsp;
          <button onClick={yesRenderSettings} className="btn btn-outline-light">
            Settings
          </button>
          &nbsp;
          <button
            onClick={yesRenderCreateTransaction}
            className="btn btn-outline-light"
          >
            Create transaction
          </button>
        </div>
      </nav>
      <div style={{ visibility: renderAlert ? "visible" : "hidden" }}>
        <Alerts content={renderAlert} />
      </div>
      <div style={{ display: renderSettings ? "block" : "none" }}>
        <Settings
          blockchainService={blockchainService}
          renderSettings={renderSettings}
          displayAlert={displayAlert}
        />
      </div>

      <div style={{ display: renderCreateTransaction ? "block" : "none" }}>
        <CreateTransaction
          blockchainService={blockchainService}
          displayAlert={displayAlert}
          yesRenderMinePendingTransactions={yesRenderMinePendingTransactions}
        />
      </div>

      <div
        style={{ display: renderMinePendingTransactions ? "block" : "none" }}
      >
        <PendingTransactions
          blockchainService={blockchainService}
          clickHandlerTwo={clickHandlerTwo}
          notRenderMinePendingTransactions={notRenderMinePendingTransactions}
          displayAlert={displayAlert}
        />
      </div>
    </Fragment>
  );
};

export default Navbar;
