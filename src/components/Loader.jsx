import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p className="font-bold text-2xl text-white mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;