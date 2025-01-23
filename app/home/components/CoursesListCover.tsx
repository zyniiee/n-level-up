"use client";
import React from "react";
import CoursesList from "./CoursesList";
import { sampleCourses } from "@/constants";

const CoursesListCover = () => {
  return (
    <section className="section_container">
      <div className="">
        <CoursesList courses={sampleCourses} />
      </div>
    </section>
  );
};

export default CoursesListCover;
