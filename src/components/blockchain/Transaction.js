import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Transaction = ({ index, transaction, blockChainService }) => {
  return (
    <tr>
      <td>{index}</td>
      <td class="text-truncate" style={{ maxWidth: "100px" }}>
        {transaction.fromAddress === null ? (
          "System"
        ) : (
          <Fragment>
            <a>{transaction.fromAddress}</a>
            <span class="text-muted">
              <small>
                {blockChainService.addressIsFromCurrentUser(
                  transaction.fromAddress
                ) && "That's yours!"}
              </small>
            </span>
          </Fragment>
        )}
      </td>

      <td class="text-truncate" style={{ maxWidth: "100px" }}>
        {transaction.fromAddress === null ? (
          "System"
        ) : (
          <Fragment>
            <a>{transaction.toAddress}</a>
            <span class="text-muted">
              <small>
                {blockChainService.addressIsFromCurrentUser(
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
          <span class="text-muted">
            <small>(Block reward)</small>
          </span>
        )}
      </td>

      <td>
        {transaction.timestamp}
        <span class="text-muted">
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

Transaction.propTypes = {};

export default Transaction;
