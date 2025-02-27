"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { home } from "@/constants";
import Button from "@/components/ui/Button/button";

const { heading, sub_heading, cta } = home[0].about;

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const movingUpSection = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 1],
    ["10%", "6%", "2%", "0%"]
  );

  const smoothMove = useSpring(movingUpSection, {
    stiffness: 65,
    damping: 25,
    mass: 1,
    restDelta: 0.001,
  });

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0.3, 0.7, 1]
  );

  const smoothHeadingOpacity = useSpring(headingOpacity, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.01,
  });

  return (
    <motion.section
      ref={sectionRef}
      className="xl:grid grid-cols-5 gap-4 section_container about_section flex overflow-hidden"
    >
      <div className="xl:col-span-2 block-hidden"></div>
      <div className="xl:col-span-3">
        <motion.h2
          className="page_about_heading xl:pt-0 text-about-heading"
          style={{
            y: smoothMove,
            opacity: smoothHeadingOpacity,
          }}
        >
          {heading}
        </motion.h2>
        <p className="page_about_subHeading pt-10 pb-10">{sub_heading}</p>
        <Button text={cta} href="/about" />
      </div>
    </motion.section>
  );
};

export default AboutSection;
