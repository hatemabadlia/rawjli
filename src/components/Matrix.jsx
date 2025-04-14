import React from "react";
import { motion } from "framer-motion";

// Number animation logic
const numberVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const SuccessMetrics = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
      <h2 className="text-center text-[32px] font-bold mb-10">Our Impact</h2>

      <div className="flex justify-center gap-10">
        <motion.div
          className="p-5 bg-tertiary rounded-lg text-center shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={numberVariant}
        >
          <p className="text-[40px] font-bold">1.2M+</p>
          <p>Total Reach</p>
        </motion.div>

        <motion.div
          className="p-5 bg-tertiary rounded-lg text-center shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={numberVariant}
        >
          <p className="text-[40px] font-bold">5x</p>
          <p>Average ROI</p>
        </motion.div>

        <motion.div
          className="p-5 bg-tertiary rounded-lg text-center shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={numberVariant}
        >
          <p className="text-[40px] font-bold">$250K+</p>
          <p>Generated Revenue</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
