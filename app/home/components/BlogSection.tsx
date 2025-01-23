import React from "react";
import { Blog } from "@/types";
import Button from "@/components/ui/Button/button";
import styles from "../styles/home.module.css";
import { generateSlug } from "@/lib/utils";

interface BlogListProps {
  posts: Blog[];
}

const BlogSection: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section className="section_container">
      {/* Iterate over blogs */}
      {posts.map((blog, index) => (
        <div key={index} className="blog-category">
          <div className="flex justify-between items-end pb-8">
            <h3 className="w-1/2">{blog.title}</h3>
            <Button text={blog.cta} href={blog.href}></Button>
          </div>

          {/* Iterate over posts within each blog */}
          <div className={`${styles.blog_posts} grid grid-cols-4 gap-4`}>
            {blog.post.slice(0, 8).map((post) => (
              <div key={post.id} className={`${styles.blog_post} `}>
                <img
                  src={post.mainImage}
                  alt={post.name}
                  className={`${styles.blog_post_image} `}
                />
                <div className={`${styles.blog_post_detail} `}>
                  <h5 className={`${styles.blog_post_heading} pb-4`}>
                    {post.name}
                  </h5>
                  <Button
                    text={blog.cta}
                    href={`${blog.href}/${generateSlug(post.name)}`}
                  ></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
