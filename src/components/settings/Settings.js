import React, { useState } from "react";

const Settings = ({ blockchainService, renderSettings }) => {
  const [formData, setFormData] = useState({
    difficulty: "",
    miningReward: "",
  });

  const { difficulty, miningReward } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    blockchainService.blockchainInstance.miningReward = miningReward;
    blockchainService.blockchainInstance.difficulty = difficulty;
    document.removeEventListener("click", handleSubmit);
  };

  if (renderSettings) document.addEventListener("click", handleSubmit);

  return (
    <div className="container">
      <h1>Settings</h1>
      <p>
        Control how the blockchain behaves when new transactions or blocks are
        created. Changes are automatically saved.
      </p>
      <form className="form">
        <div className="form-group">
          <label for="difficulty">Difficulty</label>
          <input
            type="number"
            name="difficulty"
            className="form-control"
            id="difficulty"
            onChange={handleChange}
            placeholder={blockchainService.blockchainInstance.difficulty}
          ></input>
          <small id="difficultyHelp" className="form-text text-muted">
            Difficulty controls how long the mining process takes. Higher
            numbers will make mining a lot slower! Default: 2
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
          ></input>
          <small id="miningRewardHelp" className="form-text text-muted">
            How much "coins" a miner receives for successfully creating a new
            block for the chain. Default: 100
          </small>
        </div>
      </form>
    </div>
  );
};

export default Settings;
