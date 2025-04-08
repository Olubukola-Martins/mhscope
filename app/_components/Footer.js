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
        <h2 className="text-2xl font-bold text-white border-y-4 py-1 ">Contact Us</h2>
      </div>

      <div className="flex justify-between gap-y-4 gap-x-8 lg:flex-row flex-col ">
      <div className="flex flex-col gap-y-3.5">
          <div className={" flex items-center gap-2.5"}>
            <EnvironmentOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold h-fit"/>
            <p className="max-sm:hidden">Contact Office (Nigeria): </p>
            <p>
              44 Femi Shobowale Street, Close to Ikorodu Club,<br/> Aga,
              Ikorodu, Lagos State, Nigeria
            </p>
          </div>

          <div className={" flex items-center gap-2.5"}>
            <EnvironmentOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold -fit"/>
            <p className="max-sm:hidden">Contact Office (Overseas): </p>
            <p>Canberra, Australia</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3.5">
          <div className={" flex items-center gap-2.5"}>
            <PhoneOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold" />
            <p>(+61)-405-647-444</p>
          </div>

          <div className={" flex items-center gap-2.5"}>
            <MailOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold"/>
            <p>jamiuogunbanwo@gmail.com</p>
          </div>

          <div className={" flex items-center gap-2.5"}>
            <GlobalOutlined className=" text-xl p-2 bg-black/50 rounded-[50%] font-bold"/>
            <p>www.mhscope.com</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
