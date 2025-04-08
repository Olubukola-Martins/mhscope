"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dropdown } from "antd";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDynamicPage = /^\/[^/]+$/.test(pathname) && pathname !== "/";

  if (isDynamicPage) return null;

  const items = [
    {
      key: "1",
      label: (
        <p
          onClick={() => {
            const section = document.getElementById("medical");
            section?.scrollIntoView({ behavior: "smooth" });
          }}>
          Medical
        </p>
      ),
      extra: "⌘M",
    },
    {
      key: "2",
      label: (
        <p
          onClick={() => {
            const section = document.getElementById("agriculture");
            section?.scrollIntoView({ behavior: "smooth", block: "end" });
          }}>
          Agriculture
        </p>
      ),
      extra: "⌘A",
    },
    {
      key: "3",
      label: (
        <p
          onClick={() => {
            const section = document.getElementById("others");
            section?.scrollIntoView({ behavior: "smooth", block: "end" });
          }}>
          Others
        </p>
      ),
      extra: "⌘O",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-60 px-[9.5%] pt-5 pb-3 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-gray-100 shadow-md" : "bg-inherit"
      }`}>
      <Image
        src="/MhscopeTransparent.png"
        alt="mhscope logo"
        objectFit="contain"
        width={70}
        height={30}
        priority
      />

      <div
        className={`flex items-center gap-x-6 text-lg lg:text-xl font-bold font-mono transition-colors duration-300 max-lg:hidden ${
          isScrolled ? "text-black" : "text-white"
        }`}>
        <p
          onClick={() => {
            const section = document.getElementById("company-profile");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer drop-shadow-[0_0_3px_#162456] hover:text-blue-500 transition-all">
          Company Profile
        </p>
        <Dropdown
          menu={{ items }}
          className="cursor-pointer drop-shadow-[0_0_3px_#162456] hover:text-blue-500">
          Services
        </Dropdown>
        <p
          className="cursor-pointer drop-shadow-[0_0_3px_#162456] hover:text-blue-500"
          onClick={() => {
            const trigger = document.getElementById("contact-pop-trigger");
            if (trigger) {
              trigger.click();
            }
          }}>
          Contact Us
        </p>
      </div>
    </div>
  );
};

export default Header;
