import React from "react";
import Transactions from "../transactions/Transactions";

const PendingTransactions = ({
  blockchainService,
  clickHandlerTwo,
  notRenderMinePendingTransactions,
}) => {
  const minePendingTransactions = () => {
    blockchainService.minePendingTransactions();
    clickHandlerTwo(true);
    notRenderMinePendingTransactions();
  };

  return (
    <div className="container">
      <div className="alert alert-success" role="alert">
        Transaction created successfully!
      </div>

      <h1>Pending transactions</h1>
      <p>
        These transactions are waiting to be included in the next block. Next
        block is created when you start the mining process.
      </p>

      <Transactions
        transactions={blockchainService.blockchainInstance.pendingTransactions}
        index={"none"}
        blockchainService={blockchainService}
      />

      <button className="btn btn-primary" onClick={minePendingTransactions}>
        Start mining
      </button>

      <div>Mining block.. Hang on yo...</div>
    </div>
  );
};

export default PendingTransactions;
