import React, { useState } from "react";
import Blockchain from "../blockchain/Blockchain";
import Transactions from "../transactions/Transactions";
import Navbar from "../layout/Navbar";

const Interface = ({ blockchainService }) => {
  const [blockIndex, setBlockIndex] = useState(null);

  const clickHandlerOne = (index) => setBlockIndex(index);

  const [renderContent, setRenderContent] = useState(true);

  const clickHandlerTwo = (val) => setRenderContent(val);

  const blockchain = blockchainService.blockchainInstance.chain;

  return (
    <div>
      <Navbar
        blockchainService={blockchainService}
        clickHandlerTwo={clickHandlerTwo}
      />
      <div
        className="interface_content"
        style={{ display: renderContent ? "block" : "none" }}
      >
        <Blockchain
          blockchain={blockchain}
          blockchainService={blockchainService}
          clickHandler={clickHandlerOne}
        />
        {blockIndex !== null && (
          <Transactions
            transactions={blockchain[blockIndex].transactions}
            index={blockIndex}
            blockchainService={blockchainService}
          />
        )}
      </div>
    </div>
  );
};

export default Interface;
