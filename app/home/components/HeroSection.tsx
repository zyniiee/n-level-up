import React from "react";
import Image from "next/image";
import HeaderImage from "./HeaderImage";
const HeroSection = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="h-svh content-center relative">
        <h1 className="xl:text-[15vw] text-[15vw] hero_text uppercase text-center font-bold">
          Level Up
        </h1>
        <div className="absolute bottom-4 flex flex-col p-2 w-full justify-center items-center ">
          <Image
            className="border rounded-full w-10 h-10 p-2 border-secondary cursor-pointer"
            src="../icons/arrow-down.svg"
            alt="arrow down"
            width={15}
            height={15}
          />
        </div>
      </div>
      <HeaderImage />
    </div>
  );
};

export default HeroSection;
