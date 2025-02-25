"use client";
import { useCourses } from "@/app/context/CourseContext";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const CoursesList = () => {
  const { courses, isLoading } = useCourses();
  const [hoveredImage, setHoveredImage] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const href = "/courses";

  // Fixed animation values for consistency
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (courses.length > 0) {
      setHoveredImage(courses[0].properties["main-image"]?.url || "");
    }
  }, [courses]);

  if (isLoading) {
    return <div> </div>;
  }

  return (
    <section className="section_container">
      <div className="xl:grid grid-cols-2 flex flex-col">
        {/* Image section */}
        <motion.div
          className="h-auto flex justify-center lg:pr-20 items-start pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={leftVariants}
          transition={{ duration: 0.6 }}
        >
          {hoveredImage && isHovering && (
            <img
              src={hoveredImage}
              alt="Selected course"
              className="object-cover transition-all duration-300 ease-in-out"
            />
          )}
        </motion.div>

        {/* Course list section */}
        <motion.div
          className="pt-16 xl:pt-0"
          onMouseLeave={() => setIsHovering(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={rightVariants}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="font-semibold text-secondary pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Khoá học LEVEL UP tư duy
          </motion.p>

          {courses.map((course, index) => {
            const mainImage = course.properties["main-image"]?.url || "";
            const slug =
              course.properties.Slug?.rich_text?.[0]?.plain_text || "";

            return (
              <motion.div
                key={course.id}
                className="flex items-center cursor-pointer w-full"
                onMouseEnter={() => {
                  setHoveredImage(mainImage);
                  setIsHovering(true);
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={itemVariants}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
              >
                <Link
                  href={`${href}/${slug}`}
                  className="page_course_heading relative w-full font-bold overflow-hidden xl:text-[1.5vw] 2xl:text-[3vw] text-[1.25rem] border-secondary"
                >
                  <motion.button
                    className="course_button flex items-center py-6 w-full gap-4 pointer-events-auto relative"
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    variants={{
                      initial: { x: "-30px" },
                      hover: { x: "0px" },
                    }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  >
                    <div className="course_arrow_block relative overflow-hidden">
                      <motion.svg
                        className="course_arrow_left"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#aeaeae"
                        variants={{
                          initial: { x: "0%", opacity: 0 },
                          hover: { x: "100%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </motion.svg>
                      <motion.svg
                        className="course_arrow_left absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        variants={{
                          initial: { x: "-100%", opacity: 0 },
                          hover: { x: "0%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </motion.svg>
                    </div>

                    <div className="course_button_text_container text-2xl xl:text-3xl 2xl:text-6xl relative">
                      <motion.div
                        className="left-0 w-full whitespace-nowrap overflow-hidden text-ellipsis"
                        variants={{
                          initial: { y: "0%" },
                          hover: { y: "-100%" },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        {course.properties.Name?.title?.[0]?.text?.content ||
                          "Untitled Course"}
                      </motion.div>

                      <motion.div
                        className="course_button_text_hover absolute left-0 w-full whitespace-nowrap overflow-hidden text-ellipsis"
                        variants={{
                          initial: { y: "100%" },
                          hover: { y: "0%" },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        {course.properties.Name?.title?.[0]?.text?.content ||
                          "Untitled Course"}
                      </motion.div>
                    </div>

                    <div className="course_arrow_block relative overflow-hidden ml-1">
                      <motion.svg
                        className="course_arrow_right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#aeaeae"
                        variants={{
                          initial: { x: "0%", opacity: 0 },
                          hover: { x: "-100%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                      </motion.svg>

                      <motion.svg
                        className="course_arrow_right absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        variants={{
                          initial: { x: "100%", opacity: 0 },
                          hover: { x: "0%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                      </motion.svg>
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesList;
