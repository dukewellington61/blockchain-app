import React from "react";

const InfoBox = (props) => {
  return (
    <div class="container">
      <div
        class="alert alert-primary alert-dismissible fade show"
        role="alert"
        style={{ textAlign: "justify" }}
      >
        <h4>Welcome!</h4>Play with this little app and see what this blockchain
        does. Create new transactions and mine new blocks. Change settings >
        difficulty and see the Proof of Work in action. Click on a block and see
        what transactions it has.
        <p>
          {" "}
          <a href="https://github.com/dukewellington61/blockchain-app">
            see the Source code
          </a>{" "}
        </p>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick="dismissInfoMessage()"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
