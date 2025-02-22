"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[15px] h-[15px] bg-white rounded-full pointer-events-none shadow-md z-40"
      style={{
        x: cursorPosition.x - 7.5, // Offset to center the dot
        y: cursorPosition.y - 7.5,
      }}
      animate={{ x: cursorPosition.x - 7.5, y: cursorPosition.y - 7.5 }}
      transition={{ type: "tween", ease: "linear", duration: 0.05 }}
    />
  );
};

export default CustomCursor;
