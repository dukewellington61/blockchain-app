import React, { useState } from "react";
import Blockchain from "../blockchain/Blockchain";
import Transactions from "../transactions/Transactions";

const Interface = ({ blockchainService }) => {
  const [blockIndex, setBlockIndex] = useState(null);

  const setIndex = (index) => setBlockIndex(index);

  const blockchain = blockchainService.blockchainInstance.chain;

  return (
    <div>
      <div className="container">
        <div className="interface_content">
          <Blockchain
            blockchain={blockchain}
            blockchainService={blockchainService}
            setIndex={setIndex}
          />
          <div style={{ marginTop: "2rem" }}>
            {blockIndex !== null && (
              <Transactions
                transactions={blockchain[blockIndex].transactions}
                index={blockIndex}
                blockchainService={blockchainService}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
