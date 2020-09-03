import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Settings from "../settings/Settings";

const Navbar = ({ blockchainService, clickHandlerTwo }) => {
  const [renderSettings, setRenderSettings] = useState(false);

  const yesRenderSettings = () => {
    setRenderSettings(true);
    clickHandlerTwo(false);
  };

  const notRenderSettings = () => {
    setRenderSettings(false);
    clickHandlerTwo(true);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <Link
          className="nav-link active"
          onClick={notRenderSettings}
          style={{ color: "white" }}
        >
          &nbsp;&nbsp;testBlockChain
        </Link>
        <div>
          <button className="btn btn-outline-light">
            Pending transactions
            <span className="badge badge-light">
              {"blockchain.pendingTransactions.length"}
            </span>
          </button>
          &nbsp;
          <button onClick={yesRenderSettings} className="btn btn-outline-light">
            Settings
          </button>
          &nbsp;
          <button
            routerLink="/new/transaction"
            className="btn btn-outline-light"
          >
            Create transaction
          </button>
        </div>
      </nav>
      <div style={{ display: renderSettings ? "block" : "none" }}>
        <Settings blockchainService={blockchainService} />
      </div>
    </Fragment>
  );
};

export default Navbar;
