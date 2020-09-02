import React from "react";
import PropTypes from "prop-types";
import Blockchain from "../blockchain/Blockchain";
import { BlockchainService } from "../../utils/blockchain";

const Interface = (props) => {
  const blockchain = new BlockchainService();

  return (
    <div>
      <Blockchain
        blockchain={blockchain.blockchainInstance.chain}
        blockChainService={blockchain}
      />
    </div>
  );
};

Interface.propTypes = {};

export default Interface;
