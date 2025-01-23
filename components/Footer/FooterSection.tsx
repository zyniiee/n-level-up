"use client";
import React, { useState, useEffect, useRef } from "react";
import { Footer } from "@/types";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { sampleCourses } from "@/constants";
import styles from "./footer.module.css";
import { generateSlug } from "@/lib/utils";

const FooterSection = ({ footer }: { footer: Footer }) => {
  const [currentAboutIndex, setCurrentAboutIndex] = useState(0);
  const handleAboutNext = () => {
    setCurrentAboutIndex((prev) => (prev + 1) % footer.about.length);
  };
  const handleAboutPrev = () => {
    setCurrentAboutIndex(
      (prev) => (prev - 1 + footer.about.length) % footer.about.length
    );
  };
  // Let's talk animation
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  // 1) Access scrollY from Framer Motion
  const { scrollY } = useScroll();

  // 2) On mount, measure the heading offset
  useEffect(() => {
    if (headingRef.current) {
      const offsetTop = headingRef.current.offsetTop;
      // Start the animation 80% before it appears
      const startPoint = offsetTop - window.innerHeight * 0.9;
      const endPoint = startPoint + 1000;

      setStart(startPoint);
      setEnd(endPoint);
    }
  }, []);
  // 3) transform scrollY in range [start..end] ->
  const x = useTransform(scrollY, [start, end], ["5vw", "-5vw"]);

  return (
    <footer className="flex flex-col overflow-hidden">
      {/* About Section */}
      <div className="pb-32">
        <div className="section_container relative flex items-center">
          {/* Display Only the Current Item */}
          <div className="flex gap-16 w-full ">
            <motion.div
              key={currentAboutIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex gap-16 w-full"
            >
              <p className="w-16">/ 0{footer.about[currentAboutIndex].id}</p>
              <div className="flex flex-col gap-4">
                <p className="uppercase">
                  / {footer.about[currentAboutIndex].subHeading}
                </p>
                <h4 className={`${styles.footer_about_heading} w-9/12`}>
                  {footer.about[currentAboutIndex].heading}
                </h4>
                <p className="w-1/2">
                  {footer.about[currentAboutIndex].subText}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handleAboutPrev}
            className="absolute left-16 rounded-full p-2"
          >
            <img src="./icons/footer-arrow-left.svg" alt="arrow left" />{" "}
            {/* Left Arrow */}
          </button>
          <button
            onClick={handleAboutNext}
            className="absolute right-16 rounded-full p-2"
          >
            <img src="./icons/footer-arrow-right.svg" alt="arrow right" />{" "}
            {/* Right Arrow */}
          </button>
        </div>
      </div>
      <motion.h2
        className={`${styles.footer_heading}`}
        ref={headingRef}
        style={{ x }}
      >
        Let's talk
      </motion.h2>
      <div className=" section_container flex justify-between items-end ">
        <div className="flex gap-16">
          {/* Courses Section */}
          <div className="footer-section ">
            <h4 className="uppercase font-bold pb-4">Courses</h4>
            <ul>
              {sampleCourses.map((course) => (
                <li key={course.id}>
                  <a
                    href={`/courses/${generateSlug(course.name)}`}
                    className="footer-link"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Collaborate Section */}
          <div className="footer-collaborate">
            <h4 className="uppercase font-bold pb-4">Collaborate</h4>
            <ul>
              {footer.collaborate.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Inspiration Section */}
          <div className="footer-collaborate">
            <h4 className="uppercase font-bold pb-4">inspiration</h4>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/goc-nhin">Góc nhìn</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Media Section */}
        <div className="">
          <ul className="social-icons flex gap-4">
            {footer.social_media.map((social, index) => (
              <li key={index} className={styles.footer_sns}>
                <a href={social.href} aria-label={social.label}>
                  <img src={social.img} alt={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${styles.copyright} mt-16`}>
        <p>Copyright © 2025 LEVEL UP AGENCY</p>
      </div>
    </footer>
  );
};

export default FooterSection;
