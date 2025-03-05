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

  useEffect(() => {
    if (splideRef.current) {
      const splide = new SplideType(splideRef.current, {
        type: "slide",
        perPage: 5,
        perMove: 1,
        gap: "1rem",
        drag: "free",
        autoWidth: false,
        pagination: false,
        focus: "center",
        rewind: true,

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
            perPage: 1,
            gap: "1rem",
          },
        },
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, [reviews.length]);

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
    <div className="w-full overflow-hidden flex justify-center">
      <motion.section
        ref={sectionRef}
        className="w-full max-w-[1440px] xl:pt-[15rem] pt-20 pl-[6rem] "
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          ref={splideRef}
          className="splide pr-10rem w-full relative slider1"
        >
          <div className="splide__track h-full w-full relative z-0  pr-2rem">
            <div className="splide__list flex items-start">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="splide__slide review_card"
                  variants={cardVariants}
                  custom={index}
                >
                  <div className="flex flex-col justify-between  whitespace-normal gap-y-6 ">
                    <div className="gap-5 flex flex-col flex-grow">
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
                    </div>
                    <div className="h-[2rem]"></div>
                    <div className="absolute bottom-[2rem] h-5 w-[100px] -m-[2px] mt-auto">
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
    </div>
  );
};

export default ReviewSection;
