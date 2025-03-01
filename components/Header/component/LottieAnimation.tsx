"use client";
import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import animationData from "@/public/menu.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const lottieRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(3);

      if (isOpen) {
        lottieRef.current.goToAndPlay(1, true);
        lottieRef.current.playSegments([1, 40], true);
      } else {
        lottieRef.current.goToAndPlay(40, true);
        lottieRef.current.playSegments([40, 1], true);
      }
    }
  }, [isOpen]);

  return (
    <div
      className="flex flex-col p-1 w-8 justify-center items-center border rounded-full border-secondary relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div onClick={onClick} className="cursor-pointer relative z-10">
        <div
          className={`${isHovered ? "invert" : ""} transition-all duration-300`}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
          />
        </div>
      </div>

      {/* White overlay animation */}
      <div
        className={`absolute bottom-0 right-0 rounded-full bg-secondary transition-all duration-300 z-0 ${
          isHovered ? "w-full h-full opacity-100" : "w-0 h-0 opacity-0"
        }`}
      />
    </div>
  );
};

export default LottieAnimation;
