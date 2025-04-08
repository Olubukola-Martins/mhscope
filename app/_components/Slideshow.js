"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

export default function Slideshow({ index, images }) {
  const heroText = useMemo(() => {
    const i = index % images.length;
    return [
      {
        title: "Unlocking Africa’s Potential Through Innovation",
        content:
          "From consulting to capacity building, we are committed to reshaping the African business landscape by equipping enterprises and individuals with world-class tools and expertise.",
      },
      {
        title: "Empowering Businesses with Smart Solutions",
        content:
          "At MHScope Global, we drive innovation by delivering bespoke digital, business, and educational solutions that empower organizations to grow, adapt, and lead in today’s fast-changing world.",
      },
      {
        title: "Your Trusted Partner in Business Transformation",
        content:
          "We collaborate with private and public sector organizations to implement sustainable strategies that improve productivity, performance, and profitability.",
      },
      {
        title: "Where Strategy Meets Innovation",
        content:
          "MHScope Global merges deep industry knowledge with cutting-edge technologies to design and execute solutions that drive measurable results and long-term impact.",
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
