import React from "react";
import Transactions from "../transactions/Transactions";

const PendingTransactions = ({ blockchainService }) => {
  return (
    <div class="container">
      <div class="alert alert-success" role="alert">
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

      <button class="btn btn-primary"> Start mining</button>

      <div>Mining block.. Hang on...</div>
    </div>
  );
};

export default PendingTransactions;
