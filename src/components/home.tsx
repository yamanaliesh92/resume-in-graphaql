"use client";
import { gql, useQuery } from "@apollo/client";
import React, { useRef, useState } from "react";
import Info from "./info";
import { useReactToPrint } from "react-to-print";
import Side from "./side";

const Get = gql`
  query {
    getUser {
      email
      location
      phoneNumber
      username
      about
      experiences {
        experience
        year
      }

      languages {
        language
        level
      }
      eductions {
        title
        year
        university
      }
    }
  }
`;

export interface EducationResponse {
  title: string;
  year: number;
  university: string;
}

export interface LanguageResponse {
  language: string;
  level: string;
}

export interface ExperienceResponse {
  experience: string;
  year: number;
}
interface user {
  email: string;
  username: string;
  phoneNumber: string;
  about: string;
  location: string;
  linkedIn: string;
  eductions: EducationResponse[];
  languages: LanguageResponse[];
  experiences: ExperienceResponse[];
}

export interface getUser {
  getUser: user;
}

const HomeComponent = () => {
  const { data, loading } = useQuery<getUser>(Get);
  const pdfRef = useRef<HTMLDivElement>(null);

  const print = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "cv",
  });

  return (
    <>
      {loading && <h1> loading.... </h1>}
      <button
        className="b w-fit h-fit ml-10 rounded-full p-3 my-2 bg-blue-600 text-white cursor-pointer "
        onClick={print}
      >
        Downland as pdf
      </button>
      <div
        ref={pdfRef}
        className="flex w-full flex-col sm:flex-row sm:items-center p-4"
      >
        <div className="w-full sm:w-[250px]   h-fit p-2">
          <Info data={data} />
        </div>

        <div className="w-full sm:w-[78%]  h-fit p-2 ">
          <Side data={data} />
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
