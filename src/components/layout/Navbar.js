import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ blockchainService }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div id="test_block_chain">
        <button className="btn btn-outline-light">
          <Link className="nav-link active" to="/" style={{ color: "white" }}>
            &nbsp;&nbsp;testBlockChain
          </Link>
        </button>
      </div>
      <div>
        {blockchainService.getPendingTransactions().length > 0 && (
<<<<<<< HEAD
          <Link className="nav-link active" to="/pending-transactions">
            <button className="btn btn-outline-light">
              Pending Transactions {blockchainService.getPendingTransactions().length}
=======
          <Link className="nav-link active" to="/settings">
            <button className="btn btn-outline-light">
              Pending Transactions
>>>>>>> 7be6aafe50b9e8a055b0d2a4bb5c498410a4935c
            </button>
          </Link>
        )}
        &nbsp;
        <button className="btn btn-outline-light">
          {" "}
          <Link className="nav-link active" to="/settings">
            Settings
          </Link>
        </button>
        &nbsp;
        <button className="btn btn-outline-light">
          <Link className="nav-link active" to="/create-transaction">
            Create transaction{" "}
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
