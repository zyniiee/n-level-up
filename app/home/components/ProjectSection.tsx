"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button/button";
import { NotionGalleries } from "@/types";

// Create a separate component for each project
const ProjectItem = ({ project }: { project: NotionGalleries }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mainImage = project.properties["main-image"]?.url || "";

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="col-span-2 gap-8 flex flex-col relative"
      onMouseMove={handleMouseMove}
      whileHover="hover"
    >
      <motion.div
        className="projects_container"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div
          className="projects_cover absolute inset-0"
          style={{
            backgroundImage: `url(${mainImage})`,
            filter: "blur(4px)",
          }}
        />
        <motion.img
          src={mainImage}
          className="relative z-10 w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          animate={{
            rotateX: mousePosition.y ? (mousePosition.y - 50) * 0.1 : 0,
            rotateY: mousePosition.x ? (mousePosition.x - 50) * 0.1 : 0,
            translateX: mousePosition.x ? (mousePosition.x - 200) * 0.2 : 0,
            translateY: mousePosition.y ? (mousePosition.y - 200) * 0.2 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Project = () => {
  const [featuredProject, setFeaturedProject] = useState<NotionGalleries[]>([]);
  const href = "/gallery";

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProject(data.featured);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section className="section_container xl:grid grid-cols-3 gap-8 xl:mt-0 mt-20">
      <div className="flex xl:flex-col justify-between items-center md:items-start col-span-1 xl:pb-0 pb-8">
        <p className="text-md inline-block">
          <span className="uppercase font-bold">Level up </span>- Art & Design
          Courses
        </p>
        <Button text="Xem chi tiết" href={href} />
      </div>

      <div className="col-span-2 gap-8 flex flex-col">
        {featuredProject.slice(0, 2).map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
