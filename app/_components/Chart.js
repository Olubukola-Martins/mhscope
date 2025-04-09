
'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Image } from "antd";

const Chart = ({visible,setVisible}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
console.log("viis",visible)
  return (
    <div className="border-y border-blue-800 bg-gray-100 ">
      <div className="   overflow-x-hidden  ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.9,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" w-full h-[65vh] flex items-center justify-center ">
          {/* <img
          src={"/mhOffice.jpg"}
          className="w-full h-full object-cover"
          alt="office image"
        /> */}
          <div className="w-4/5  h-[55vh]! flex justify-center items-center">
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}>
              <Image
                src="/mhscopeChart.jpg"
                alt="chart"
                className="w-full h-full object-cover rounded-md shadow-2xl shadow-blue-800"
                height="55vh"
              />
            </Image.PreviewGroup>{" "}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chart;
