import React from "react";
import Image from "next/image";
import { Course } from "@/types";

const CourseDetail = ({ name, mainImage }: Course) => {
  return (
    <section>
      <h1>{name}</h1>
      <div>
        <Image src={mainImage} alt={name} width={100} height={100} />
      </div>
    </section>
  );
};

export default CourseDetail;
