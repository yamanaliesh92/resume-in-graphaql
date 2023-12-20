import React from "react";
import { getUser } from "./home";
import { MdPhone } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import Link from "next/link";

interface IProps {
  data: getUser | undefined;
}

export default function Contact({ data }: IProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mt-2 ml-4 p-2">
        <MdPhone size={20} />
        <h1 className="m ml-4">+963 {data?.getUser.phoneNumber}</h1>
      </div>

      <div className="flex items-center mt-2 ml-4 p-2">
        <MdEmail size={20} />
        <h1 className="m ml-4">{data?.getUser.email}</h1>
      </div>

      <div className="flex items-center mt-2 ml-4 p-2">
        <TiLocation size={20} />
        <h1 className="m ml-4">{data?.getUser.location}</h1>
      </div>

      <div className="flex items-center mt-2 ml-4 p-2">
        <AiFillLinkedin size={20} />
        <h1 className="m ml-4">{data?.getUser.phoneNumber}</h1>
      </div>
      <div className="flex items-center mt-2 ml-4 p-2">
        <AiFillLinkedin size={20} />
        {/* <h1 className="m ml-4">{data?.getUser.phoneNumber}</h1> */}
        <Link
          href="https://google.com"
          // rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Google{" "}
        </Link>
      </div>
    </div>
  );
}
