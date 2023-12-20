"use client";
import { gql, useMutation } from "@apollo/client";
import { GrGallery } from "react-icons/gr";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { setCookie } from "../../utils/cookie";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}

interface IPayloadCreateUser {
  email: string;
  password: string;
  username: string;
  phoneNumber: number;
  location: string;
  about: string;
}

const init = {
  email: "",
  about: "",
  username: "",
  password: "",
  location: "",
  phoneNumber: 0,
};

const Create = gql`
  mutation createSS(
    $username: String!
    $phoneNumber: Int!
    $about: String!
    $location: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      createUserInput: {
        phoneNumber: $phoneNumber
        location: $location
        about: $about
        username: $username
        email: $email
        password: $password
      }
    )
  }
`;
const CreateUser: FC<IProps> = ({ setOpen }) => {
  const [mutation] = useMutation(Create);
  const [element, setElement] = useState(init);
  const ref = useRef<HTMLInputElement>();
  const [file, setFile] = useState<File | null>(null);

  const ocn = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return "ss";
    }
    // Create file reader object\

    const data = new FileReader();
    data.addEventListener("load", () => {
      setFile(data.result as any);

      localStorage.setItem("profile", JSON.stringify(data.result));
    });
    data.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // localStorage.setItem("img", JSON.stringify({ file }));
    const data = await mutation({
      variables: {
        email: element.email,
        password: element.password,
        username: element.username,
        location: element.location,
        phoneNumber: element.phoneNumber,
        about: element.about,
      },
      onCompleted: () => {
        setOpen(2);
      },
    });

    setCookie("MyToken", data.data.createUser);
  };

  return (
    <div className="w-[500px] h-[600px] p-2 bg-white">
      <h2
        data-cy="title"
        className="font-bold text-2xl text-center text-[#184191]"
      >
        Info
      </h2>
      <form onSubmit={submit} className="w-full p-2 h-full flex flex-col ">
        <input
          ref={ref as any}
          className="p-2 mt-8 text-[15px]  rounded-xl  focus:outline-none border-b rounded-b-none border-b-gray-400 w-full sm:w-full"
          value={element.email}
          type={"email"}
          placeholder="enter your email"
          required
          onChange={(e) =>
            setElement((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <div className="grid grid-cols-2 gap-2">
          <input
            className="p-2 mt-8 rounded-xl text-[15px]  rounded-b-none focus:outline-none border-b-2 border-b-gray-400 w-45% sm:w-full"
            value={element.username}
            type={"text"}
            placeholder="enter your full name"
            required
            onChange={(e) =>
              setElement((prev) => ({ ...prev, username: e.target.value }))
            }
          />

          <input
            className="p-2 mt-8 text-[15px]  rounded-xl focus:outline-none border-b-2 rounded-b-none border-b-gray-400 w-45% sm:w-full"
            value={element.password}
            placeholder="enter your password"
            type={"password"}
            required
            onChange={(e) =>
              setElement((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <input
            className="p-2 mt-8 text-[15px] rounded-xl rounded-b-none focus:outline-none border-b-2 border-b-gray-400 w-45% sm:w-full"
            value={element.location}
            type={"text"}
            placeholder="enter your location"
            required
            onChange={(e) =>
              setElement((prev) => ({ ...prev, location: e.target.value }))
            }
          />
          <input
            className="p-2 mt-8 text-[15px]  rounded-xl rounded-b-none focus:outline-none border-b-2 border-b-gray-400 w-45% sm:w-full"
            value={element.phoneNumber}
            type={"number"}
            required
            min={1}
            placeholder="enter your phone number"
            onChange={(e) =>
              setElement((prev) => ({
                ...prev,
                phoneNumber: e.target.valueAsNumber,
              }))
            }
          />
        </div>
        <div style={{ display: "none" }}>
          <input type={"file"} onChange={ocn} ref={ref as any} />
        </div>

        <textarea
          className="p-2 mt-8 text-[15px]  rounded-xl rounded-b-none focus:outline-none border-b-2 border-b-gray-400 w-45% sm:w-full"
          value={element.about}
          rows={3}
          placeholder={"enter about yourself"}
          data-cy="emailInput"
          onChange={(e) =>
            setElement((prev) => ({ ...prev, about: e.target.value }))
          }
        />

        <GrGallery
          className="my-2"
          cursor={"pointer"}
          size={20}
          onClick={() => ref.current?.click()}
        />

        <button
          data-cy="submit"
          className="mt-4 border-none rounded-xl self-end bg-[#184191] text-white p-2   w-[70px] "
        >
          next
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
// important and completed is boolean and name=important.tostring() type="date e.target.chckerd/date:E.tragetr.vaklue
