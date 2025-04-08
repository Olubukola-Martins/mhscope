// import React from "react";

// const Aside = ({ index }) => {
//   return (
//     <div className="min-h-screen h-auto w-[6.5%] border-r border-white/40 text-3xl font-extrabold pt-[28vh] flex flex-col gap-y-3 absolute top-0 left-0 bg-inherit">
//       {["01", "02", "03", "04"].map((item, i) => (
//         <p
//           key={i}
//           className={`ml-auto mr-3 transition-colors duration-500  ${
//             i === index ? "text-blue-600" : "text-white/40"
//           }`}
//         >
//           {item}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Aside;

import React from "react";

const Aside = ({ index }) => {
  return (
    <div className="min-h-screen h-auto max-lg:hidden w-[6.5%] border-r border-white/40 text-3xl font-extrabold pt-[28vh] flex flex-col gap-y-3 absolute top-0 left-0 bg-inherit">
      {["01", "02", "03", "04"].map((item, i) => (
        <div
          key={i}
          className={`relative  ml-auto pr-3.5 transition-all duration-500 ${
            i === index ? "border-r-4 border-blue-600 z-30" : "border-r-4 border-transparent"
          }`}
        >
          <p
            className={`ml-auto mr-0 transition-colors duration-500 ${
              i === index ? "text-blue-600" : "text-white/40"
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Aside;

