"use client";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import React, { useState } from "react";
import { ContactInfo } from "./ContactInfo";

const FloatContact = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Popover
        content={<ContactInfo />}
        title={<p className=" border-b">Contact Us</p>}
        placement="topLeft"
        className="fixed right-[7vw] bottom-[12vh] z-50 shadow-2xl shadow-blue-950 bg-blue-200"
        open={visible}
        onOpenChange={setVisible}>
        <div className="flex justify-center items-center drop-shadow-[2px_2px_2px_#ffffff] bg-blue-900 rounded-full h-14 w-14 text-2xl text-white cursor-pointer">
          <CustomerServiceOutlined />
        </div>
      </Popover>
      <Button
        id="contact-pop-trigger"
        style={{ display: "none" }}
        onClick={() => setVisible(true)}>
        Trigger
      </Button>
    </>
  );
};

export default FloatContact;
