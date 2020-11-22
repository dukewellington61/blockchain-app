import React, { useState } from "react";

const Settings = ({ blockchainService, displayAlert }) => {
  const [formData, setFormData] = useState({
    difficulty: "",
    miningReward: "",
  });

  const { difficulty, miningReward } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    blockchainService.blockchainInstance.miningReward = parseInt(miningReward);
    blockchainService.blockchainInstance.difficulty = parseInt(difficulty);
    displayAlert(
      `new settings: difficulty: ${blockchainService.blockchainInstance.difficulty}  mining reward: ${blockchainService.blockchainInstance.miningReward}`
    );
  };

  return (
    <div className="container">
      <h1>Settings</h1>
      <p>
        Control how the blockchain behaves when new transactions or blocks are
        created.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="difficulty">Difficulty</label>
          <input
            type="number"
            name="difficulty"
            className="form-control"
            id="difficulty"
            onChange={handleChange}
            placeholder={blockchainService.blockchainInstance.difficulty}
            required
          ></input>
          <small id="difficultyHelp" className="form-text text-muted">
            Be carefull! Setting the difficulty too high will overwhelm your
            device and bring your browser to a standstill. Up to 5 should be
            okay.
          </small>
        </div>

        <div className="form-group">
          <label for="miningReward">Mining reward</label>
          <input
            type="number"
            name="miningReward"
            className="form-control"
            id="miningReward"
            onChange={handleChange}
            placeholder={blockchainService.blockchainInstance.miningReward}
            required
          ></input>
          <small id="miningRewardHelp" className="form-text text-muted">
            How much "coins" a miner receives for successfully creating a new
            block for the chain. Default: 100
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          submit changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
