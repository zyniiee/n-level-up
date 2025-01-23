"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/home.module.css";

const TextScrollLarge = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Track if the section is in view
  const [inView, setInView] = useState(false);

  // Store the scrollY at the moment the section becomes visible
  const [startScroll, setStartScroll] = useState<number | null>(null);

  // Horizontal offsets (left/right)
  const [offsetTopLine, setOffsetTopLine] = useState(0);
  const [offsetBottomLine, setOffsetBottomLine] = useState(0);

  useEffect(() => {
    // Intersection Observer to detect entering the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Record the scrollY at this moment (section enters)
          setStartScroll(window.scrollY);
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -10% 0px", // e.g., offset 10% top/bot
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Continuously update positions while scrolling (after inView)
  useEffect(() => {
    const handleScroll = () => {
      if (!inView || startScroll === null) return;
      // How far user has scrolled since the section became visible
      const distanceScrolled = window.scrollY - startScroll;

      // Map distanceScrolled -> horizontal offsets
      // Adjust the multiplier to control speed/direction
      const topLineMovement = distanceScrolled * 0.1; // moves left to right
      const bottomLineMovement = distanceScrolled * -0.1; // moves right to left

      setOffsetTopLine(topLineMovement);
      setOffsetBottomLine(bottomLineMovement);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView, startScroll]);

  return (
    <section
      ref={sectionRef}
      className="pt-32 w-full overflow-hidden relative"
      style={{ height: "50vh" }}
    >
      {/* Top line: moves left → right as user scrolls further, after entering view */}
      <div
        className="flex flex-nowrap gap-10 whitespace-nowrap pb-2 absolute "
        style={{
          transform: `translateX(${offsetTopLine}px)`,
          transition: inView ? "none" : "transform 0.5s ease", // optional
        }}
      >
        <p className={`${styles.text_scroll_large} font-extralight uppercase`}>
          Details create
        </p>
      </div>

      {/* Bottom line: moves right → left */}
      <div
        className="flex flex-nowrap gap-10 whitespace-nowrap absolute top-64"
        style={{
          transform: `translateX(${offsetBottomLine}px)`,
          transition: inView ? "none" : "transform 0.5s ease",
        }}
      >
        <div className="w-32"></div>
        <p className={`${styles.text_scroll_large} font-extralight uppercase`}>
          a good designer
        </p>
      </div>
    </section>
  );
};

export default TextScrollLarge;
