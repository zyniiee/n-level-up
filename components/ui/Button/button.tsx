import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <button
        className={`${styles.button} flex justify-center gap-4 items-center pointer-events-auto pb-2 border-b-4 border-secondary"`}
      >
        <Image
          className="w-5"
          src="./icons/arrow-right.svg"
          alt="arrow right"
          width={10}
          height={15}
        />
        {text}
        <Image
          className="w-5"
          src="./icons/arrow-left.svg"
          alt="arrow left"
          width={10}
          height={15}
        />
      </button>
    </Link>
  );
};

export default Button;
