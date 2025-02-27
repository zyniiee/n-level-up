"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { NotionBlog } from "@/types";
import Button from "@/components/ui/Button/button";
import Link from "next/link";

const BlogSection = () => {
  const [featuredPosts, setFeaturedPosts] = useState<NotionBlog[]>([]);
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const mainControls = useAnimation();

  const title = "Knowledge We Give, Value You Get";
  const cta = "Xem chi tiết";
  const href = "/blog";

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
            {featuredPosts.slice(0, 8).map((post) => {
              const mainImage = post.properties["main-image"]?.url || "";
              const slug =
                post.properties.Slug?.rich_text?.[0]?.plain_text || "";
              const postUrl = `${href}/${slug}`;

              return (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="blog_post relative cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setHoveredPostId(post.id)}
                  onMouseLeave={() => setHoveredPostId(null)}
                >
                  <Link
                    href={postUrl}
                    className="block w-full h-full absolute top-0 left-0 z-10"
                  >
                    <span className="sr-only">
                      {post.properties.Name?.title?.[0]?.text?.content ||
                        "Xem chi tiết"}
                    </span>
                  </Link>
                  <img
                    src={mainImage}
                    alt={
                      post.properties.Name?.title?.[0]?.text?.content ||
                      "Blog Post"
                    }
                    className="blog_post_image"
                  />
                  <div className="blog_post_detail">
                    <h5 className="blog_post_heading pb-4">
                      {post.properties.Name?.title?.[0]?.text?.content ||
                        "Untitled"}
                    </h5>
                    <div className="relative z-20 pointer-events-auto">
                      <Button text={cta} href={postUrl} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      ) : (
        <motion.div variants={itemVariants} className="text-center py-12">
          <p>Loading featured posts...</p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default BlogSection;
