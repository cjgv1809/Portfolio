import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {technologies.map((tech, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
          <p className="text-center text-white">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
