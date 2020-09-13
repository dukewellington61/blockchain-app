import React from "react";
import { useParams } from "react-router";
import Transactions from "../transactions/Transactions";

const Wallet = ({ blockchainService }) => {
  let { address } = useParams();

  const txOfWallet = blockchainService.blockchainInstance.getAllTransactionsForWallet(
    address
  );

  return (
    <div className="container">
      <h1>Wallet details</h1>

      <p style={{ wordWrap: "break-word" }}>
        <strong>Address: </strong>

        {address}
      </p>

      <p>
        <strong>Balance: </strong>

        {blockchainService.blockchainInstance.getBalanceOfAddress(address)}
      </p>

      <h1>Transactions</h1>
      {blockchainService.blockchainInstance.getAllTransactionsForWallet(address)
        .length === 0 ? (
        <p>This wallet has made no transactions (yet)</p>
      ) : (
        <Transactions
          transactions={txOfWallet}
          index={"none"}
          blockchainService={blockchainService}
          hasLinkToWallet={false}
        />
      )}
    </div>
  );
};

export default Wallet;
