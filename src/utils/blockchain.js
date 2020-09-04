import { Blockchain } from "../../node_modules/blockchain/vid4/blockchain";
import EC from "elliptic";

export class BlockchainService {
  blockchainInstance = new Blockchain();
  walletKeys = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions("my-wallet-address");

    this.generateWalletKeys();
  }

  getBlocks() {
    return this.blockchainInstance.cain;
  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }

  generateWalletKeys() {
    const ec = new EC.ec("secp256k1");
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic("hex"),
      privateKey: key.getPrivate("hex"),
    });
  }

  addTransaction(transaction) {
    this.blockchainInstance.addTransaction(transaction);
  }
}
