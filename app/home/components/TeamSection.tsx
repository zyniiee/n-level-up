"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { home } from "@/constants/index";
import { Team as TeamType } from "@/types";

const Team = () => {
  const team: TeamType[] = home[0].team;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "-100px",
        threshold: 0.1,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section_container flex justify-center my-32 ">
      <motion.div
        ref={containerRef}
        className="grid grid-cols-3 xl:gap-8 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            className="team_member 2xl:w-auto"
            variants={itemVariants}
            custom={index}
          >
            <img src={member.mainImage} alt={member.name} />
            <div className="team_details">
              <p className="team_member_name">
                Thầy
                <span> {member.name}</span>
              </p>
              <p className="team_member-position">{member.position}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
