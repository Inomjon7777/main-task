import React from "react";

const Loading = () => {
  return (
    <div
      className="spinner-border text-primary position-absolute top-50 start-50"
      role="status"
    >
      <span className="sr-only"></span>
    </div>
  );
};
export default Loading;
