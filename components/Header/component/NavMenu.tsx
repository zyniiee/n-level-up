"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { navMenuFooter } from "@/constants";
import { useCourses } from "@/app/hooks/useCourse";

interface NavMenuProps {
  isOpen: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen }) => {
  const href = "/courses";
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { courses, isLoading } = useCourses();
  useEffect(() => {
    if (!isLoading && courses.length > 0) {
      setHoveredIndex(0);
      setIsHovering(true);
    }
  }, [isLoading, courses]);

  const leftArrowVariants = {
    initial: { x: "0%" },
    hover: {
      x: "150%",
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  const leftArrowColoredVariants = {
    initial: { x: "-150%" },
    hover: {
      x: "0%",
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  const rightArrowVariants = {
    initial: { x: "0%" },
    hover: {
      x: "-150%",
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  const rightArrowColoredVariants = {
    initial: { x: "150%" },
    hover: {
      x: "0%",
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const resetToFirstCourse = () => {
    if (courses.length > 0) {
      setIsHovering(false);
      setHoveredIndex(0);
    }
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div
      className={`w-screen h-screen fixed inset-0 z-20 transition-opacity duration-100 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ maxWidth: "100vw", margin: 0 }}
    >
      {/* Background */}
      <div
        className={`backgound_nav w-full h-full inset-0 absolute origin-top-right bg-[#141414] transition-transform duration-100 
        ${isOpen ? "rotate-0" : "-rotate-90"}`}
      ></div>

      {/* Content */}
      <div className="nav_menu_content relative z-10 w-full h-full flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full mx-auto">
          <p className="font-semibold py-[1rem] md:py-[2rem] w-full border-b-[0.5px] border-[#aeaeae] text-center text-white">
            Khoá học LEVEL UP tư duy
          </p>
          <div className="w-full flex flex-col items-center">
            {courses.map((course, index) => {
              const slug =
                course.properties.Slug?.rich_text?.[0]?.plain_text || "";
              const isCourseHovered = hoveredIndex === index;

              const isActiveForAnimation =
                isCourseHovered || (index === 0 && !isHovering);

              return (
                <motion.div
                  key={course.id}
                  className="flex items-center justify-center cursor-pointer w-full"
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={resetToFirstCourse}
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
                    className="page_course_heading relative w-full font-bold py-2 border-secondary text-center"
                  >
                    <motion.button
                      className="course_button  flex items-center justify-center py-6 w-full gap-4 pointer-events-auto relative"
                      initial="initial"
                      whileHover="hover"
                      animate={isActiveForAnimation ? "hover" : "initial"}
                      transition={{ duration: 0.5, ease: "circOut" }}
                    >
                      <div className="course_arrow_block relative overflow-hidden">
                        <motion.svg
                          className="absolute"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 8"
                          fill="#aeaeae"
                          variants={leftArrowVariants}
                          animate={
                            isActiveForAnimation
                              ? { opacity: 1 }
                              : {
                                  opacity:
                                    hoveredIndex === null && index === 0
                                      ? 1
                                      : 0,
                                }
                          }
                          transition={{ duration: 0.3 }}
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
                          animate={
                            isActiveForAnimation
                              ? { opacity: 1 }
                              : {
                                  opacity:
                                    hoveredIndex === null && index === 0
                                      ? 1
                                      : 0,
                                }
                          }
                          transition={{ duration: 0.3 }}
                          variants={leftArrowColoredVariants}
                        >
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z"
                            fill="#currentColor"
                          />{" "}
                        </motion.svg>
                      </div>

                      <div className="course_button_text_container items-center text-course-heading leading-relaxed relative">
                        <motion.div
                          className="left-0 w-full whitespace-nowrap text-ellipsis text-white"
                          variants={{
                            initial: { y: "0%" },
                            hover: { y: "-100%" },
                          }}
                          animate={isActiveForAnimation ? "hover" : "initial"}
                          transition={{ duration: 0.5, ease: "circOut" }}
                        >
                          {course.properties.Name?.title?.[0]?.plain_text ||
                            "Untitled Course"}
                        </motion.div>

                        <motion.div
                          className="course_button_text_hover absolute left-0 w-full whitespace-nowrap text-ellipsis text-white"
                          variants={{
                            initial: { y: "100%" },
                            hover: { y: "0%" },
                          }}
                          animate={isActiveForAnimation ? "hover" : "initial"}
                          transition={{ duration: 0.5, ease: "circOut" }}
                        >
                          {course.properties.Name?.title?.[0]?.plain_text ||
                            "Untitled Course"}
                        </motion.div>
                      </div>

                      <div className="course_arrow_block relative overflow-hidden">
                        <motion.svg
                          className="absolute"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 8"
                          fill="#aeaeae"
                          variants={rightArrowVariants}
                          animate={
                            isActiveForAnimation
                              ? { opacity: 1 }
                              : {
                                  opacity:
                                    hoveredIndex === null && index === 0
                                      ? 1
                                      : 0,
                                }
                          }
                          transition={{ duration: 0.3 }}
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
                          variants={rightArrowColoredVariants}
                          animate={
                            isActiveForAnimation
                              ? { opacity: 1 }
                              : {
                                  opacity:
                                    hoveredIndex === null && index === 0
                                      ? 1
                                      : 0,
                                }
                          }
                          transition={{ duration: 0.3 }}
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="section_container_sml m-auto w-full absolute z-10 inset-x-0 bottom-0">
        <ul className="w-full flex justify-between">
          {navMenuFooter.main.map((item) => (
            <li key={item.title}>
              <SecondaryButton text={item.title} href={item.href} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
