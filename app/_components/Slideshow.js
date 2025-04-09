"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

export default function Slideshow({ index, images }) {
  const heroText = useMemo(() => {
    const i = index % images.length;
    return [
      {
        title: "Where Strategy Meets Innovation",
        content:
          "MG delivers advanced healthcare and food solutions through strategic, integrated models.",
      },
      {
        title: "Unlocking Africa’s Potential Through Innovation",
        content:
          "We provide innovative, accessible health care to transform lives across Africa.",
      },
      {
        title: "Your Trusted Partner in Agricultural Expansion",
        content:
          "MG drives sustainable food processing and supply for global impact.",
      },
      {
        title: "Smart Solutions to Health and Nutrition Concerns",
        content:
          "We connect preventive care with nutrition to support healthier communities.",
      },
    ][i];
  }, [index]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-blue-950/80 -z-20">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        {images.map((image, i) =>
          i === index ? (
            <motion.div
              key={image}
              className=" absolute w-full h-full -z-10"
              initial={{ opacity: 0, scale: 1.05, filter: "blur(2px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(1.5px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}>
              <img
                src={image}
                className="w-full h-full object-cover"
                alt="Background slide"
              />
              <div className="absolute  inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-20" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      {/* Text Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroText.title}
          className="h-full w-full absolute gap-y-6 text-white font-bold px-[7.5%] lg:px-[10.5%] flex flex-col justify-center items-center z-30!"
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          {/* <div
        className="h-full w-full gap-y-6 text-white font-bold px-[7.5%] lg:px-[10.5%] flex flex-col justify-center items-center transition duration-700 ease-in-out z-30!"
        key={heroText.title}> */}
          <h1 className="text-3xl xl:text-4xl ml-0 mr-auto lg:w-[55%] w-[72vw]">
            {heroText.title}
          </h1>
          <p className="ml-0 mr-auto text-lg xl:text-xl font-semibold lg:w-[55%] w-[72vw] ">
            {heroText.content}
          </p>
          {/* <button className="mr-auto cursor-pointer z-[70] bg-white/80 px-6 py-3 transition duration-700 ease-in-out rounded-sm hover:bg-black/15! border border-blue-600 text-blue-600 font-mono hover:text-white">
            Get Started
          </button> */}
          {/* </div> */}
          {/* <button className="mr-auto cursor-pointer z-[100]! bg-white/80 px-6 py-3 transition duration-700 ease-in-out rounded-sm hover:bg-black/15 border border-blue-600 text-blue-600 font-mono ">
        Get Started
      </button> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
