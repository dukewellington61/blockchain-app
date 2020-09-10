import React, { useState } from "react";
import Blockchain from "../blockchain/Blockchain";
import Transactions from "../transactions/Transactions";
import Navbar from "../layout/Navbar";
import Wallet from "../wallets/Wallet";

const Interface = ({ blockchainService }) => {
  const [blockIndex, setBlockIndex] = useState(null);

  const clickHandlerOne = (index) => setBlockIndex(index);

  const [renderContent, setRenderContent] = useState(true);

  const clickHandlerTwo = (val) => setRenderContent(val);

  const blockchain = blockchainService.blockchainInstance.chain;

  const [renderWallet, setRenderWallet] = useState(false);

  const displayWallet = (val) => setRenderWallet(val);

  return (
    <div>
      <Navbar
        blockchainService={blockchainService}
        clickHandlerTwo={clickHandlerTwo}
        displayWallet={displayWallet}
      />
      <div className="container">
        <div
          className="interface_content"
          style={{ display: renderContent ? "block" : "none" }}
        >
          <Blockchain
            blockchain={blockchain}
            blockchainService={blockchainService}
            clickHandler={clickHandlerOne}
          />
          <div style={{ marginTop: "2rem" }}>
            {blockIndex !== null && (
              <Transactions
                transactions={blockchain[blockIndex].transactions}
                index={blockIndex}
                blockchainService={blockchainService}
                displayWallet={displayWallet}
                clickHandlerTwo={clickHandlerTwo}
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ display: renderWallet ? "block" : "none" }}>
        <Wallet />
      </div>
    </div>
  );
};

export default Interface;
