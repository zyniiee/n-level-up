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
        className={`${styles.button} flex gap-4 pointer-events-auto border-secondary relative items-center overflow-hidden`}
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        <div className={`${styles.arrow_block} relative overflow-hidden`}>
          <motion.svg
            className={`${styles.arrow_left} absolute `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 8"
            fill="#aeaeae"
            variants={{
              initial: { x: "0%" },
              hover: { x: "100%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z"
              fill="#AEAEAE"
            />{" "}
          </motion.svg>
          <motion.svg
            className={`${styles.arrow_left} absolute `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 8"
            fill="currentColor"
            variants={{
              initial: { x: "-100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z"
              fill="#currentColor"
            />{" "}
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
        <div className={`${styles.arrow_block} relative overflow-hidden `}>
          <motion.svg
            className={`${styles.arrow_right} absolute `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 8"
            fill="#aeaeae"
            variants={{
              initial: { x: "0%" },
              hover: { x: "-100%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M0.646445 3.64645C0.451183 3.84171 0.451183 4.15829 0.646445 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646445 3.64645ZM16 3.5L0.999999 3.5L0.999999 4.5L16 4.5L16 3.5Z"
              fill="#AEAEAE"
            />{" "}
          </motion.svg>

          <motion.svg
            className={`${styles.arrow_right} absolute `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 8"
            fill="currentColor"
            variants={{
              initial: { x: "100%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M0.646445 3.64645C0.451183 3.84171 0.451183 4.15829 0.646445 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646445 3.64645ZM16 3.5L0.999999 3.5L0.999999 4.5L16 4.5L16 3.5Z"
              fill="#currentColor"
            />{" "}
          </motion.svg>
        </div>
      </motion.button>
    </Link>
  );
};

export default Button;
