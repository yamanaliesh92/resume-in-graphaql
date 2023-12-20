import React, { FC } from "react";
import { LanguageResponse } from "./home";

interface IProps {
  dataLanguage: LanguageResponse;
}

const Language = ({ dataLanguage }: IProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mt-2 ml-4 p-2">
        <h1 className="font-bold mr-2"> .{dataLanguage.language}</h1>
        <h1 className="font-bold">({dataLanguage.level})</h1>
      </div>
    </div>
  );
};
export default Language;
