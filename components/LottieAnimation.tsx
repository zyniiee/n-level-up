"use client";

import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/menu.json";

const LottieAnimation = () => {
  const lottieRef = useRef<any>(null);
  const [isPlayingForward, setIsPlayingForward] = useState(true);
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2); // Adjust speed
    }
  }, []); // Run once after the component mounts

  const handleClick = () => {
    if (lottieRef.current) {
      if (isPlayingForward) {
        // Play forward: From 1 to 40%
        lottieRef.current.playSegments([1, 40], true);
      } else {
        // Play backward: From 40% to 1
        lottieRef.current.playSegments([40, 1], true);
      }
      setIsPlayingForward(!isPlayingForward); // Toggle direction
    }
  };

  return (
    <div className="flex flex-col p-1 w-8 justify-center items-center border rounded-full border-secondary">
      <div onClick={handleClick} className="cursor-pointer">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false} // No looping
          autoplay={false} // Prevent autoplay
        />
      </div>
    </div>
  );
};

export default LottieAnimation;
