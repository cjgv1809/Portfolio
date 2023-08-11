import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-white mb-10`}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.sectionSubText} text-secondary text-lg max-w-3xl`}
      >
        I'm a skilled Frontend/UI Developer with 2+ years of experience in the
        field. I have a passion for creating beautiful and functional websites
        and apps.
        <br />
        I'm always looking for new challenges and opportunities to improve my
        skills. I'm currently working as a freelancer and I'm open to new
        projects.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        reverse: true,
        max: 15,
        perspective: 500,
        scale: 1,
        speed: 450,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
        className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[280px] flex flex-col justify-evenly items-center"
      >
        <img
          src={service.icon}
          alt={service.title}
          className="flex items-center justify-center w-16 h-16 object-contain rounded-full bg-[#915eff]"
        />
        <h3 className="mt-5 text-lg font-bold text-white text-center">
          {service.title}
        </h3>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(About, "about");
