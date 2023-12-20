"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import CreateCategory from "./createCategory";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const change = () => {
    console.log(":DDDDDDDDDDDDDDDDDD");
    setOpen(true);
  };

  return (
    <header className="w-full h-[70px] sticky z-20">
      <nav
        className="max-w-[1440px] h-[50px] overflow-hidden 
          w-full  mx-auto flex justify-between items-center sm:px-16 px-6 py-4 "
      >
        <div className=" w-full sm:w-fit flex  justify-between items-center">
          <Link href="/" className="flex justify-center items-end">
            {/* <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain dark:text-white"
            /> */}
            logo
          </Link>
          <div onClick={change}>clock</div>
        </div>
        <div className="sm:flex items-center gap-4">
          <Link href={"/sign"}>sign</Link>

          <div onClick={change}>create</div>
        </div>
      </nav>
      {open && (
        <div className="z-40 relative flex items-center justify-center ">
          <CreateCategory closeModal={setOpen} />
        </div>
      )}
    </header>
  );
};

export default NavBar;
