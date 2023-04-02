import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Alert from "./Alert";
import Input from "./Input";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    emailjs
      .send(
        "service_mut0c2q",
        "template_thakryh",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Carlos",
          to_email: "carlos.gomes.1809@gmail.com",
        },
        "EGA3c3SScoEOK7aOz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          toast.success("The message has been sent.");
          toast.info("I will get back to you as soon as possible. Thank you!");
          formRef.current.reset();
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
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <Input
                register={register}
                label="name"
                aria-invalid={errors?.name ? "true" : "false"}
              />
              {errors?.name && errors?.name?.type === "required" && (
                <Alert title="Error" content="This field is required" />
              )}
            </div>
            <div>
              <Input
                register={register}
                label="email"
                aria-invalid={errors?.email ? "true" : "false"}
              />
              {(errors?.email && errors?.email?.type === "required" && (
                <Alert title="Error" content="This field is required" />
              )) ||
                (errors?.email && errors?.email?.type === "pattern" && (
                  <Alert title="Error" content="Invalid email" />
                ))}
            </div>
            <div>
              <Input
                register={register}
                label="message"
                isInput={false}
                aria-invalid={errors?.message ? "true" : "false"}
              />
              {errors?.message && errors?.message?.type === "required" && (
                <Alert title="Error" content="This field is required" />
              )}
            </div>
            <button
              type="submit"
              className="bg-black-200 text-white rounded-[10px] py-3 px-8 shadow-md shadow-primary text-lg font-bold hover:bg-white-100
              hover:text-black-200 disabled:bg-gray-400 disabled:text-white
              disabled:cursor-not-allowed cursor-pointer transition-colors duration-300 ease-in-out"
              disabled={isLoading}
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
