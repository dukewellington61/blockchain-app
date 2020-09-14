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
      <td>{index + 1}</td>
      <td className="text-truncate" style={{ maxWidth: "100px" }}>
        {transaction.fromAddress === null ? (
          "System"
        ) : (
          <div>
            {hasLinkToWallet ? (
              <Link to={"/wallet/" + transaction.fromAddress}>
                <div className="text-truncate">{transaction.fromAddress}</div>
              </Link>
            ) : (
              <div
                to={"/wallet/" + transaction.fromAddress}
                className="text-truncate"
              >
                {transaction.fromAddress}
              </div>
            )}
          </div>
        )}
        <small>
          {blockchainService.addressIsFromCurrentUser(
            transaction.fromAddress
          ) && "(That's yours!)"}
        </small>
      </td>

      <td style={{ maxWidth: "100px" }}>
        <div>
          {hasLinkToWallet ? (
            <Link to={"/wallet/" + transaction.toAddress}>
              <div className="text-truncate">{transaction.toAddress}</div>
            </Link>
          ) : (
            <div
              to={"/wallet/" + transaction.toAddress}
              className="text-truncate"
            >
              {transaction.toAddress}
            </div>
          )}
          <small>
            {blockchainService.addressIsFromCurrentUser(
              transaction.toAddress
            ) && "(That's yours!)"}
          </small>
        </div>
      </td>

      <td>
        {transaction.amount}
        {transaction.fromAddress === null && (
          <span className="text-muted">
            <small> (Block reward)</small>
          </span>
        )}
      </td>

      <td>
        {transaction.timestamp}
        <div className="text-muted">
          <small>
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(transaction.timestamp)}
          </small>
        </div>
      </td>
      {}
      <td style={{ maxWidth: "40px" }}>
        <span>{transaction.isValid && transaction.isValid() ? "✓" : "✗"}</span>
      </td>
    </tr>
  );
};

export default Transaction;
