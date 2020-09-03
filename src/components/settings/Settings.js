import React from "react";

const Settings = ({ props }) => {
  return (
    <div className="container">
      <h1>Settings</h1>
      <p>
        Control how the blockchain behaves when new transactions or blocks are
        created. Changes are automatically saved.
      </p>

      <div className="form-group">
        <label for="difficulty">Difficulty</label>
        <input
          type="number"
          className="form-control"
          id="difficulty"
          aria-describedby="difficultyHelp"
        ></input>
        <small id="difficultyHelp" className="form-text text-muted">
          Difficulty controls how long the mining process takes. Higher numbers
          will make mining a lot slower! Default: 2
        </small>
      </div>

      <div className="form-group">
        <label for="miningReward">Mining reward</label>
        <input
          type="number"
          className="form-control"
          id="miningReward"
          aria-describedby="miningRewardHelp"
        ></input>
        <small id="miningRewardHelp" className="form-text text-muted">
          How much "coins" a miner receives for successfully creating a new
          block for the chain. Default: 100
        </small>
      </div>
    </div>
  );
};

export default Settings;
