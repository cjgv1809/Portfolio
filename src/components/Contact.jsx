import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const showToastAccordingToFormState = () => {
    if (!form.name) {
      toast.error("Please enter your name");
    } else if (!form.email) {
      toast.error("Please enter your email");
    } else if (!form.message) {
      toast.error("Please enter your message");
    } else {
      toast.success("The message has been sent.");
      toast.info("I will get back to you as soon as possible. Thank you!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.name || !form.email || !form.message) {
      setIsLoading(false);
      return;
    }

    emailjs
      .send(
        "service_mut0c2q",
        "template_thakryh",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Carlos",
          to_email: "carlos.gomes.1809@gmail.com",
        },
        "EGA3c3SScoEOK7aOz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <div className="xl:mt-10 xl:flex-row w-full flex-col-reverse flex overflow-hidden mb-20">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="xl:flex-1 bg-black-100 p-6 rounded-2xl"
        >
          <h2 className={`${styles.sectionHeadText} text-white mb-10`}>
            Contact
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label
                className="text-white text-sm font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 bg-tertiary p-4  placeholder:text-secondary rounded-[10px] border-none font-medium outline-none"
              />
            </div>
            <div>
              <label
                className="text-white text-sm font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 bg-tertiary p-4  placeholder:text-secondary rounded-[10px] border-none font-medium outline-none"
              />
            </div>
            <div>
              <label
                className="text-white text-sm font-semibold"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full mt-2 bg-tertiary p-4  placeholder:text-secondary rounded-[10px] border-none font-medium outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-black-200 text-white rounded-[10px] py-3 px-8 shadow-md shadow-primary text-lg font-bold hover:bg-white-100
              hover:text-black-200 disabled:bg-gray-400 disabled:text-white
              disabled:cursor-not-allowed cursor-pointer transition-colors duration-300 ease-in-out"
              disabled={isLoading}
              onClick={showToastAccordingToFormState}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
