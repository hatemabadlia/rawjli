import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  // Animated Typing Effect
  const words = ["Digital Marketing.", "Web & App Development.", "AI-Powered Solutions."];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < words[wordIndex].length) {
        setDisplayText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <motion.div 
        className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Line Animation */}
        <motion.div 
          className="flex flex-col justify-center items-center mt-5"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-5 h-5 rounded-full bg-[#08C0FC] shadow-lg shadow-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
          
        </motion.div>

        {/* HERO TEXT */}
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
  Welcome to <span className="text-[#08C0FC] drop-shadow-lg">My Portfolio</span>
</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="text-[#08C0FC] font-bold">{displayText}</span>
          </p>
        </div>
      </motion.div>

      {/* Background 3D Animation */}
      

      {/* Scroll Indicator */}
      <motion.div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>

      {/* Subtle Floating Animation */}
  
    </section>
  );
};

export default Hero;
