import React, { useState, useEffect } from "react";
import { Transaction } from "../../blockchain";

const CreateTransaction = ({
  blockchainService,
  getNumberOfPendingTransactions,
}) => {
  const [formData, setFormData] = useState({
    transaction: {},
    toAddress: "",
    amount: "",
  });

  const { transaction, toAddress, amount } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    const transaction = new Transaction();
    transaction.fromAddress = blockchainService.walletKeys[0].publicKey;
    setFormData({ transaction: transaction });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    transaction.toAddress = toAddress;
    transaction.amount = amount;
    transaction.signTransaction(blockchainService.walletKeys[0].keyObj);
    blockchainService.addTransaction(transaction);
    getNumberOfPendingTransactions(
      blockchainService.blockchainInstance.pendingTransactions.length
    );
  };

  return (
    <div className="container">
      <h1>Create transaction</h1>
      <p>Transfer some money to someone!</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="fromAddress">From address</label>
          <div
            className="form-control"
            id="fromAddress"
            style={{ overflow: "hidden", background: "#D0D0D0" }}
          >
            {formData.transaction.fromAddress}
          </div>
          <small id="fromAddressHelp" className="form-text text-muted">
            This is your wallet address. You cannot change it because you can
            only spend your own coins.
          </small>
        </div>

        <div className="form-group">
          <label for="toAddress">To address</label>
          <input
            type="text"
            name="toAddress"
            className="form-control"
            id="toAddress"
            onChange={handleChange}
            required
          ></input>
          <small id="fromAddressHelp" className="form-text text-muted"></small>
          <small id="toAddressHelp" className="form-text text-muted">
            The address of the wallet where you want to send the money to. You
            can type random text here (if you are not interested in recovering
            the funds)
          </small>
        </div>

        <div className="form-group">
          <label for="amount">Amount</label>
          <input
            type="number"
            name="amount"
            className="form-control"
            id="amount"
            onChange={handleChange}
            required
          ></input>
          <small id="fromAddressHelp" className="form-text text-muted"></small>
          <small id="amountHelp" className="form-text text-muted">
            You can transfer any amount. Account balance is not checked in this
            demo. Have at it!
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign & create transaction
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;
