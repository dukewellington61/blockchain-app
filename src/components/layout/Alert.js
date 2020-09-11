import React from "react";

const Alert = ({ content }) => {
  return (
    <div className="alert alert-success" role="alert">
      {content}
    </div>
  );
};

export default Alert;
