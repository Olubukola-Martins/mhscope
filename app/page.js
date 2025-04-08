"use client";
import Slideshow from "./_components/Slideshow";
import { useState, useEffect } from "react";
import Aside from "./_components/Aside";
import Profile from "./_components/Profile";
import FloatContact from "./_components/FloatContact";
import Medical from "./_components/Medical";
import Agriculture from "./_components/Agriculture";
import Others from "./_components/Others";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Aside index={index} />
      <main>
        <Slideshow index={index} images={images} />
        <Profile />
        <Medical />
        <Agriculture />
        <Others/>
      </main>
      <FloatContact />
    </>
  );
}
