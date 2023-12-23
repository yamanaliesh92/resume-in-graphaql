"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Contact from "./contact";
import CreateCategory from "./createCategory";
import { getUser } from "./home";
import Language from "./Language";
import LanInfo from "./Language";

interface IProps {
  data: getUser | undefined;
}

export default function Info({ data }: IProps) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState();

  useEffect(() => {
    const value = localStorage.getItem("profile") as string;
    console.log("profile", JSON.parse(value));
    setImg(JSON.parse(value));
  }, []);

  return (
    <div className="flex flex-col p-2">
      <div className="F flex items-center justify-center flex-col w-full h-[220px] p-1">
        <div className="w-full mt-2 h-full flex items-center justify-center ">
          <img
            src={img}
            className="w-[170px] mt-2 h-[170px] rounded-full"
            alt="ss"
          />
        </div>
        <h1 className=" mt-2 text-2xl">{data?.getUser.username}yaman</h1>
      </div>
      <div className="p-5 overflow-auto">
        <div className="mt-2 rounded-full text-2xl sm:text-[18px] text-white flex items-center justify-center text-center p-5 h-[40px] bg-gray-800 uppercase ">
          contact me
        </div>
        <Contact data={data} />
      </div>

      <div className="p-5 overflow-auto">
        <div className="mt-2 rounded-full text-2xl text-white flex items-center justify-center text-center p-5 h-[40px] bg-gray-800 uppercase ">
          languages
        </div>
        {data &&
          data?.getUser.languages.map((item) => (
            <Language dataLanguage={item} />
          ))}
      </div>
    </div>
  );
}
