import React, { FC } from "react";
import { ExperienceResponse } from "./home";

interface IProps {
  data: ExperienceResponse;
}

const Experience: FC<IProps> = ({ data }) => {
  return (
    <div className="flex flex-col ml-5">
      <div className="flex items-center mt-2 ml-4 p-2">
        <h1 className="w-[65%] text-gray-500 mr-2">{data.experience}</h1>

        <h1 className="w-[15%] text-red-500 ml-2">{data.year}</h1>
      </div>
    </div>
  );
};
export default Experience;
