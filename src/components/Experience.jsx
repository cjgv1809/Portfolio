import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-white mb-10`}>
          Work Experience
        </h2>
      </motion.div>

      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </VerticalTimeline>
    </>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#1e1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #232631",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain"
          />
        </div>
      }
    >
      <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
      <h4 className="text-secondary text-lg font-semibold uppercase tracking-widest">
        {experience.company_name}
      </h4>
      <ul className="list-disc space-y-2 p-4 pl-8">
        {experience.points.map((point, index) => (
          <li className="text-white-100 text-sm font-light" key={index}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default SectionWrapper(Experience, "work-experience");
