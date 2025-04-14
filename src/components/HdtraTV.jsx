import React, { useState } from "react";
import { motion } from "framer-motion";

const HdtraTV = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-[400px] h-[250px] md:w-[500px] md:h-[300px] bg-black rounded-lg border-8 border-[#915EFF] shadow-lg overflow-hidden"
      >
        <video
          src={videoSrc}
          autoPlay={isPlaying}
          loop
          muted
          className="w-full h-full object-cover"
        />

        {/* Play/Pause Button */}
        <button
          className="absolute bottom-3 right-3 bg-[#915EFF] text-white px-3 py-1 rounded-md text-sm shadow-md hover:bg-[#7a4edf]"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </motion.div>

      {/* Video Description */}
      <p className="mt-4 text-white text-lg font-semibold">
        🔥 Hdtra Creative Showcase
      </p>
    </div>
  );
};

export default HdtraTV;
     {/* TV Screen Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></div>

        {/* Video Element */}
   