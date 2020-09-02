import React from "react";
import PropTypes from "prop-types";
import Block from "./Block";

const Blockchain = ({ blockchain, blockChainService }) => {
  return (
    <div>
      {blockchain.map((block, index, arr) => (
        <Block
          block={block}
          index={index}
          blockArray={arr}
          blockChainService={blockChainService}
        />
      ))}
    </div>
  );
};

Blockchain.propTypes = {};

export default Blockchain;
