"use client";

import React, { useEffect } from "react";
import { snippets } from "../data";
import { useParams, useRouter } from "next/navigation";
import { Spin } from "antd";
import Image from "next/image";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Details = () => {
  const { id } = useParams();
  const router = useRouter();

  const currentIndex = Number(id);
  const current = snippets[currentIndex];

  useEffect(() => {
    if (!current || currentIndex < 0 || currentIndex >= snippets.length) {
      router.push("/");
    }
  }, [current, currentIndex, router]);

  if (!current || currentIndex < 0 || currentIndex >= snippets.length) {
    return (
      <div className="w-screen h-screen items-center justify-center ">
        <Spin size="large" />
      </div>
    );
  }
  const paragraphs = current.full.split(/\.\s+/);
  const midpoint = Math.ceil(paragraphs.length / 2);
  const firstColumn = paragraphs.slice(0, midpoint);
  const secondColumn = paragraphs.slice(midpoint);
  return (
    <div className="bg-gray-100 min-h-screen w-screen px-[5%] md:px-[10%] py-[2.5%]">
      <div className="flex items-center gap-x-[5%] mb-5.5 w-full">
        <ArrowLeftOutlined
          className=" font-extrabold text-xl text-black hover:text-blue-600 hover:cursor-pointer"
          onClick={() => router.back()}
        />
        <p className="font-bold text-black/80 text-2xl  ">{current.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column: Image + Text */}
        <div>
          <div className="bg-gray-500">
            <Image
              src={snippets[0].images[+id]}
              alt="Magazine visual"
              width={250}
              height={200}
              className="object-cover h-[200px]  w-auto mx-auto mb-4"
            />
          </div>

          {firstColumn.map((text, index) => (
            <p key={index} className="mb-4 text-blue-700 leading-relaxed">
              {text.trim() + "."}
            </p>
          ))}
        </div>

        {/* Second Column */}
        <div>
          {secondColumn.map((text, index) => (
            <p key={index} className="mb-4 text-blue-700 leading-relaxed">
              {text.trim() }
            </p>
          ))}
        </div>
      </div>
      {/* <div className="columns-1 md:columns-2 gap-8 text-blue-900 text-base leading-relaxed">
        {paragraphs.map((sentence, idx) => (
          <p key={idx} className="mb-4 break-inside-avoid">
            {sentence.trim() + "."}
          </p>
        ))}
      </div> */}
      {/* <p className="text-wrap max-w-full text-black/70">{current.full}</p> */}
    </div>
  );
};

export default Details;
