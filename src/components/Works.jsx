import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-white mb-10`}>
          Projects
        </h2>
      </motion.div>

      <div variants={fadeIn()} className="w-full flex flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText} text-secondary text-lg max-w-3xl`}
        >
          Following are some of the projects I have worked on. Each project is
          briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve problems and my passion for
          learning new technologies.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-10 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({
  project: { name, description, tags, image, source_code_link },
  index,
}) => {
  return (
    <Tilt
      className="xs:w-[250px] min-h-[280px] w-full"
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
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="bg-tertiary rounded-[20px] p-6 h-full flex flex-col justify-evenly gap-5"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-[10px]"
        />
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-secondary text-base font-light">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-white text-xs bg-primary px-2 py-1 rounded-[10px] uppercase tracking-widest"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          <Link to={source_code_link} target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              alt="github logo"
              className="w-10 h-10 rounded-full object-contain"
            />
          </Link>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(Works, "");
