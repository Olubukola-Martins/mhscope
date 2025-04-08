"use client";
import { Carousel, Drawer, Modal } from "antd";
import React, { useState } from "react";
import { snippets } from "../data";
import Image from "next/image";

const Snippet = ({ svg, title, content }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [openModal, setopenModal] = useState(false);
  const current = snippets.find((item) => item.title === title);
  return (
    <>
      <div
        className="group w-fit p-4 transition duration-900 ease-in-out hover:shadow-2xl  hover:bg-white hover:border-b-2 hover:border-b-blue-900 cursor-pointer flex flex-col gap-y-2 "
        onMouseEnter={() => setAnimationKey((prev) => prev + 1)}
        onClick={() => setopenModal(true)}>
        {svg(animationKey)}
        <p className="font-bold text-black/80 text-lg">{title}</p>
        <div className="">
          <p className=" line-clamp-4 truncate text-wrap max-w-full text-black/70">
            {content}
          </p>
          <span className="text-blue-900/60 text-sm">See more</span>
        </div>
      </div>

      <Drawer
        open={openModal}
        onClose={() => setopenModal(false)}
        size="large"
        placement="left"

        // closeIcon={null}
        // className="h-fit md:w-[80vw]  lg:w-[70vw]"
        >
        {/* <Carousel className="w-full h-14" autoplay={true}>
          {current.images?.map((img, index) => (
            <Image
              src={img}
              alt={img}
              key={index}
              objectFit="cover"
              className=" w-full! object-cover"
              width={70}
              height={30}
            />
          ))}
        </Carousel> */}
        <div >
          <p className="font-bold text-black/80 text-xl mb-2.5">{title}</p>
          <p className="  text-wrap max-w-full text-black/70">{current.full}</p>
        </div>
      </Drawer>
    </>
  );
};

export default Snippet;
