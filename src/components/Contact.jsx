import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Hdtra Team",
          from_email: form.email,
          to_email: "habadliahatem@gmail.com", // ✅ Hdtra's Real Email
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Message sent! We'll get back to you ASAP.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("❌ Oops! Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      
      {/* 🚀 CONTACT FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#1d1836] p-8 rounded-2xl shadow-lg"
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={`${styles.sectionHeadText} text-[#915EFF]`}>Contact hatem</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-[#15102e] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg border border-[#915EFF] outline-none font-medium focus:ring-2 focus:ring-[#915EFF]"
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-[#15102e] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg border border-[#915EFF] outline-none font-medium focus:ring-2 focus:ring-[#915EFF]"
            />
          </label>

          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
              className="bg-[#15102e] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg border border-[#915EFF] outline-none font-medium focus:ring-2 focus:ring-[#915EFF]"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#915EFF] hover:bg-[#7a4edf] py-3 px-8 rounded-lg font-bold text-white shadow-md transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* 🌍 EARTH CANVAS ANIMATION */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
