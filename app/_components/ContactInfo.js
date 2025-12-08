"use client";

import { useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";

  const phoneNumbers = [
  { number: "+61405647444", display: "(+61) 405-647-444", type: "phone-au" },
  { number: "+2348099489870", display: "(+234) 809-948-9870", type: "phone-ng-1" },
  { number: "+2347068485760", display: "(+234) 706-848-5760", type: "phone-ng-2" },
];


export const ContactInfo = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 1500);
    } catch (err) {
      //   console.error('Copy failed:', err);
    }
  };

  return (
    <div className="space-y-2 text-sm text-gray-700 ">
      {/* Phone */}
      <div className="space-y-3">
        {phoneNumbers.map(({ number, display, type }) => (
          <div key={type} className="flex items-center gap-2">
            {/* SVG ICON (kept exactly as provided) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48">
              <path
                fill="#2196f3"
                d="M26.4 33.9s4-2.6 4.8-3s1.7-.6 2.2-.2c.8.5 7.5 4.9 8.1 5.3s.8 1.5.1 2.6c-.8 1.1-4.3 5.5-5.8 5.4c-1.5 0-8.4.4-20.3-11.4C3.6 20.7 4 13.8 4 12.3s4.3-5.1 5.4-5.8c1.1-.8 2.2-.5 2.6.1s4.8 7.3 5.3 8.1c.3.5.2 1.4-.2 2.2s-3 4.8-3 4.8s.7 2.8 5 7.2c4.4 4.3 7.3 5 7.3 5"
              />
              <g fill="#3f51b5">
                <path d="M35 9H25v4h10c1.1 0 2 .9 2 2v10h4V15c0-3.3-2.7-6-6-6" />
                <path d="m28 16l-6.7-5L28 6z" />
              </g>
            </svg>

            {/* PHONE NUMBER TEXT */}
            <a
              href={`tel:${number}`}
              className="text-blue-950 hover:text-cyan-800 text-sm hover:underline">
              {display}
            </a>

            {/* COPY BUTTON */}
            <button
              onClick={() => handleCopy(number, type)}
              className="text-gray-500 hover:text-blue-600"
              aria-label="Copy phone number">
              {copied === type ? (
                <span className="text-xs flex items-center gap-x-1">
                  Copied!
                  <CheckOutlined style={{ fontSize: 12 }} />
                </span>
              ) : (
                <CopyOutlined style={{ fontSize: 16 }} />
              )}
            </button>
          </div>
        ))}
      </div>
      {/* Email */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.84"
          height="16"
          viewBox="0 0 256 193">
          <path
            fill="#4285f4"
            d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
          />
          <path
            fill="#34a853"
            d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
          />
          <path
            fill="#ea4335"
            d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
          />
          <path
            fill="#fbbc04"
            d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
          />
          <path
            fill="#c5221f"
            d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
          />
        </svg>
        <a
          href="mailto:jamiuogunbanwo@gmail.com"
          className="text-blue-950! hover:text-cyan-800! hover:underline text-sm">
          jamiuogunbanwo@gmail.com
        </a>
        <button
          onClick={() => handleCopy("jamiuogunbanwo@gmail.com", "email")}
          className="text-gray-500 hover:text-blue-600"
          aria-label="Copy email address">
          {copied === "email" ? (
            <span className=" text-xs flex items-center gap-x-1">
              Copied!
              <CheckOutlined style={{ fontSize: 12 }} />
            </span>
          ) : (
            <CopyOutlined style={{ fontSize: 16 }} />
          )}
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        {/* facebook */}
        <a className="p-1.5! hover:bg-black/20! rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path
              fill="#1877F2"
              d="M24 12.073C24 5.403 18.627 0 12 0S0 5.403 0 12.073c0 6.016 4.388 10.987 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.017 1.792-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.927-1.953 1.875v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.06 24 18.089 24 12.073z"
            />
          </svg>
        </a>
        {/* instagram */}
        <a className="p-1.5! hover:bg-black/20! rounded-sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                id="instagramGradient"
                cx="33%"
                cy="100%"
                r="100%">
                <stop offset="0%" stopColor="#feda75" />
                <stop offset="25%" stopColor="#fa7e1e" />
                <stop offset="50%" stopColor="#d62976" />
                <stop offset="75%" stopColor="#962fbf" />
                <stop offset="100%" stopColor="#4f5bd5" />
              </radialGradient>
            </defs>
            <path
              fill="url(#instagramGradient)"
              d="M349.33,69.33H162.67C107.32,69.33,64,112.65,64,168v176c0,55.35,43.32,98.67,98.67,98.67h186.67c55.35,0,98.67-43.32,98.67-98.67V168C448,112.65,404.68,69.33,349.33,69.33ZM256,345.33A89.33,89.33,0,1,1,345.33,256,89.39,89.39,0,0,1,256,345.33ZM384,168a21.33,21.33,0,1,1,21.33-21.33A21.33,21.33,0,0,1,384,168Z"
            />
          </svg>
        </a>
        {/* twitter */}
        <a className="p-1.5! hover:bg-black/20! rounded-sm">
          <svg
            width="24"
            height="19"
            viewBox="0 0 1100 1227"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M832 0H1004L622 524l394 703H784L519 791 220 1227H48L457 659 80 0h438l233 402L832 0Zm-71 1112h78L320 116 241 116l520 996Z"
            />
          </svg>
        </a>
        {/* linkedin */}
        <a className="p-1.5! hover:bg-black/20! rounded-sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0077B5"
              d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.1 108 0 83.9 0 54.1 0 24.3 24.1 0 54.1 0c30 0 54.1 24.3 54.1 54.1s-24 53.9-54.36 53.9zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448H158.5V148.9h89v40.8h1.3c12.4-23.4 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
