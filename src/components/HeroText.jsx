import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

const HeroTextV1 = () => {
  const words = ["Secure", "Modern", "Scalable"];

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
      {/* Greeting */}
      <motion.h1
        className="text-2xl font-medium text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm Haikal
      </motion.h1>

      {/* Main headline */}
      <motion.h2
        className="mt-4 text-4xl font-bold text-white md:text-6xl leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Building <span className="text-lavender">Modern</span> <br />
        Web Experiences
      </motion.h2>

      {/* Dynamic words */}
      <motion.div
        className="mt-4 text-3xl font-black md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <FlipWords words={words} className="text-white" />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-lg text-neutral-400 md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Frontend Developer | Crafting user-friendly, scalable solutions
      </motion.p>
    </div>
  );
};

export default HeroTextV1;
