import React from "react";

const InfoBox = (props) => {
  return (
    <div className="container">
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
        style={{ textAlign: "justify" }}
      >
        <h4>Welcome!</h4>Create new transactions and mine new blocks. Change
        settings > difficulty and see the Proof of Work in action. Click on a
        block and see what transactions it has. This little app is here to help
        you understand some of the things blockchains do.
        <p>
          {" "}
          <a href="https://github.com/dukewellington61/blockchain-app">
            see the Source code
          </a>{" "}
        </p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
