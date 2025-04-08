"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Snippet = ({ svg, title, content, id }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const router = useRouter();
  

  return (
    <>
      <div
        className="group w-fit p-4 transition duration-900 ease-in-out hover:shadow-2xl  hover:bg-white hover:border-b-2 hover:border-b-blue-900 cursor-pointer flex flex-col gap-y-2 "
        onMouseEnter={() => setAnimationKey((prev) => prev + 1)}
        onClick={() => router.push(`/${id}`)}>
        {svg(animationKey)}
        <p className="font-bold text-black/80 text-lg">{title}</p>
        <div className="">
          <p className=" line-clamp-4 truncate text-wrap max-w-full text-black/70">
            {content}
          </p>
          <span className="text-blue-900/60 text-sm">See more</span>
        </div>
      </div>

    </>
  );
};

export default Snippet;
