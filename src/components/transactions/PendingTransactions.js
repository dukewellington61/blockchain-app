import React, { Fragment, useState } from "react";
import Transactions from "../transactions/Transactions";

const PendingTransactions = ({
  blockchainService,
  clickHandlerTwo,
  notRenderMinePendingTransactions,
  displayAlert,
}) => {
  const [renderInfo, setRenderInfo] = useState(false);

  const minePendingTransactions = () => {
    setRenderInfo(true);
    setTimeout(() => {
      blockchainService.minePendingTransactions();
      clickHandlerTwo(true);
      notRenderMinePendingTransactions();
      displayAlert(
        "New Block has been successfully created and added to the blockchain."
      );
    }, 5000);
    setRenderInfo(false);
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Pending transactions</h1>
        <p>
          These transactions are waiting to be included in the next block. Next
          block is created when you start the mining process.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Transactions
            transactions={
              blockchainService.blockchainInstance.pendingTransactions
            }
            index={"none"}
            blockchainService={blockchainService}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={minePendingTransactions}
          style={{ marginTop: "2rem" }}
        >
          Start mining
        </button>
        <div
          className="alert alert-success"
          role="alert"
          style={{ display: renderInfo ? "block" : "none" }}
        >
          ...mining new block... <started className=""></started>{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default PendingTransactions;
