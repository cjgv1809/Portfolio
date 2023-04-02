import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { Vortex } from "react-loader-spinner";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col justify-center items-center">
        <Vortex
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={[
            "#915eff",
            "#aaa6c3",
            "#151030",
            "#f3f3f3",
            "#211e35",
            "#050816",
          ]}
        />
        <p className="text-white text-2xl font-bold">{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
