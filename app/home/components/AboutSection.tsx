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
    [0, 0.4, 1],
    ["5vw", "-2vw", "-5vw"]
  );

  const smoothMove = useSpring(movingUpSection, {
    stiffness: 90,
    damping: 20,
    mass: 0.5,
  });

  const opacityChange = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  const smoothOpacity = useSpring(opacityChange, {
    stiffness: 70,
    damping: 15,
  });

  return (
    <motion.section
      ref={sectionRef}
      style={{
        y: smoothMove,
        opacity: smoothOpacity,
      }}
      className="xl:grid grid-cols-5 gap-4 section_container flex"
    >
      <div className="xl:col-span-2 block-hidden"></div>
      <div className="xl:col-span-3">
        <h2 className="page_about_heading xl:pt-0 pt-20 xl:text-[32px] 2xl:text-[2vw] text-2xl">
          {heading}
        </h2>
        <p className="page_about_subHeading pt-10 pb-10">{sub_heading}</p>
        <Button text={cta} href="/about" />
      </div>
    </motion.section>
  );
};

export default AboutSection;
