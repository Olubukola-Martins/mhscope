"use client";
import {
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  const isDynamicPage = /^\/[^/]+$/.test(pathname) && pathname !== "/";

  if (isDynamicPage) return null;


  return (
    <div className="w-screen min-h-[35vh] max-h-fit bg-blue-950 px-[5%] md:px-[12%] pb-[4%] text-gray-300 flex flex-col   flex-wrap   ">
      <div className="flex items-center justify-center mx-auto flex-wrap max-[540px]:mb-4">
        {/* image */}
        <Image
          src="/MhscopeWhite.png"
          alt="mhscope white logo"
          objectFit="contain"
          width={155}
          height={27}
          priority
        />
        <h2 className="text-2xl font-bold text-white border-y-4 py-1 ">
          Contact Us
        </h2>
      </div>

      <div className="flex justify-between gap-y-4 gap-x-8 lg:flex-row flex-col ">
        <div className="flex flex-col gap-y-3.5">
          <div className={" flex items-center gap-2.5"}>
            <EnvironmentOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold h-fit" />
            <p className="max-sm:hidden">
              MG Contact Office (Lagos, Nigeria):{" "}
            </p>
            <p>
              44 Femi Shobowale Street, Close to Ikorodu Club,
              <br /> Aga, Ikorodu, Lagos State, Nigeria
            </p>
          </div>

          <div className={" flex items-center gap-2.5"}>
            <EnvironmentOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold -fit" />
            <p className="max-sm:hidden">MG Contact Office (Overseas): </p>
            <p>Canberra, Australia</p>
          </div>

          <div className={" flex items-center gap-2.5  md:ml-4 lg:ml-8 "}>
            <p className="max-[540px]:hidden"> Connect With Us On Socials:</p>
            <div className="flex justify-center items-center w-fit rounded-sm px-2.5 py-1.5 bg-black/30 cursor-pointer">
              {/* facebook */}
              <a className="p-1.5! hover:bg-white/70! rounded-sm">
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
              <a className="p-1.5! hover:bg-white/70! rounded-sm">
                <svg
                  width="29"
                  height="29"
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
              <a className="p-1.5! hover:bg-white/70! rounded-sm">
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
              <a className="p-1.5! hover:bg-white/70! rounded-sm">
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
        </div>

        <div className="flex flex-col gap-y-3">
          <div className={" flex items-center gap-2.5"}>
            <PhoneOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold" />
            <p className="max-sm:hidden">Telephone No: </p>
            <div className="flex flex-col gap-y-3">
              <p>(+234)-809-948-9870</p>
              <p>(+234)-706-848-5760</p>
            </div>
            </div>


          <div className={" flex items-center gap-2.5"}>
            <PhoneOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold" />
            <p className="max-sm:hidden">MG Global Contact Phone No: </p>
            <p>(+61)-405-647-444</p>
          </div>

          <div className={" flex items-center gap-2.5"}>
            <MailOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold" />
            <p>jamiuogunbanwo@gmail.com</p>
          </div>

          <div className={" flex items-center gap-2.5"}>
            <GlobalOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold" />
            <p>www.mhscope.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
