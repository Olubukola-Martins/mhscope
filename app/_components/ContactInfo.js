"use client";

import { useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";

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
    <div className="space-y-2 text-sm text-gray-700">
      {/* Phone */}
      <div className="flex items-center gap-2">
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

        <a
          href="tel:+61405647444"
          className="  text-blue-950! hover:text-cyan-800! text-sm hover:underline">
          (+61)405-647-444
        </a>
        <button
          onClick={() => handleCopy("+61405647444", "phone")}
          className="text-gray-500 hover:text-blue-600"
          aria-label="Copy phone number">
          {copied === "phone" ? (
            <span className=" text-xs flex items-center gap-x-1">
              Copied to clipboard!
              <CheckOutlined style={{ fontSize: 12 }} />
            </span>
          ) : (
            <CopyOutlined style={{ fontSize: 16 }} />
          )}
        </button>
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
            Copied to clipboard!
            <CheckOutlined style={{ fontSize: 12 }} />
          </span>
        ) : (
            <CopyOutlined style={{ fontSize: 16 }} />
          )}
        </button>
      </div>
    </div>
  );
};
