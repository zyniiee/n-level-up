"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { NotionBlogPost } from "@/types";
import Button from "@/components/ui/Button/button";
import Link from "next/link";
import PostCard from "@/components/Body/PostCard";

const BlogSection = () => {
  const [featuredPosts, setFeaturedPosts] = useState<NotionBlogPost[]>([]);
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const mainControls = useAnimation();

  const title = "Knowledge We Give, Value You Get";
  const cta = "Xem chi tiết";
  const href = "/blog-page";

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedPosts(data.featured);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const sectionVariants = {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={mainControls}
      variants={sectionVariants}
      className="section_container xl:mt-0 mt-20"
    >
      {featuredPosts.length > 0 ? (
        <div className="blog-category">
          <motion.div
            className="flex justify-between items-end pb-8"
            variants={itemVariants}
          >
            <h3 className="w-2/5 font-medium text-blog-heading leading-[125%]">
              {title}
            </h3>
            <Button text={cta} href={href} />
          </motion.div>

          <motion.div
            className="blog_posts grid xl:grid-cols-4 grid-cols-2 gap-x-5 gap-y-8"
            variants={sectionVariants}
          >
            {featuredPosts.slice(0, 8).map((post) => (
              <PostCard
                key={post.id}
                post={post}
                baseUrl={href}
                itemVariants={itemVariants}
                ctaText={cta}
              />
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div variants={itemVariants} className="text-center py-12">
          <p></p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default BlogSection;
