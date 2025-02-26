"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCourses } from "@/app/context/CourseContext";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { navMenuFooter } from "@/constants";

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  const { courses } = useCourses();
  const href = "/courses";

  return (
    <div
      className={`w-screen h-screen fixed inset-0 z-19 transition-opacity duration-100  ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`backgound_nav w-full h-full inset-0 absolute origin-top-right bg-[#141414] transition-transform duration-100 
        ${isOpen ? "rotate-0" : "-rotate-90"}`}
      ></div>

      <div className="nav_menu_content relative z-10 w-full h-full flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-semibold py-[1rem] md:py-[2rem] w-full border-b-[0.5px] border-[#aeaeae] text-center text-white">
            Khoá học LEVEL UP tư duy
          </p>

          <div className="w-full">
            {courses.map((course) => {
              const slug =
                course.properties.Slug?.rich_text?.[0]?.plain_text || "";

              return (
                <div
                  key={course.id}
                  className="flex items-center cursor-pointer w-full"
                >
                  <Link
                    href={`${href}/${slug}`}
                    className="page_course_heading relative w-full font-bold overflow-hidden text-[1.25rem] md:text-[2rem] xl:text-[3rem] border-secondary flex items-start text-white"
                  >
                    <motion.button
                      className="course_button py-[1.5rem] 2xl:py-[2rem] w-full flex items-center gap-4 pointer-events-auto justify-center relative border-b-[0.5px] border-[#aeaeae]"
                      initial="initial"
                      whileHover="hover"
                      animate="initial"
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

                      <div className="course_button_text_container text-4xl 2xl:text-6xl relative text-center">
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

                      <div className="course_arrow_block relative overflow-hidden">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section_container_sml w-full absolute  z-10 inset-x-0 bottom-0">
        <ul className="w-full flex justify-between">
          {navMenuFooter.main.map((item) => (
            <li key={item.title}>
              <SecondaryButton
                text={item.title}
                href={item.href}
                variant="text"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
