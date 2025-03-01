// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Button from "@/components/ui/Button/button";
// import {
//   NotionBlog,
//   NotionGocNhin,
//   NotionCourses,
//   NotionGalleries,
// } from "@/types";

// interface PostCardProps {
//   post: NotionBlog | NotionGocNhin | NotionCourses | NotionGalleries;
//   href: string;
//   cta: string;
//   itemVariants: any;
//   onMouseEnter: (id: string) => void;
//   onMouseLeave: () => void;
// }

// const PostCard = ({
//   post,
//   href,
//   cta,
//   itemVariants,
//   onMouseEnter,
//   onMouseLeave,
// }: PostCardProps) => {
//   const mainImage = post.properties["main-image"]?.url || "";
//   const slug = post.properties.Slug?.rich_text?.[0]?.plain_text || "";
//   const postUrl = `${href}/${slug}`;
//   const title = post.properties.Name?.title?.[0].text?.content || "Untitiled";

//   return (
//     <motion.div
//       key={post.id}
//       variants={itemVariants}
//       className="blog_post relative cursor-pointer"
//       whileHover={{
//         scale: 1.03,
//         transition: { duration: 0.3 },
//       }}
//       onMouseEnter={() => onMouseEnter(post.id)}
//       onMouseLeave={onMouseLeave}
//     >
//       <Link
//         href={postUrl}
//         className="block w-full h-full absolute top-0 left-0 z-10"
//       >
//         <span className="sr-only">{title || ""}</span>
//       </Link>
//       <img
//         src={mainImage}
//         alt={title || "Blog Post Image"}
//         className="blog_post_image"
//       />
//       <div className="blog_post_detail">
//         <h5 className="blog_post_heading pb-4">{title || "Untitled"}</h5>
//         <div className="relative z-20 pointer-events-auto">
//           <Button text={cta} href={postUrl} />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PostCard;
