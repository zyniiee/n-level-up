"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./button.module.css";
import { relative } from "path";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <motion.button
        className={`${styles.button} flex gap-4 pointer-events-auto border-secondary relative overflow-hidden`}
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        <div className={`${styles.arrow_block} relative overflow-hidden`}>
          <motion.svg
            className={`${styles.arrow_left}  `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#aeaeae"
            variants={{
              initial: { x: "0%" },
              hover: { x: "100%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </motion.svg>
          <motion.svg
            className={`${styles.arrow_left} absolute `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            variants={{
              initial: { x: "-100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </motion.svg>
        </div>

        <div className={`${styles.button_text_container} relative`}>
          <motion.div
            className="left-0 w-full"
            variants={{
              initial: { y: "0%" },
              hover: { y: "-100%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            {text}
          </motion.div>

          <motion.div
            className={`${styles.button_text_hover} absolute left-0 w-full`}
            variants={{
              initial: { y: "100%" },
              hover: { y: "0%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            {text}
          </motion.div>
        </div>
        <div className={`${styles.arrow_block} relative overflow-hidden`}>
          <motion.svg
            className={`${styles.arrow_right}  `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#aeaeae"
            variants={{
              initial: { x: "0%" },
              hover: { x: "-100%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </motion.svg>

          <motion.svg
            className={`${styles.arrow_right} absolute `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            variants={{
              initial: { x: "100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </motion.svg>
        </div>
      </motion.button>
    </Link>
  );
};

export default Button;
