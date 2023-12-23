"use client";

import React from "react";
import Education from "./education";
import Experience from "./experience";

import { getUser } from "./home";

interface IProps {
  data: getUser | undefined;
}
export default function Side({ data }: IProps) {
  return (
    <div className="flex p-2 flex-col  bg-white">
      <div className="p-5 overflow-auto h-[220px]">
        <h1 className="mt-2 rounded-full text-2xl text-white flex items-center  w-fit p-5 h-[40px] bg-gray-800 uppercase">
          About-me{" "}
        </h1>

        <h4 className="mt-4">{data?.getUser.about}</h4>
      </div>

      <div className="p-5 overflow-auto">
        <div className="mt-2 rounded-full text-2xl text-white flex items-center  w-fit p-5 h-[40px] bg-gray-800 uppercase">
          Experience
        </div>
        {data &&
          data?.getUser.experiences.map((item) => <Experience data={item} />)}
      </div>

      <div className="p-5 overflow-auto">
        <div className="mt-2 rounded-full text-2xl text-white flex items-center  w-fit p-5 h-[40px] bg-gray-800 uppercase">
          Education
        </div>
        {data &&
          data?.getUser.eductions.map((education) => (
            <Education dataEducation={education} />
          ))}
      </div>
    </div>
  );
}
