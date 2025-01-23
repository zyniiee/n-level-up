"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button/button";
import styles from "../styles/home.module.css";

const Project = () => {
  // State to track mouse position and image hover status
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [hoveredImage, setHoveredImage] = useState<number | null>(null); // Track hovered image (1 or 2)

  // Handler to track mouse movement for each image
  const handleMouseMove = (event: React.MouseEvent, imageId: number) => {
    const { clientX, clientY, currentTarget } = event;
    const { top, left, width, height } = currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to the center of the image
    const x = (clientX - left - width / 2) / (width / 2); // [-1, 1] for X axis (centered)
    const y = (clientY - top - height / 2) / (height / 2); // [-1, 1] for Y axis (centered)

    setMousePosition({ x, y });
    setHoveredImage(imageId); // Track which image is hovered
  };

  // Calculate the transform styles based on mouse position relative to its initial center
  const getTransformStyle = (x: number, y: number): React.CSSProperties => ({
    transform: `translate3d(${x * 5}vw, ${y * 5}vw, 0) 
                scale3d(1, 1, 1) 
                rotateX(${y * -5}deg) 
                rotateY(${x * 5}deg) 
                skew(${x * 15}deg, ${y * 15}deg)`,
    transformOrigin: "center center", // Ensure transformations happen from the center
    willChange: "transform",
    transition: "transform 0.1s ease-out", // Smooth transition for transform
  });

  // Initial translate3d to apply subtle offset when not hovered, starts from center
  const getInitialStyle = (): React.CSSProperties => ({
    transition: "transform 0.2s ease-out", // Smooth transition on page load
    transformOrigin: "center center", // Keep the transform origin in the center
  });

  return (
    <section className="section_container grid grid-cols-3 gap-8">
      <div className="flex flex-col justify-between col-span-1">
        <p className="mx-4 text-md inline-block">
          <span className="uppercase font-bold">Level up </span>- Art & Design
          Courses
        </p>
        <Button text="Xem chi tiết" href="/gallery"></Button>
      </div>

      <div className="col-span-2 gap-8 flex flex-col">
        {/* Project Image 1 */}
        <div
          className={styles.projects_container}
          onMouseMove={(e) => handleMouseMove(e, 1)} // Track mouse movement on project 1
          onMouseEnter={() => setHoveredImage(1)} // Set hover state for project 1
          onMouseLeave={() => setHoveredImage(null)} // Reset hover state
        >
          <div
            className={styles.project_cover}
            style={{
              backgroundImage: "url('/images/project-1.jpg')",
              filter: "blur(4px)",
            }}
          ></div>
          <img
            src="/images/project-1.jpg"
            alt="project_image"
            style={
              hoveredImage === 1
                ? getTransformStyle(mousePosition.x, mousePosition.y)
                : getInitialStyle() // Apply initial transform before hover
            }
          />
        </div>

        {/* Project Image 2 */}
        <div
          className={styles.projects_container}
          onMouseMove={(e) => handleMouseMove(e, 2)} // Track mouse movement on project 2
          onMouseEnter={() => setHoveredImage(2)} // Set hover state for project 2
          onMouseLeave={() => setHoveredImage(null)} // Reset hover state
        >
          <div
            className={styles.project_cover}
            style={{
              backgroundImage: "url('/images/project-2.jpg')",
              filter: "blur(4px)",
            }}
          ></div>
          <img
            src="/images/project-2.jpg"
            alt="project_image"
            style={
              hoveredImage === 2
                ? getTransformStyle(mousePosition.x, mousePosition.y)
                : getInitialStyle() // Apply initial transform before hover
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
