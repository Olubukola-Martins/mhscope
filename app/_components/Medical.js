import React from "react";
import { snippets } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Medical = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div
      id="medical"
      ref={ref}
      className="px-[5%] md:px-[10%] pb-[4%] bg-gray-100 overflow-x-hidden">
      <div className="bg-gradient-to-r from-cyan-400 via-blue-950 to-blue-500 bg-clip-text text-transparent w-fit p-6 ">
        <h1 className=" text-3xl lg:text-5xl ml-1 flex ">What we do</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.9,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col gap-y-2 w-full">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Medical Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {services.map((service, index) => (
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

        {/* {snippets.map((item, index) => {
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
        })} */}
      </motion.div>
    </div>
  );
};

export default Medical;

const services = [
  {
    title: "Preventive Healthcare Services",
    points: [
      "Delivery of preventive health solutions meeting international standards",
      "Health screenings and wellness programs",
      "Lifestyle and risk assessment consultations",
      "Chronic disease management and monitoring",
      "Immunization and vaccination programs",
    ],
  },
  {
    title: "Medical and Health Consultation",
    points: [
      "Preventive and curative medical advice",
      "Personalized health risk assessments",
      "Chronic condition counseling (e.g., diabetes, hypertension)",
      "Health education and awareness programs",
    ],
  },
  {
    title: "Medical Products and Equipment Supply",
    points: [
      "Procurement and distribution of:",
      "Pharmaceuticals",
      "Health supplements",
      "Medical consumables and disposables",
      "Diagnostic and laboratory equipment",
      "Medical devices (e.g., monitors, thermometers, BP machines)",
    ],
  },
  {
    title: "Laboratory and Diagnostic Services",
    points: [
      "Supply of test kits (rapid tests, diagnostic panels, etc.)",
      "Laboratory setup consultation and equipment provisioning",
      "Collaboration for diagnostic service delivery",
    ],
  },
  {
    title: "One-Stop Healthcare Clinics",
    points: [
      "Setup and operation of integrated clinics offering:",
      "Preventive and primary care",
      "On-site diagnostics",
      "Pharmacy services",
      "Chronic care and wellness support",
    ],
  },
];
