"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: -100, y: -100 });
  const currentPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const checkMobile = () => {
      return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768
      );
    };

    const isMobile = checkMobile();

    if (isMobile || !cursorRef.current) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      // Simple lerp (linear interpolation) for smooth following
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      // Adjust factor between 0 and 1 (higher = less smoothing)
      const smoothFactor = 0.5;

      currentPosition.current.x = lerp(
        currentPosition.current.x,
        mousePosition.current.x,
        smoothFactor
      );

      currentPosition.current.y = lerp(
        currentPosition.current.y,
        mousePosition.current.y,
        smoothFactor
      );

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${
          currentPosition.current.x - 7.5
        }px, ${currentPosition.current.y - 7.5}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", checkMobile);

    // Start animation loop
    const animationFrame = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[15px] h-[15px] bg-white rounded-full pointer-events-none shadow-md z-40"
      style={{ transform: "translate(-100px, -100px)" }}
    />
  );
};

export default CustomCursor;
