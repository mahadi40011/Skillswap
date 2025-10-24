import React from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="bg-slate-200 min-h-[85vh] flex justify-center items-center">
      <RingLoader color="#451616" speedMultiplier={2} />
    </div>
  );
};

export default LoadingSpinner;
