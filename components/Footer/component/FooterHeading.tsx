"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../footer.module.css";

const FooterHeading = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-60vw", "-1vw"]);

  return (
    <motion.h2
      className={`${styles.footer_heading}`}
      ref={headingRef}
      style={{ x }}
    >
      Let's talk
    </motion.h2>
  );
};

export default FooterHeading;
