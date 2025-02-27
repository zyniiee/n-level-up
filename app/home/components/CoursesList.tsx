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
    <section className="section_container w-full">
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
            className="font-semibold text-secondary pb-4 border-b-[0.5px] border-secondary"
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
                className="flex items-center cursor-pointer w-full "
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
                  className="page_course_heading relative w-full font-bold py-2 border-secondary"
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
                        className="absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 8"
                        fill="#aeaeae"
                        variants={{
                          initial: { x: "0%", opacity: 0 },
                          hover: { x: "100%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z"
                          fill="#AEAEAE"
                        />{" "}
                      </motion.svg>
                      <motion.svg
                        className="absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 8"
                        fill="currentColor"
                        variants={{
                          initial: { x: "-100%", opacity: 0 },
                          hover: { x: "0%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z"
                          fill="#currentColor"
                        />{" "}
                      </motion.svg>
                    </div>

                    <div className="course_button_text_container  text-course-heading leading-relaxed relative">
                      <motion.div
                        className="left-0 w-full whitespace-nowrap text-ellipsis "
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
                        className="course_button_text_hover absolute left-0 w-full whitespace-nowrap text-ellipsis"
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

                    <div className="course_arrow_block relative overflow-hidden ">
                      <motion.svg
                        className="absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 8"
                        fill="#aeaeae"
                        variants={{
                          initial: { x: "0%", opacity: 0 },
                          hover: { x: "-100%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M0.646445 3.64645C0.451183 3.84171 0.451183 4.15829 0.646445 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646445 3.64645ZM16 3.5L0.999999 3.5L0.999999 4.5L16 4.5L16 3.5Z"
                          fill="#AEAEAE"
                        />{" "}
                      </motion.svg>

                      <motion.svg
                        className="absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 8"
                        fill="currentColor"
                        variants={{
                          initial: { x: "100%", opacity: 0 },
                          hover: { x: "0%", opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M0.646445 3.64645C0.451183 3.84171 0.451183 4.15829 0.646445 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646445 3.64645ZM16 3.5L0.999999 3.5L0.999999 4.5L16 4.5L16 3.5Z"
                          fill="#currentColor"
                        />{" "}
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
