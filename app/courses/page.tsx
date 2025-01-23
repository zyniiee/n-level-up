import React from "react";
import CourseDetail from "./components/CourseDetail";
import { sampleCourses } from "@/constants";

const page = () => {
  return (
    <div>
      <CourseDetail {...sampleCourses[0]} />
    </div>
  );
};

export default page;
