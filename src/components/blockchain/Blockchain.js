import React from "react";
import Block from "./Block";

const Blockchain = ({ blockchain, blockchainService, setIndex }) => {
  return (
    <div
      className="container"
      style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
    >
      {blockchain.map((block, index, arr) => (
        <Block
          key={index}
          block={block}
          index={index}
          blockArray={arr}
          blockchainService={blockchainService}
          setIndex={setIndex}
        />
      ))}
    </div>
  );
};

export default Blockchain;
