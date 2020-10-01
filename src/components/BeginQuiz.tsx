import React from "react";
import Lottie from "react-lottie";
import animationData from "./../lotties/quiz-lottie.json";

const BeginQuiz = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    initialSegment: [50, 140],
    playSpeed: [2],
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={800} />
    </div>
  );
};

export default BeginQuiz;
