import React from "react";
import { EducationResponse } from "./home";

interface IProps {
  dataEducation: EducationResponse;
}

export default function Education({ dataEducation }: IProps) {
  return (
    <div className="flex flex-col w-full ">
      <div className="w-full my-2 mt-2 ml-4 p-2 flex">
        gradate from{" "}
        <h1 className=" sm:text-[15px] font-bold mx-2">
          {dataEducation.university}
        </h1>{" "}
        in
        <h1 className="font-bold sm:text-[15px]  mx-2">
          {dataEducation.year}
        </h1>{" "}
        with
        <h1 className="font-bold sm:text-[15px]  mx-2">
          {dataEducation.title}
        </h1>
      </div>
    </div>
  );
}
