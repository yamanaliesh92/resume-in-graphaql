"use client";

import { gql, useMutation } from "@apollo/client";
import React, { FC, useState } from "react";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}

const Cre = gql`
  mutation crea($title: String!, $university: String!, $year: Int!) {
    createEduction(
      data: { university: $university, title: $title, year: $year }
    )
  }
`;

const EductionForm: FC<IProps> = ({ setOpen }) => {
  const [mutation, { data, loading, error }] = useMutation(Cre);
  const [element, setElement] = useState({
    university: "",
    title: "",
    year: 0,
  });
  const [click, setClick] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutation({
      variables: {
        university: element.university,
        title: element.title,
        year: element.year,
      },

      onCompleted: () => {
        setOpen(3);
      },
    });
  };

  const set = async () => {
    await mutation({
      variables: {
        university: element.university,
        title: element.title,
        year: element.year,
      },
      onCompleted: () => {
        setElement({ title: "", university: "", year: 0 });
        setClick(true);
      },
    });
  };

  console.log("error", error);

  return (
    <div className="w-[500px] h-fit p-2 bg-white">
      <h2
        data-cy="title"
        className="font-bold text-2xl text-center text-[#184191]"
      >
        Education
      </h2>
      <form onSubmit={submit} className="w-full p-2 h-full flex flex-col ">
        {error && <h1 className="text-red-400 text-center">{error.message}</h1>}
        {click && (
          <h1 className="text-gray-400 mt-2 text-center">
            now can add more education
          </h1>
        )}
        <input
          className="p-2 mt-8 rounded-xl border  focus:outline-gray-500  placeholder:text-[15px]  border-gray-500 w-full"
          value={element.title}
          placeholder="Enter your Certificate"
          required
          onChange={(e) =>
            setElement((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <div className="flex items-center w-full justify-between">
          <input
            className="p-2 mt-8 rounded-xl border  focus:outline-gray-500  placeholder:text-[15px]  border-gray-500 w-[66%]"
            value={element.university}
            required
            placeholder="Enter name your university"
            onChange={(e) =>
              setElement((prev) => ({ ...prev, university: e.target.value }))
            }
          />

          <input
            className="p-2 mt-8  focus:outline-gray-500  placeholder:text-[15px] rounded-xl border border-gray-500  w-[22%] "
            value={element.year}
            placeholder="which years"
            required
            type={"number"}
            onChange={(e) =>
              setElement((prev) => ({ ...prev, year: e.target.valueAsNumber }))
            }
          />
        </div>

        <div className="mt-2 w-full flex items-center p-2">
          <h1 className="text-[14px]">
            if you anther degree do you want add to add it click here{" "}
          </h1>
          <h3
            className="ml-3 font-bold cursor-pointer text-red-400"
            onClick={set}
          >
            X
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <button
            data-cy="submit"
            onClick={() => setOpen(1)}
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

export default EductionForm;
