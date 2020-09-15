import React, { useState } from "react";
import { Transaction } from "../../blockchain";
import { useHistory } from "react-router-dom";

const CreateTransaction = ({ blockchainService, displayAlert }) => {
  const [formData, setFormData] = useState({
    toAddress: "",
    amount: "",
  });

  const { toAddress, amount } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tx = new Transaction();
    tx.fromAddress = blockchainService.walletKeys[0].publicKey;
    tx.toAddress = toAddress;
    tx.amount = amount;
    tx.signTransaction(blockchainService.walletKeys[0].keyObj);
    blockchainService.addTransaction(tx);
    history.push("/pending-transactions");
    displayAlert("Transaction has been successfully created.");
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
            {blockchainService.walletKeys[0].publicKey}
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
          sign & create transaction
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;
