"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import animationData from "@/public/menu.json";

// Dynamically import Lottie with SSR disabled to ensure it works only on the client-side
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = () => {
  const lottieRef = useRef<any>(null);
  const [isPlayingForward, setIsPlayingForward] = useState(true);

  // Adjust the speed once the component mounts
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2); // Adjust speed
    }
  }, []); // Run once after the component mounts

  // Toggle play direction (forward/backward)
  const handleClick = () => {
    if (lottieRef.current) {
      if (isPlayingForward) {
        // Play forward: From 1% to 40% of the animation
        lottieRef.current.playSegments([1, 40], true);
      } else {
        // Play backward: From 40% to 1%
        lottieRef.current.playSegments([40, 1], true);
      }
      setIsPlayingForward(!isPlayingForward); // Toggle direction for the next click
    }
  };

  return (
    <div className="flex flex-col p-1 w-8 justify-center items-center border rounded-full border-secondary">
      <div onClick={handleClick} className="cursor-pointer">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false} // No looping
          autoplay={false} // Prevent autoplay on load
        />
      </div>
    </div>
  );
};

export default LottieAnimation;
