"use client";

import { gql, useMutation } from "@apollo/client";

import { useRouter } from "next/navigation";

import React, { FC, useState } from "react";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}

const createExperience = gql`
  mutation experience($experience: String!, $year: Int!) {
    createExperience(data: { experience: $experience, year: $year })
  }
`;

const ExperienceForm: FC<IProps> = ({ setOpen }) => {
  const [mutation, { data, loading, error }] = useMutation(createExperience);
  const [element, setElement] = useState({ experience: "", year: 0 });
  const [click, setClick] = useState(false);
  const navigate = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    await mutation({
      variables: {
        experience: element.experience,
        year: element.year,
      },
      onCompleted: () => {
        navigate.push("/home");
      },
    });
  };

  const set = async () => {
    await mutation({
      variables: {
        experience: element.experience,
        year: element.year,
      },
      onCompleted: () => {
        setElement({ experience: "", year: 0 });

        setClick(true);
      },
    });
  };

  console.log("error", error);

  return (
    <div className="w-[500px] h-fit p-2 bg-white">
      <h2 className="font-bold text-2xl text-center text-[#184191]">
        Experience
      </h2>
      <form onSubmit={submit} className="w-full p-2 h-full flex flex-col ">
        {error && <h1>er{error.message}</h1>}
        {click && <h1>now can add more Experience</h1>}

        <div className="flex flex-col w-full">
          <input
            className="p-2 mt-8 mr-3 rounded-xl border focus:outline-gray-500  placeholder:text-[15px] border-gray-500 w-[86%]"
            value={element.experience}
            placeholder="Enter your experience in your filed"
            required
            onChange={(e) =>
              setElement((prev) => ({ ...prev, experience: e.target.value }))
            }
          />
          <div className="flex items-center">
            <input
              className="p-2 mt-4 mr-3 rounded-xl border  focus:outline-gray-500  placeholder:text-[15px]  border-gray-500 w-[46%]"
              value={element.year}
              type="number"
              placeholder="How many years "
              required
              onChange={(e) =>
                setElement((prev) => ({
                  ...prev,
                  year: e.target.valueAsNumber,
                }))
              }
            />
            <h1 className="ml-1 mt-4">Years</h1>
          </div>
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

export default ExperienceForm;
