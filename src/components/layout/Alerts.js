import React from "react";

const Alerts = ({ content }) => {
  return (
    <div className="alert alert-success" role="alert">
      {content}
    </div>
  );
};

export default Alerts;
