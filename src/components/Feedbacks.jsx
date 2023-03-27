import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <>
      <div className="w-full flex flex-wrap rounded-[20px] mt-10">
        <div
          className={`${styles.padding} rounded-[10px] min-h-[300px] bg-black-100`}
        >
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} text-white mb-10`}>
              Testimonials
            </h2>
          </motion.div>

          <div className="w-full flex flex-wrap gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TestimonialCard = ({
  testimonial: { testimonial, name, designation, company, image },
  index,
}) => {
  return (
    <div className="flex flex-col flex-wrap max-w-[300px] min-h-[280px]">
      <motion.div
        variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
        className="bg-tertiary rounded-[20px] p-6 h-full flex flex-col justify-evenly gap-5 cursor-pointer group hover:bg-white-100 transition-colors duration-300 ease-in-out"
      >
        <img
          src={image}
          alt={`feedback by ${name}`}
          className="w-16 h-16 rounded-full object-cover mx-auto"
        />
        <blockquote className="text-white text-lg text-center font-semibold group-hover:text-black-200">
          "{testimonial}"
        </blockquote>
        <div className="flex justify-between items-center">
          <p className="text-secondary text-sm font-light group-hover:text-black-200">
            {company}
          </p>
          <div>
            <cite className="text-white text-base not-italic font-medium group-hover:text-black-200">
              {name}
            </cite>
            <p className="text-secondary text-sm font-light group-hover:text-black-200">
              {designation}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
