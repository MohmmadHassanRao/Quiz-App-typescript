import React from "react";
import Lottie from "react-lottie";
import animationData from "./../lotties/done.json";
const Result = () => {
  const defaultOptions = {
    autoplay: true,
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={500} />
    </div>
  );
};

export default Result;
