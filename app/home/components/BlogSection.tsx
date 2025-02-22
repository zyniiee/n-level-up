"use client";
import { useEffect, useState } from "react";
import { NotionBlog } from "@/types";
import Button from "@/components/ui/Button/button";

const BlogSection = () => {
  const [featuredPosts, setFeaturedPosts] = useState<NotionBlog[]>([]);
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

  return (
    <section className="section_container xl:mt-0  mt-20 ">
      {featuredPosts.length > 0 ? (
        <div className="blog-category">
          <div className="flex justify-between items-end pb-8">
            <h3 className="w-1/2 font-medium xl:text-[3vw] text-[4vw] leading-[125%]">
              {" "}
              {title}
            </h3>
            <Button text={cta} href={href} />
          </div>

          <div className="blog_posts grid xl:grid-cols-4 grid-cols-2 gap-4">
            {featuredPosts.slice(0, 8).map((post) => {
              const mainImage = post.properties["main-image"]?.url || "";
              const slug =
                post.properties.Slug?.rich_text?.[0]?.plain_text || "";

              return (
                <div key={post.id} className="blog_post">
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
                    <Button text={cta} href={`${href}/${slug}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>Loading Featured Blog Posts...</p>
      )}
    </section>
  );
};

export default BlogSection;
