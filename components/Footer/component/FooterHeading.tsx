"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../footer.module.css";

const FooterHeading = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-30%", "2%"]);

  return (
    <motion.h2
      className="text-footer-scrolltext whitespace-nowrap leading-none
"
      ref={headingRef}
      style={{ x }}
    >
      Let's talk
    </motion.h2>
  );
};

export default FooterHeading;
