import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="py-12 px-4 md:px-0 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-black"
      >
        Hi, I'm Chirag Taluja
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-700"
      >
        I'm a full stack developer with a focus on frontened creating stunning
        user interfaces and memorable user experiences. With expertise in modern
        web technologies such as React, Next.js, and Framer Motion, I bring
        ideas to life through code and design.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 flex justify-center items-center"
      >
        <img
          src="/portriat.png"
          alt="Portrait"
          className="w-40 h-40 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
