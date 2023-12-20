import React from "react";
import { EducationResponse } from "./home";

interface IProps {
  dataEducation: EducationResponse;
}

export default function Education({ dataEducation }: IProps) {
  return (
    <div className="flex flex-col ">
      <div className="w-full my-2 mt-2 ml-4 p-2 flex">
        gradate from{" "}
        <h1 className="text font-bold mx-2">{dataEducation.university}</h1> in{" "}
        <h1 className="text font-bold mx-2">{dataEducation.year}</h1> with{" "}
        <h1 className="text font-bold mx-2">{dataEducation.title}</h1>
      </div>
    </div>
  );
}
