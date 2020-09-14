import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Transaction = ({
  index,
  transaction,
  blockchainService,
  hasLinkToWallet,
}) => {
  return (
    <tr>
      <td>{index}</td>
      <td className="text-truncate" style={{ maxWidth: "100px" }}>
        {transaction.fromAddress === null ? (
          "System"
        ) : (
          <div>
            {hasLinkToWallet ? (
              <Link to={"/wallet/" + transaction.fromAddress}>
                {transaction.fromAddress}
              </Link>
            ) : (
              <div to={"/wallet/" + transaction.fromAddress}>
                {transaction.fromAddress}
              </div>
            )}
          </div>
        )}
        <small>
          {blockchainService.addressIsFromCurrentUser(transaction.toAddress) &&
            "That's yours!"}
        </small>
      </td>

      <td className="text-truncate" style={{ maxWidth: "100px" }}>
        <div>
          {transaction.toAddress === null ? (
            "System"
          ) : (
            <div>
              {hasLinkToWallet ? (
                <Link to={"/wallet/" + transaction.toAddress}>
                  {transaction.toAddress}
                </Link>
              ) : (
                <div to={"/wallet/" + transaction.toAddress}>
                  {transaction.toAddress}
                </div>
              )}
            </div>
          )}

          <span className="text-muted">
            <small>
              {blockchainService.addressIsFromCurrentUser(
                transaction.toAddress
              ) && "That's yours!"}
            </small>
          </span>
        </div>
      </td>

      <td>
        {transaction.amount}
        {transaction.fromAddress === null && (
          <span className="text-muted">
            <small>(Block reward)</small>
          </span>
        )}
      </td>

      <td>
        {transaction.timestamp}
        <span className="text-muted">
          <small>{transaction.timestamp}</small>
        </span>
      </td>
      {}
      <td style={{ maxWidth: "40px" }}>
        <span>{transaction.isValid && transaction.isValid() ? "✓" : "✗"}</span>
      </td>
    </tr>
  );
};

export default Transaction;
