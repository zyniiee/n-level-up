"use client";
import React from "react";
import Image from "next/image";
import HeaderImage from "./HeaderImage";

const HeroSection = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("AboutSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden relative z-10">
      <div className="h-svh content-center relative ">
        <h1 className="hero_text text-hero-heading uppercase text-center font-bold">
          Level Up
        </h1>
      </div>
      <div className="absolute bottom-4 flex flex-col p-2 w-full justify-center items-center z-20">
        <div className="scroll-down-container">
          <button
            onClick={scrollToAbout}
            className="arrow-container bg-transparent border-0 cursor-pointer"
          >
            <Image
              className="arrow arrow-1"
              src="../icons/arrow-down.svg"
              alt="scroll down"
              width={10}
              height={10}
            />
            <Image
              className="arrow arrow-2"
              src="../icons/arrow-down.svg"
              alt="scroll down"
              width={10}
              height={10}
            />
          </button>
        </div>
      </div>
      <HeaderImage />

      <style jsx>{`
        .scroll-down-container {
          position: relative;
          width: 40px;
          height: 40px;
          border: 1px solid var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .arrow-container {
          position: relative;
          height: 30px;
          width: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
      `}</style>

      <style jsx global>{`
        .arrow {
          position: absolute;
          opacity: 0;
          animation: moveDown 2s ease-in-out infinite;
        }

        .arrow-1 {
          animation-delay: 0s;
        }

        .arrow-2 {
          animation-delay: 1s;
        }

        @keyframes moveDown {
          0% {
            opacity: 0;
            transform: translateY(-25px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(25px);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
