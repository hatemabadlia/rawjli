import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { members } from "../constants";

const TeamSlider = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const previousMemberIndex = (currentMemberIndex - 1 + members.length) % members.length;
  const nextMemberIndex = (currentMemberIndex + 1) % members.length;

  // Automatically switch to the next member every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 5000); // 5000 ms = 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <section id="team" className="py-20 relative">
      <h2 className="text-center text-[40px] font-bold text-white mb-10">
        Meet the Team
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        {/* Previous Member (Left Side) */}
        <motion.div
          className="absolute left-[5%] w-[250px] opacity-60 scale-80" // Wider spacing & bigger image
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 0.5, x: 0 }}
          exit={{ opacity: 0, x: -120 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={members[previousMemberIndex].photo}
            alt={members[previousMemberIndex].name}
            className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-[#915EFF]" // Bigger image & thicker border
          />
          <h3 className="text-white text-[18px] font-bold text-center">
            {members[previousMemberIndex].name}
          </h3>
        </motion.div>

        {/* Current (Main) Member */}
        <AnimatePresence>
          <motion.div
            key={currentMemberIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute w-[350px] bg-tertiary p-8 rounded-3xl shadow-xl text-center z-10" // Bigger card & increased padding
          >
            <img
              src={members[currentMemberIndex].photo}
              alt={members[currentMemberIndex].name}
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-[#915EFF]" // Even bigger image for main card
            />
            <h3 className="text-white text-[24px] font-bold">
              {members[currentMemberIndex].name}
            </h3>
            <p className="text-secondary text-[16px]">{members[currentMemberIndex].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Next Member (Right Side) */}
        <motion.div
          className="absolute right-[5%] w-[250px] opacity-60 scale-80" // Wider spacing & bigger image
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 0.5, x: 0 }}
          exit={{ opacity: 0, x: 120 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={members[nextMemberIndex].photo}
            alt={members[nextMemberIndex].name}
            className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-[#915EFF]" // Bigger image & thicker border
          />
          <h3 className="text-white text-[18px] font-bold text-center">
            {members[nextMemberIndex].name}
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSlider;
