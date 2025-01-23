import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.css";
import { generateSlug } from "@/lib/utils";
import { Course } from "@/types";
interface CoursesListProps {
  courses: Course[];
}

const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
  // State to track the currently hovered course
  const [hoveredImage, setHoveredImage] = useState<string>(
    courses[0]?.mainImage || ""
  );

  return (
    <section className="grid grid-cols-2 ">
      {/* Fixed image section */}
      <div className=" h-auto flex  justify-center pr-20 items-start pt-8 ">
        <Image
          src={hoveredImage}
          alt="Selected course"
          width={500}
          height={300}
          className="object-cover"
        />
      </div>

      {/* Course list section */}
      <div className="">
        <p className="font-semibold text-secondary border-b-[0.5px] border-secondary pb-2 ">
          Khoá học LEVEL UP tư duy
        </p>{" "}
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="flex items-center pb-6 pt-6 border-b-[0.5px] border-secondary"
              onMouseEnter={() => setHoveredImage(course.mainImage)} // Update image on hover
            >
              <div className="">
                <Link
                  href={`/courses/${generateSlug(course.name)}`}
                  className={`${styles.page_course_heading} `}
                >
                  {course.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoursesList;
