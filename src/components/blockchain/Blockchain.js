import React from "react";
import Block from "./Block";

const Blockchain = ({ blockchain, blockchainService, clickHandler }) => {
  console.log(blockchainService);

  return (
    <div>
      {blockchain.map((block, index, arr) => (
        <Block
          key={index}
          block={block}
          index={index}
          blockArray={arr}
          blockchainService={blockchainService}
          clickHandler={() => clickHandler(index)}
        />
      ))}
    </div>
  );
};

export default Blockchain;
