import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  return () => {
    return (
      <motion.section
        variants={staggerContainer()}
        id={idName}
        className={`${styles.paddingX} relative w-full max-w-7xl flex flex-col items-start justify-center`}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
