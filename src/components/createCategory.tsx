"use client";

import { HiPhotograph } from "react-icons/hi";
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useRef,
  useState,
} from "react";

interface IProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
}
const CreateCategory: FC<IProps> = ({ closeModal }) => {
  const [element, setElement] = useState<string>("");

  const [openNextForm, setOpenNextForm] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const close = () => {
    closeModal(false);
  };

  return (
    <div className="flex items-center bg-yellow-200 justify-center w-[400px] h-[400px] rounded-md shadow-lg  h-full/">
      <form className="w-full h-full flex flex-col p-4 items-center">
        <div className="relative mt-4">
          <input
            id="username"
            className="peer w-[80%] p-4 transition-colors  outline-none  border-b  border-b-blue-500 focus:border-b-2 focus:border-purple-900"
          />
          <label
            htmlFor="username"
            className="d absolute text-[15px] font-bold left-0 bottom-[2px] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all"
          >
            username
          </label>
        </div>

        <div className="relative mt-4">
          <input
            id="username"
            className="peer w-[70%] p-4 transition-colors  outline-none  border-b  border-b-blue-500 focus:border-b-2 focus:border-purple-900"
          />
          <label
            htmlFor="username"
            className="d absolute text-[15px] font-bold left-0 bottom-[2px] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all"
          >
            username
          </label>
        </div>
        <div className="relative mt-4">
          <input
            id="username"
            className="peer w-[70%] p-4 transition-colors  outline-none  border-b  border-b-blue-500 focus:border-b-2 focus:border-purple-900"
          />
          <label
            htmlFor="username"
            className="d absolute text-[15px] font-bold left-0 bottom-[2px] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all"
          >
            username
          </label>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
