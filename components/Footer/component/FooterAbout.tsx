"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/types";
import styles from "../footer.module.css";
const FooterAbout = ({ about }: { about: Footer["about"] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % about.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + about.length) % about.length);
  };

  return (
    <div className="pb-32">
      <div className="section_container relative flex items-center">
        <div className="flex gap-16 w-full">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex gap-16 w-full"
          >
            <p className="w-16">/ 0{about[currentIndex].id}</p>
            <div className="flex flex-col gap-4">
              <p className="uppercase">/ {about[currentIndex].subHeading}</p>
              <h4 className={`${styles.footer_about_heading} w-9/12`}>
                {about[currentIndex].heading}
              </h4>
              <p className="w-1/2">{about[currentIndex].subText}</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-16 rounded-full p-2"
        >
          <img src="./icons/footer-arrow-left.svg" alt="arrow left" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-16 rounded-full p-2"
        >
          <img src="./icons/footer-arrow-right.svg" alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default FooterAbout;
