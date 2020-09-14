import React, { Fragment } from "react";

const Block = ({ block, index, setIndex }) => {
  return (
    <Fragment>
      <div
        className="card"
        onClick={() => setIndex(index)}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            Block {index}{" "}
            <small className="text-muted">
              {block.transactions === "Genisis block" && "Genesis block"}
            </small>
          </h5>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Hash</span>

            <div className="text-truncate">
              <small
                style={{
                  color: "#" + block.hash.substring(0, 6),
                  fontWeight: "bold",
                }}
              >
                {block.hash}
              </small>
            </div>
            <br />
            <span className="">Hash of previous block</span>

            <div className="text-truncate">
              <small
                style={{
                  color: "#" + block.previousHash.substring(0, 6),
                  fontWeight: "bold",
                }}
              >
                {block.previousHash}
              </small>
            </div>
          </li>

          <li className="list-group-item">
            <span className="">Nonce</span>
            <div className="text-truncate text-muted">
              <small>{block.nonce}</small>
            </div>
          </li>

          <li className="list-group-item">
            <span className="">Timestamp</span>
            <div className="text-truncate text-muted">
              <small>{block.timestamp}</small>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Block;
