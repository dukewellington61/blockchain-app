import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ blockchainService }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="navbar-example"
    >
      <div className="navbar-brand" href="#">
        <Link
          id="nav_brand"
          className="nav-link active"
          to="/"
          style={{ color: "#6495ED", fontWeight: "bold" }}
        >
          testBlockChain
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <button
            className="btn btn-outline-light nav_btn"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link
              className="nav-link active"
              to="/settings"
              style={{ color: "#DEB887" }}
            >
              Settings
            </Link>
          </button>

          <button
            className="btn btn-outline-light nav_btn"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link
              className="nav-link active"
              to="/create-transaction"
              style={{ color: "#DEB887" }}
            >
              Create transaction{" "}
            </Link>
          </button>

          {blockchainService.getPendingTransactions().length > 0 && (
            <button
              className="btn btn-outline-light nav_btn"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link active" to="/pending-transactions">
                Pending Transactions{" "}
                {blockchainService.getPendingTransactions().length}
              </Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
