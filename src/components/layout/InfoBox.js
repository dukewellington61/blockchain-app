import React from "react";

const InfoBox = (props) => {
  return (
    <div className="container">
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
        style={{ textAlign: "justify" }}
      >
        This demo lets you create transactions which can then be written into
        the blocks of a blockchain. However, before a new block can be mined, a
        cryptographic puzzle must be solved. In settings you can change the
        difficulty of the puzzle. The higher you go, the longer the algorithm
        will need to find a solution. The "Nonce" in the newly created block
        tells you how many computations had to be performed by your system,
        before a new block could be added to the blockchain. <br />
        Blockchains are all about decentralized, tamper proof storage of data.
        The Proof of Work (PoW) consensus mechanism is an essential part of
        that. Cryptographic puzzles lay at the heart of the PoW. Click
        <a
          href="https://academy.binance.com/en/articles/proof-of-work-explained"
          target="blank"
        >
          &nbsp;here&nbsp;
        </a>
        to learn more.
        <p>
          <a
            href="https://github.com/dukewellington61/blockchain-app"
            target="blank"
          >
            see the code on github <i class="fab fa-github"></i>
          </a>{" "}
        </p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
