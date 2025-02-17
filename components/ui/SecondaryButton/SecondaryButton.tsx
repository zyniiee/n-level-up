"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./secondaryButton.module.css";

interface ButtonProps {
  text?: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "text" | "icon";
}

const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  href,
  icon,
  variant = "default",
}) => {
  return (
    <Link href={href}>
      <motion.button
        className={`${styles.button} flex items-center gap-4 pointer-events-auto border-secondary relative overflow-hidden `}
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        {/* 2️⃣ Text-Only Button */}
        {variant === "text" && (
          <div className={`${styles.button_text_container} relative`}>
            <motion.div
              className="left-0 w-full"
              variants={{ initial: { y: "0%" }, hover: { y: "-100%" } }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {text}
            </motion.div>
            <motion.div
              className={`${styles.button_text_hover} absolute left-0 w-full text-[#aeaeae]`}
              variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {text}
            </motion.div>
          </div>
        )}

        {/* 3️⃣ Icon-Only Button */}
        {variant === "icon" && icon && (
          <div className={`${styles.button_text_container} relative`}>
            <motion.div
              className="left-0 w-full"
              variants={{ initial: { y: "0%" }, hover: { y: "-100%" } }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {icon}
            </motion.div>
            <motion.div
              className=" absolute left-0 w-full text-[#aeaeae]"
              variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {icon}
            </motion.div>
          </div>
        )}
      </motion.button>
    </Link>
  );
};

export default SecondaryButton;
