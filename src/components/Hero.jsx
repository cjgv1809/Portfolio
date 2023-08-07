import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} font-bold text-white`}>
            Hi, I'm <span className="text-[#915eff]">Carlos</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-5`}>
            I'm a <span className="text-[#915eff]">Frontend/</span>
            <span className="text-[#915eff]">UI Developer</span>
            <br />
            based on <span className="text-[#915eff]">Argentina</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 xs:right-10 bottom-10 right-10 flex justify-center">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
