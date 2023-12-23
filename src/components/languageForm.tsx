"use client";

import { gql, useMutation } from "@apollo/client";

import React, { FC, useState } from "react";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}

const createLanguage = gql`
  mutation language($language: String!, $level: String!) {
    createLanguage(data: { language: $language, level: $level })
  }
`;

const LanguageForm: FC<IProps> = ({ setOpen }) => {
  const [mutation, { loading, error }] = useMutation(createLanguage);
  const [element, setElement] = useState({ language: "", level: "good" });
  const [click, setClick] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ele", element);
    await mutation({
      variables: {
        language: element.language,
        level: element.level,
      },

      onCompleted: () => {
        setOpen(4);
      },
    });
  };

  const set = async () => {
    await mutation({
      variables: {
        language: element.language,
        level: element.level,
      },
      onCompleted: () => {
        setElement({ level: "", language: "" });
        setClick(true);
      },
    });
  };

  console.log("error", error);

  return (
    <div className="w-[300px] sm:w-[500px] h-fit p-2 bg-white">
      <h2
        data-cy="title"
        className="font-bold text-2xl text-center text-[#184191]"
      >
        Language
      </h2>
      <form onSubmit={submit} className="w-full p-2 h-full flex flex-col ">
        {error && <h1>er{error.message}</h1>}
        {loading && <h1>loading...</h1>}
        {click && <h1>now can add more education</h1>}

        <div className="flex items-center  w-full justify-between">
          <input
            className="p-2 mt-8 mr-3 rounded-xl border  focus:outline-gray-500  placeholder:text-[15px]  border-gray-500 w-[66%]"
            value={element.language}
            data-cy="emailInput"
            required
            onChange={(e) =>
              setElement((prev) => ({ ...prev, language: e.target.value }))
            }
          />

          <select
            value={element.level}
            className="p-2 mt-8 rounded-xl border  focus:outline-gray-500  placeholder:text-[15px]  border-gray-500 w-[36%]"
            onChange={(e) =>
              setElement((prev) => ({ ...prev, level: e.target.value }))
            }
          >
            <option>good</option>
            <option>motherTongue</option>
            <option>very good</option>
            <option>normal</option>
          </select>
        </div>

        <div className="mt-2 w-full flex items-center p-2">
          <h1 className="text-[14px]">
            if you anther degree do you want add to add it click here{" "}
          </h1>
          <h3 className="ml-3" onClick={set}>
            X
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <button
            data-cy="submit"
            onClick={() => setOpen(2)}
            className="mt-4  border-none rounded-xl bg-[#184191] text-white p-2 "
          >
            previous
          </button>
          <button
            data-cy="submit"
            className="mt-4  border-none rounded-xl bg-[#184191] text-white p-2 "
          >
            next
          </button>
        </div>
      </form>
    </div>
  );
};

export default LanguageForm;
