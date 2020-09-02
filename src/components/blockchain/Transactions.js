import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Transaction from "./Transaction";

const Transactions = ({ transactions, index, blockChainService }) => {
  const [blockIndex, setBlockIndex] = useState(null);

  useEffect(() => {
    setBlockIndex(index);
  }, [blockIndex]);

  return (
    <Fragment>
      <h1>Transactions inside block {blockIndex}</h1>
      <div>
        {transactions === "Genisis block" && "This block has no transactions"}
      </div>

      <div>
        {transactions !== "Genisis block" && (
          <table class="table table-hover table-striped">
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
                  transaction={transaction}
                  index={index}
                  blockChainService={blockChainService}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Fragment>
  );
};

Transactions.propTypes = {};

export default Transactions;
