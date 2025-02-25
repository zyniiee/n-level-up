"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    const initialMousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    setCursorPosition(initialMousePosition);

    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[15px] h-[15px] bg-white rounded-full pointer-events-none shadow-md z-40"
      animate={{
        x: cursorPosition.x - 7.5,
        y: cursorPosition.y - 7.5,
      }}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 500,
        mass: 0.3,
        duration: 0.01,
      }}
    />
  );
};

export default CustomCursor;
