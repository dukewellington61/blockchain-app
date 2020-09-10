import React, { Fragment } from "react";
import Transaction from "./Transaction";

const Transactions = ({
  transactions,
  index,
  blockchainService,
  displayWallet,
  clickHandlerTwo,
}) => {
  return (
    <div>
      {index !== "none" && <h1>Transactions inside block {index}</h1>}
      <div>
        {transactions === "Genisis block" && "This block has no transactions"}
      </div>

      <div>
        {transactions !== "Genisis block" && (
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Amount</th>
                <th scope="col">Timestamp</th>
                <th scope="col">Valid?</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction, index, array) => (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                  blockchainService={blockchainService}
                  displayWallet={displayWallet}
                  clickHandlerTwo={clickHandlerTwo}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Transactions;
