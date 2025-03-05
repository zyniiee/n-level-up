"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button/button";

interface PostCardProps {
  post: {
    id: string;
    properties: {
      Name?: {
        title?: Array<{ plain_text: string }>;
      };
      Slug?: {
        rich_text?: Array<{ plain_text: string }>;
      };
      "main-image"?: {
        url: string;
      };
    };
  };
  baseUrl: string;
  itemVariants?: any;
  ctaText?: string;
}
const PostCard = ({
  post,
  baseUrl,
  itemVariants,
  ctaText = "Xem chi tiết",
}: PostCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const mainImage = post.properties["main-image"]?.url || "";
  const slug = post.properties.Slug?.rich_text?.[0]?.plain_text || "";
  const postTitle = post.properties.Name?.title?.[0]?.plain_text || "Untitled";
  const postUrl = `${baseUrl}/${slug}`;
  return (
    <motion.div
      key={post.id}
      variants={itemVariants}
      className="blog_post relative cursor-pointer"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={postUrl}
        className="block w-full h-full absolute top-0 left-0 z-10"
      >
        <span className="sr-only">{postTitle || ctaText}</span>
      </Link>
      <img
        src={mainImage}
        alt={postTitle || "Blog Post"}
        className="blog_post_image"
      />
      <div className="blog_post_detail">
        <h5 className="blog_post_heading pb-4">{postTitle}</h5>
        <div className="relative z-20 pointer-events-auto">
          <Button text={ctaText} href={postUrl} isParentHovered={isHovered} />
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
