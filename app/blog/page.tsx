import { getCachedBlogData } from "@/lib/cached-notion";
import React from "react";

const BlogPage = async () => {
  const blogData = await getCachedBlogData();

  // Handle the error case
  if ("error" in blogData) {
    return (
      <div className="p-4">
        <p className="text-red-500">Error: {blogData.error}</p>
      </div>
    );
  }

  const { allPosts } = blogData;

  return (
    <>
      {allPosts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.properties.Title?.title[0]?.plain_text || "Untitled"}</h2>
        </div>
      ))}
    </>
  );
};

export default BlogPage;
