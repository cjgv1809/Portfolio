import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <div className="flex justify-center items-center">
        <p className="font-bold text-2xl text-white">{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
