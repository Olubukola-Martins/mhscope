import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Agriculture = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div
      id="agriculture"
      ref={ref}
      className="px-[5%] md:px-[10%] pb-[4%] bg-gray-100 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.9,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-y-2 w-full">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Agricultural Production
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {agriculturalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>
              <ul className="list-disc pl-5 text-blue-900 space-y-1 text-sm">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Agriculture;

const agriculturalServices = [
  {
    title: "Food Products Processing and Distribution",
    points: [
      "Health-oriented food product sourcing and processing",
      "Supply chain and distribution for healthy/functional foods",
      "Ancillary support in food safety and quality control",
    ],
  },
  {
    title: "Agricultural Production Services (Crop Production)",
    points: [
      "Commercial-scale crop farming (e.g., grains, vegetables, legumes)",
      "Implementation of modern agricultural technologies and techniques",
      "Sustainable and organic crop production practices",
      "Processing and packaging of agricultural produce for distribution",
      "Integration of agriculture with food security and nutrition initiatives",
    ],
  },
];
