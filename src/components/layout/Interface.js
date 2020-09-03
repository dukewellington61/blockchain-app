import React, { useState, useRef } from "react";
import Blockchain from "../blockchain/Blockchain";
import { BlockchainService } from "../../utils/blockchain";
import Transactions from "../transactions/Transactions";
import Navbar from "../layout/Navbar";

const Interface = (props) => {
  const [blockIndex, setBlockIndex] = useState(null);

  const clickHandlerOne = (index) => setBlockIndex(index);

  const [renderContent, setRenderContent] = useState(true);

  const clickHandlerTwo = (val) => setRenderContent(val);

  // onClick @/components/blockchain/Block.js causes @components/layout/Interface.js to re-render
  // because that component changes due to transactions beeing displayed
  // to avoid new BlockchainService() beeing called again this function is in a useRef hook --> fires only on app start and browser refresh
  const ref = useRef({
    blockchainService: new BlockchainService(),
  });

  const blockchain = ref.current.blockchainService.blockchainInstance.chain;

  return (
    <div>
      <Navbar
        blockchainService={ref.current.blockchainService}
        clickHandlerTwo={clickHandlerTwo}
      />
      <div
        class="interface_content"
        style={{ display: renderContent ? "block" : "none" }}
      >
        <Blockchain
          blockchain={blockchain}
          blockchainService={ref.current.blockchainService}
          clickHandler={clickHandlerOne}
        />
        {blockIndex !== null && (
          <Transactions
            transactions={blockchain[blockIndex].transactions}
            index={blockIndex}
            blockchainService={ref.current.blockchainService}
          />
        )}
      </div>
    </div>
  );
};

export default Interface;
