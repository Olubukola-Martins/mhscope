"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dropdown } from "antd";
import { usePathname } from "next/navigation";

const Header = ({ setVisibleChart }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animKey, setanimKey] = useState(1);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkInitialScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      }
    };

    const interval = setInterval(() => {
      setTyping(false);
      setTimeout(() => setTyping(true), 2000);
    }, 6000);

    window.addEventListener("scroll", handleScroll);
    checkInitialScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
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
            setIsMenuOpen(false);
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
            setIsMenuOpen(false);
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
            setIsMenuOpen(false);
          }}>
          Others
        </p>
      ),
      extra: "⌘O",
    },
  ];

  const profileItems = [
    {
      key: "1",
      label: (
        <p
          onClick={() => {
            const section = document.getElementById("company-profile");
            section?.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
          }}>
          Who We Are
        </p>
      ),
      extra: "⌘W",
    },
    {
      key: "2",
      label: (
        <p
          onClick={() => {
            setVisibleChart(true);
            setIsMenuOpen(false);
          }}>
          Company's Dashboard
        </p>
      ),
      extra: "⌘C",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-60 px-[9.5%] pt-5 pb-3 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-gray-100 shadow-md" : "bg-inherit"
      }`}>
      <div className="flex items-baseline gap-x-5">
        <Image
          src="/MhscopeTransparent.png"
          alt="mhscope logo"
          objectFit="contain"
          width={70}
          height={30}
          priority
        />

        <div className="typing-container">
          <p
            className={`hidden md:inline-block overflow-hidden whitespace-nowrap text-lg border-r pr-2 
    ${isScrolled ? "text-black border-black" : "text-white border-white"} 
    font-[Cursive] typing-animation`}>
            ...Wellness Starts Here...
          </p>
        </div>
      </div>

      <div
        className={`flex items-center gap-x-6 text-lg lg:text-xl font-bold font-mono transition-colors duration-300 max-lg:hidden ${
          isScrolled ? "text-black" : "text-white"
        }`}>
        <Dropdown
          menu={{ items: profileItems }}
          className="cursor-pointer drop-shadow-[0_0_3px_#162456] hover:text-blue-500">
          Company Profile
        </Dropdown>
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

      <div className="lg:hidden">
        {isMenuOpen ? (
          <svg
            key={animKey}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 28 28"
            onClick={() => {
              setIsMenuOpen(false);
              setanimKey((prev) => prev + 1);
            }}
            className={` cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            }`}>
            <g
              fill="none"
              stroke={isScrolled ? "#000" : "#fff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3">
              <path d="M5 12H19">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  values="M5 12H19;M12 12H12"
                />
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.4s"
                  to="0"
                />
              </path>
              <path d="M5 5L19 5M5 19L19 19" opacity="0">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.2s"
                  dur="0.4s"
                  values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"
                />
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.2s"
                  to="1"
                />
              </path>
            </g>
          </svg>
        ) : (
          <svg
            key={animKey}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 28 28"
            onClick={() => {
              setIsMenuOpen(true);
              setanimKey((prev) => prev + 1);
            }}
            className={` cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            }`}>
            <g
              fill="none"
              stroke={isScrolled ? "#000" : "#fff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3">
              <path
                strokeDasharray="10"
                strokeDashoffset="10"
                d="M21 9l-3 3l3 3">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="10;0"
                />
              </path>
              <path strokeDasharray="16" strokeDashoffset="16" d="M19 5h-14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.2s"
                  values="16;0"
                />
              </path>
              <path strokeDasharray="10" strokeDashoffset="10" d="M14 12h-9">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.2s"
                  values="10;0"
                />
              </path>
              <path strokeDasharray="16" strokeDashoffset="16" d="M19 19h-14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="16;0"
                />
              </path>
            </g>
          </svg>
        )}

        {isMenuOpen && (
          <div className="absolute top-full right-0 w-[50%] h-[90vh] transition duration-300 ease-in-out  bg-blue-900/95 shadow-2xl shadow-black">
            <div className="flex flex-col items-start p-4 text-gray-200 font-semibold">
              <Dropdown
                menu={{ items: profileItems }}
                className="cursor-pointer py-2 w-full">
                ~ Company Profile
              </Dropdown>

              <Dropdown menu={{ items }} className="cursor-pointer py-2 w-full">
                ~ Services
              </Dropdown>
              <p
                className="cursor-pointer py-2"
                onClick={() => {
                  const trigger = document.getElementById(
                    "contact-pop-trigger"
                  );
                  if (trigger) {
                    trigger.click();
                  }
                  setIsMenuOpen(false);
                }}>
                ~ Contact Us
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
