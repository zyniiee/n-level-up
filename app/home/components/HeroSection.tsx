import React from "react";
import styles from "../styles/home.module.css";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="h-svh content-center relative">
      <h1 className={`${styles.hero_text} uppercase text-center`}>Level Up</h1>
      <div className="absolute bottom-4  flex flex-col p-1 w-full justify-center items-center ">
        <Image
          className="border rounded-full w-10 h-10 p-2 border-secondary cursor-pointer"
          src="../icons/arrow-down.svg"
          alt="arrow down"
          width={15}
          height={15}
        />
      </div>
    </section>
  );
};

export default HeroSection;
