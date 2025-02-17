"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button/button";
import { NotionGalleries } from "@/types";

const Project = () => {
  const [featuredProject, setFeaturedProject] = useState<NotionGalleries[]>([]);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
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
    <section className="section_container xl:grid grid-cols-3 gap-8">
      {/* Left Column - Title & Button */}
      <div className="flex xl:flex-col justify-between col-span-1 xl:pb-0 pb-8">
        <p className="xl:mx-4 text-md inline-block">
          <span className="uppercase font-bold">Level up </span>- Art & Design
          Courses
        </p>
        <Button text="Xem chi tiết" href={href}></Button>
      </div>

      {/* Right Column - Project Images */}
      <div className="col-span-2 gap-8 flex flex-col">
        {featuredProject.slice(0, 2).map((project) => {
          const mainImage = project.properties["main-image"]?.url || "";
          return (
            <div key={project.id} className="col-span-2 gap-8 flex flex-col">
              <div className="projects_container">
                <div
                  className="projects_cover"
                  style={{
                    backgroundImage: `url(${mainImage})`,
                    filter: "blur(4px)",
                  }}
                ></div>
                <img src={mainImage} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
