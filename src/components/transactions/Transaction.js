import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Transaction = ({ index, transaction, blockchainService }) => {
  return (
    <tr>
      <td>{index}</td>
      <td className="text-truncate" style={{ maxWidth: "100px" }}>
        {transaction.fromAddress === null ? (
          "System"
        ) : (
          <Fragment>
            <Link to="/wallet">{transaction.fromAddress}</Link>
          </Fragment>
        )}
      </td>

      <td className="text-truncate" style={{ maxWidth: "100px" }}>
        <Fragment>
          <Fragment>
            <Link to="/wallet">{transaction.toAddress}</Link>
          </Fragment>
          <span className="text-muted">
            <small>
              {blockchainService.addressIsFromCurrentUser(
                transaction.toAddress
              ) && "That's yours!"}
            </small>
          </span>
        </Fragment>
        )}
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
