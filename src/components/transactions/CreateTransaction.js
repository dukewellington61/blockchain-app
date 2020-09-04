import React, { useState, useEffect } from "react";
import { Transaction } from "../../../node_modules/blockchain/vid4/blockchain";

const CreateTransaction = ({ blockchainService, renderCreateTransaction }) => {
  //   console.log(blockchainService);
  const [formData, setFormData] = useState({
    transaction: {},
    toAddress: "",
    amount: "",
  });

  const { transaction, toAddress, amount } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    const walletKey = blockchainService.walletKeys[0];

    const transaction = new Transaction();

    transaction.fromAddress = walletKey.publicKey;
    transaction.signTransaction = walletKey.keyObj;

    setFormData({ transaction: transaction });
  }, []);

  const handleSubmit = (e) => {
    transaction.toAddress = toAddress;
    transaction.amount = amount;
    document.removeEventListener("click", handleSubmit);
    e.preventDefault();
  };

  if (renderCreateTransaction) document.addEventListener("click", handleSubmit);

  return (
    <div class="container">
      <h1>Create transaction</h1>
      <p>Transfer some money to someone!</p>
      <form className="form" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="fromAddress">From address</label>
          <input
            type="text"
            class="form-control"
            id="fromAddress"
            value={formData.transaction.fromAddress}
            disabled
          ></input>
          <small id="fromAddressHelp" class="form-text text-muted">
            This is your wallet address. You cannot change it because you can
            only spend your own coins.
          </small>
        </div>

        <div class="form-group">
          <label for="toAddress">To address</label>
          <input
            type="text"
            name="toAddress"
            class="form-control"
            id="toAddress"
            onChange={handleChange}
          ></input>
          <small id="fromAddressHelp" class="form-text text-muted"></small>
          <small id="toAddressHelp" class="form-text text-muted">
            The address of the wallet where you want to send the money to. You
            can type random text here (if you are not interested in recovering
            the funds)
          </small>
        </div>

        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            type="number"
            name="amount"
            class="form-control"
            id="amount"
            onChange={handleChange}
          ></input>
          <small id="fromAddressHelp" class="form-text text-muted"></small>
          <small id="amountHelp" class="form-text text-muted">
            You can transfer any amount. Account balance is not checked in this
            demo. Have at it!
          </small>
        </div>

        <button type="submit" class="btn btn-primary">
          Sign & create transaction
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;
