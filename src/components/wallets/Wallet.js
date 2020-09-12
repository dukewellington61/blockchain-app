import React from "react";
import { useParams } from "react-router";

const Wallet = ({blockchainService}) => {
  let { id } = useParams();

  return (
    <div class="container">
      <h1>Wallet details</h1>

      <p style={{ wordWrap: "break-word" }}>
        <strong>Address:</strong>

        {id}
      </p>

      <p>
        <strong>Balance:</strong>

        {"balance"}
      </p>

      <h1>Transactions</h1>
      <p>This wallet has made no transactions (yet)</p>
      <app-transactions-table></app-transactions-table>
    </div>
  );
};

export default Wallet;
