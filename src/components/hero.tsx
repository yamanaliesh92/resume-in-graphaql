import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../public/w.jpeg";

export default function Hero() {
  return (
    <div className="w-full relative h-screen items-center flex justify-center">
      <h1 className="t text-red-400 p-4 absolute text-2xl z-30">
        welcome in create Cv
      </h1>
      <Link
        href={"/form"}
        className="w-fit absolute z-30 mt-28 h-fit rounded-full p-4 bg-red-400 text-yellow-100"
      >
        get started
      </Link>
      <Image
        src={img}
        className="w-screen absolute h-screen object-cover bg-no-repeat "
        alt="ping"
        width={100}
        height={100}
      />
    </div>
  );
}
