"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Splide as SplideType } from "@splidejs/splide";
import "@splidejs/splide/css";
import { Review } from "@/types";
import { motion } from "framer-motion";

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const splideRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Set up intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "-100px",
        threshold: 0.15,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Initialize Splide carousel
  useEffect(() => {
    if (splideRef.current) {
      const splide = new SplideType(splideRef.current, {
        type: "slide",
        perPage: 5,
        perMove: 1,
        focus: 0,
        gap: "1rem",
        speed: 600,
        arrows: false,
        pagination: false,
        dragAngleThreshold: 60,
        autoWidth: false,
        rewind: false,
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: true,
        breakpoints: {
          1280: {
            perPage: 4,
          },
          991: {
            perPage: 4,
            gap: "1rem",
          },
          767: {
            perPage: 2,
            gap: "1rem",
          },
          479: {
            perPage: 2,
            gap: "1rem",
          },
        },
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full xl:pt-[15rem] pt-20 md:pl-[10vw] pl-[2rem] overflow-x-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="mb-12 text-3xl font-bold" variants={titleVariants}>
        Học viên chia sẻ
      </motion.h2>

      <div ref={splideRef} className="splide relative slider1">
        <div className="splide__track w-full relative z-0 overflow-visible pr-2rem">
          <div className="splide__list flex">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="splide__slide review_card"
                variants={cardVariants}
                custom={index}
              >
                <div className="flex flex-col whitespace-normal gap-y-6 ">
                  <div className="flex gap-x-4">
                    <div className="review_card_image relative w-16 h-16">
                      <Image
                        src={review.mainImage}
                        alt={review.student_name}
                        fill
                        className="rounded-full object-cover"
                        sizes="(max-width: 768px) 64px, 64px"
                      />
                    </div>
                    <div>
                      <p className="page_text_small">
                        {review.student_name} <span>đề xuất</span>
                      </p>
                      <p className="page_text_small">{review.suggest}</p>
                    </div>
                  </div>
                  <p className="font-semibold">{review.quote}</p>
                  <div className="relative h-5 w-[100px]">
                    <Image
                      src="/images/5-star.svg"
                      alt="5 star review"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReviewSection;
