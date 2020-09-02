import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Transactions from "./Transactions";

const Block = ({ block, index, blockArray, blockChainService }) => {
  const [blockIndex, setBlockIndex] = useState(null);

  const clickHandler = () => setBlockIndex(index);

  return (
    <Fragment>
      <div class="card" onClick={clickHandler} style={{ cursor: "pointer" }}>
        <div class="card-body">
          <h5 class="card-title">
            Block {index}{" "}
            <small class="text-muted">
              {block.transactions === "Genisis block" && "Genesis block"}
            </small>
          </h5>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="">Hash</span>

            <div class="text-truncate">
              <small>{block.hash}</small>
            </div>

            <span class="">Hash of previous block</span>

            <div class="text-truncate">
              <small>{block.previousHash}</small>
            </div>
          </li>

          <li class="list-group-item">
            <span class="">Nonce</span>
            <div class="text-truncate text-muted">
              <small>{block.nonce}</small>
            </div>
          </li>

          <li class="list-group-item">
            <span class="">Timestamp</span>
            <div class="text-truncate text-muted">
              <small>{block.timestamp}</small>
            </div>
          </li>
        </ul>
      </div>

      {blockIndex !== null && (
        <Transactions
          transactions={blockArray[blockIndex].transactions}
          index={index}
          blockChainService={blockChainService}
        />
      )}
    </Fragment>
  );
};

Block.propTypes = {};

export default Block;
