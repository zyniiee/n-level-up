"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button/button";
import { NotionGalleries } from "@/types";

const ProjectItem = ({ project }: { project: NotionGalleries }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mainImage = project.properties["main-image"]?.url || "";

  // Add a ref to track the previous position for smoothing
  const prevPosition = useRef({ x: 50, y: 50 });
  // Add a ref for animation frame to allow cancellation
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate raw mouse position as percentage (0-100)
      const rawX = ((event.clientX - rect.left) / rect.width) * 100;
      const rawY = ((event.clientY - rect.top) / rect.height) * 100;

      // Apply less smoothing for faster response (85% previous, 15% new)
      const smoothX = prevPosition.current.x * 0.85 + rawX * 0.15;
      const smoothY = prevPosition.current.y * 0.85 + rawY * 0.15;

      // Update the previous position ref
      prevPosition.current = { x: smoothX, y: smoothY };

      // Update state with smoothed values
      setMousePosition({ x: smoothX, y: smoothY });
    }
  };

  // Reset to center position when mouse leaves
  const handleMouseLeave = () => {
    // Cancel any existing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Function to animate return to center position
    const animateToCenter = () => {
      // Faster return (80% previous, 20% target)
      prevPosition.current = {
        x: prevPosition.current.x * 0.8 + 50 * 0.2,
        y: prevPosition.current.y * 0.8 + 50 * 0.2,
      };

      setMousePosition(prevPosition.current);

      // Stop animating when we're close enough to center
      if (
        Math.abs(prevPosition.current.x - 50) < 0.1 &&
        Math.abs(prevPosition.current.y - 50) < 0.1
      ) {
        prevPosition.current = { x: 50, y: 50 };
        setMousePosition({ x: 50, y: 50 });
        return;
      }

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animateToCenter);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animateToCenter);
  };

  // Map the mouse position (0-100) to precise values based on WebFlow animation
  const xMovement = -5 + (mousePosition.x / 100) * 10; // From -5vw to 5vw
  const yRotation = 25 - (mousePosition.x / 100) * 50; // From 25deg to -25deg
  const zRotation = -10 + (mousePosition.x / 100) * 20; // From -10deg to 10deg
  const yMovement = -5 + (mousePosition.y / 100) * 10; // From -5vh to 5vh
  const xRotation = -25 + (mousePosition.y / 100) * 50; // From -25deg to 25deg

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="col-span-2 gap-8 flex flex-col relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
            filter: "blur(4px)",
            backgroundImage: `url(${mainImage})`,
          }}
        />

        <img
          src={mainImage}
          className="relative z-10 w-full h-full object-cover project-thumbnail-block"
          style={{
            transform: `
              translateX(${xMovement}vw)
              translateY(${yMovement}vh)
              rotateX(${xRotation}deg)
              rotateY(${yRotation}deg)
              rotateZ(${zRotation}deg)
            `,
            transition: "transform 0.05s linear",
          }}
        />

        <div
          className="projects_cover absolute inset-0"
          style={{
            backgroundColor: "#0c0c0ca6",
          }}
        />
      </motion.div>
    </div>
  );
};
const Project = () => {
  const [featuredProject, setFeaturedProject] = useState<NotionGalleries[]>([]);
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const originalTextRef = useRef<HTMLParagraphElement>(null);
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const href = "/gallery";

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProject(data.featured);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const shouldShowFixed =
        scrollY > sectionTop + 20 && scrollY < sectionTop + sectionHeight - 20;

      setShowFixedHeader(shouldShowFixed);

      // Hide/show the original text
      if (originalTextRef.current) {
        originalTextRef.current.style.opacity = shouldShowFixed ? "0" : "1";
        originalTextRef.current.style.visibility = shouldShowFixed
          ? "hidden"
          : "visible";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [featuredProject]);

  return (
    <>
      {/* Fixed header that appears during scroll */}
      {showFixedHeader && (
        <div
          style={{
            position: "fixed",
            top: "5rem",
            left: "10vw",
            zIndex: 100,
            transition: "opacity 0.2s ease-in",
            opacity: showFixedHeader ? 1 : 0,
            pointerEvents: showFixedHeader ? "auto" : "none",
          }}
        >
          <p className="text-md inline-block">
            <span className="uppercase font-bold">Level up </span>- Art & Design
            Courses
          </p>
        </div>
      )}

      {/* Regular section with normal content */}
      <section
        ref={sectionRef}
        className="section_container xl:grid grid-cols-3 gap-8 xl:mt-0 mt-20"
      >
        <div className="flex xl:flex-col justify-between items-center md:items-start col-span-1 xl:pb-0 pb-8">
          <p
            ref={originalTextRef}
            className="text-md inline-block"
            style={{ transition: "opacity 0.2s ease-in" }}
          >
            <span className="uppercase font-bold">Level up </span>- Art & Design
            Courses
          </p>
          <Button text="Xem chi tiết" href={href} />
        </div>

        <div
          ref={parentContainerRef}
          className="col-span-2 gap-8 flex flex-col"
        >
          {featuredProject.slice(0, 3).map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
