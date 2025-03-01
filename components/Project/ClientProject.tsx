"use client";
import React, { useRef } from "react";
import Button from "@/components/ui/Button/button";
import { NotionGallery } from "@/types";
import ProjectItem from "./ProjectItem";

// Client component that receives server-fetched data and handles UI interactivity
const ClientProject = ({
  initialFeaturedProjects,
}: {
  initialFeaturedProjects: NotionGallery[];
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const originalTextRef = useRef<HTMLParagraphElement>(null);
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const href = "/gallery";

  return (
    <section
      ref={sectionRef}
      className="section_container xl:grid grid-cols-3 gap-8 xl:mt-0 mt-20 w-full"
    >
      <div className="flex xl:flex-col justify-between items-center md:items-start col-span-1 xl:pb-0 pb-8">
        <p
          ref={originalTextRef}
          className="text-md inline-block sticky mb-[40vh] top-32 bottom-[50%]"
        >
          <span className="uppercase font-bold">Level up </span>- Art & Design
          Courses
        </p>
        <Button text="Xem chi tiết" href={href} />
      </div>

      <div ref={parentContainerRef} className="col-span-2 gap-8 flex flex-col">
        {initialFeaturedProjects.slice(0, 3).map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ClientProject;
