import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Others = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div
      id="others"
      ref={ref}
      className="px-[5%] md:px-[10%] py-[4%] bg-gray-100 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.9,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-y-2 w-full">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Our Other Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {otherServices.map((service, parentIdx) => (
            <div
              key={parentIdx}
              className="bg-white shadow-md rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>
              <ul className="pl-5 text-blue-900 space-y-1 text-sm">
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    className={
                      idx === 0 
                        ? "list-none pl-0"
                        : "list-disc"
                    }>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Others;

const otherServices = [
  {
    title: "Strategic Business Partnerships",
    points: [
      "Long-term partnerships with:",
      "Manufacturers (especially from China)",
      "Distributors and logistics partners",
      "Pharmaceutical and diagnostic product suppliers",
      "Agricultural technology providers and exporters",
      "Joint ventures for setting up healthcare clinics, supply chains, and agro-based facilities",
    ],
  },
  {
    title: "International Health Product Sourcing",
    points: [
      "Sourcing of health and medical products/equipment from:",
      "Europe",
      "USA",
      "Australia",
      "Asia (with priority focus on China)",
    ],
  },
  {
    title: "Retailing Services (Household Consumption)",
    points: [
      "Retail sales of essential household products including:",
      "Hosehold gas supply - Local and interstate gas supply and distribution sites",
      "Health and hygiene products",
      "Packaged foods and beverages",
      "Household cleaning supplies",
      "Over-the-counter medications and wellness items",
      "Setup of retail outlets or distribution points for community access",
      "Integration with e-commerce or delivery platforms for wider reach",
      "Emphasis on affordability, accessibility, and quality",
    ],
  },
];
