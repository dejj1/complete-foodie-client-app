import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-4 w-102">
  <div className="skeleton h-72 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
  );
};


export default LoadingSpinner;
