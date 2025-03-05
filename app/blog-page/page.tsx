"use client";
import { useRef } from "react";
import Button from "@/components/ui/Button/button";
import { useGocNhin } from "@/app/hooks/useGocNhin";
import { useEffect, useState } from "react";
import PostCard from "@/components/Body/PostCard";
import { useBlog } from "../hooks/useBlog";

const BlogPage = () => {
  const { allPosts, isLoading, error } = useBlog();
  const href = "/blog-page";
  const cta = "Xem chi tiết";

  return (
    <section>
      {isLoading ? (
        <div className="text-center py-12">
          <p></p>
        </div>
      ) : error ? (
        <div>
          <p></p>
        </div>
      ) : allPosts.length > 0 ? (
        <div className="blog-category">
          <div className="blog_posts grid xl:grid-cols-4 grid-cols-2 gap-x-5 gap-y-8">
            {allPosts.slice(0, 8).map((post) => (
              <PostCard
                key={post.id}
                post={post}
                baseUrl={href}
                ctaText={cta}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p>No posts available</p>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
