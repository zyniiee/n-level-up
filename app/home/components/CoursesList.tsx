"use client";
import { NotionCourses } from "@/types";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CoursesList = () => {
  const [allCourses, setAllCourses] = useState<NotionCourses[]>([]);
  const [hoveredImage, setHoveredImage] = useState<string>("");
  const href = "/courses";

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setAllCourses(data.allCourses);
        if (data.allCourses.length > 0) {
          setHoveredImage(
            data.allCourses[0].properties["main-images"]?.url || ""
          );
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section className="section_container">
      <div className="xl:grid grid-cols-2 flex flex-col">
        {/* Fixed image section */}
        <div className="h-auto flex justify-center lg:pr-20 items-start pt-8">
          {hoveredImage && (
            <img
              src={hoveredImage}
              alt="Selected course"
              className="object-cover transition-all duration-300 ease-in-out"
            />
          )}
        </div>

        {/* Course list section */}
        <div className="pt-16 xl:pt-0">
          <p className="font-semibold text-secondary border-b-[0.5px] border-secondary pb-2">
            Khoá học LEVEL UP tư duy
          </p>
          {allCourses.map((course) => {
            const mainImage = course.properties["main-image"]?.url || "";
            const slug =
              course.properties.Slug?.rich_text?.[0]?.plain_text || "";

            return (
              <div
                key={course.id}
                className="flex items-center py-6 border-b-[0.5px] border-secondary cursor-pointer"
                onMouseEnter={() => setHoveredImage(mainImage)} // Update image on hover
              >
                <div>
                  <Link
                    href={`${href}/${slug}`}
                    className="page_course_heading font-bold xl:text-[1.5vw] text-[1.25rem] flex"
                  >
                    {course.properties.Name?.title?.[0]?.text?.content ||
                      "Untitled Course"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
