import React from "react";
import { snippets } from "../data";
import Snippet from "./Snippet";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Profile = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger only once
    threshold: 0.4, // 30% of the element should be visible before triggering
  });

  return (
    <div
      id="company-profile"
      className="px-[5%] md:px-[10%] py-[6%] bg-gray-100 overflow-x-hidden">
      <div className="bg-gradient-to-r from-blue-500 via-blue-950 to-cyan-400 bg-clip-text text-transparent w-fit p-6">
        <h1 className="mb-3 text-3xl lg:text-5xl ml-1 flex items-center">
          Who we are
        </h1>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.9,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-2">
        {snippets.map((item, index) => {
          const { svg, title, content } = item;
          return (
            <Snippet
              key={index}
              svg={svg}
              content={content}
              title={title}
              id={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Profile;
