"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/types";
import styles from "../../../components/Footer/footer.module.css";

const FooterAbout = ({ about }: { about: Footer["about"] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Track direction for better animations

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % about.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + about.length) % about.length);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  // Content item variants for staggered animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1, // stagger based on index
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="pb-32 pt-32">
      <div className="section_container relative flex items-center">
        <div className="flex gap-16 w-full overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex xl:gap-16 gap-8 w-full"
            >
              <motion.p
                className="w-16"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                / 0{about[currentIndex].id}
              </motion.p>

              <div className="flex flex-col gap-4">
                <motion.p
                  className="uppercase"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  / {about[currentIndex].subHeading}
                </motion.p>

                <motion.h4
                  className={`${styles.footer_about_heading} `}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  <span className="span">{about[currentIndex].heading} </span>
                </motion.h4>

                <motion.p
                  className="xl:w-1/2 w-3/4"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  {about[currentIndex].subText}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={handlePrev}
          className="absolute md:left-[6rem] left-[2rem] rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <img src="./icons/footer-arrow-left.svg" alt="arrow left" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="absolute md:right-[6rem] right-[2rem] rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <img src="./icons/footer-arrow-right.svg" alt="arrow right" />
        </motion.button>
      </div>
    </div>
  );
};

export default FooterAbout;
