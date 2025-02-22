"use client";
import React, { useRef, useEffect } from "react";
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
    <div className="flex flex-col p-1 w-8 justify-center items-center border rounded-full border-secondary">
      <div onClick={onClick} className="cursor-pointer">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
        />
      </div>
    </div>
  );
};

export default LottieAnimation;
