import React from "react";
import logo from '/logo.png'

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <img src={logo} alt="Loading..." />
      {/* <p>Loading...</p> */}
</div>
  );
};


export default LoadingSpinner;
