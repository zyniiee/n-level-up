// // components/ContentSection.tsx
// "use client";
// import { useEffect, useState, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
// import Button from "@/components/ui/Button/button";
// import PostCard from "./PostCard";
// import { NotionBlog, NotionGocNhin, NotionGalleries } from "@/types";

// // Create a type for all possible post types
// type PostType = NotionBlog | NotionGocNhin | NotionGalleries;

// // Define filter categories
// type FilterCategory =
//   | "All"
//   | "Midjourney"
//   | "Typo"
//   | "UI/UX"
//   | "Layout"
//   | "Branding"
//   | "Identity"
//   | "Idea";

// interface PostCardSectionProps {
//   apiEndpoint: string;
//   title: string;
//   cta: string;
//   href: string;

//   // Content control options
//   contentType?: "featured" | "all" | "related";
//   limit?: number;
//   page?: number;
//   showPagination?: boolean;

//   // Filter options
//   showFilters?: boolean;
//   defaultFilter?: FilterCategory;

//   // Layout options
//   gridCols?: string;
//   withHeaderButton?: boolean;
//   className?: string;

//   // Animation options
//   animationEnabled?: boolean;

//   // Custom rendering
//   customLayout?: (
//     posts: PostType[],
//     itemVariants: any,
//     hoveredPostId: string | null,
//     setHoveredPostId: Function
//   ) => React.ReactNode;

//   // Additional fetching options
//   fetchParams?: Record<string, any>;
// }

// const PostCardSection = ({
//   apiEndpoint,
//   title,
//   cta,
//   href,
//   contentType = "featured",
//   limit = 8,
//   page = 1,
//   showPagination = false,
//   showFilters = false,
//   defaultFilter = "All",
//   gridCols = "xl:grid-cols-4 grid-cols-2",
//   withHeaderButton = true,
//   className = "section_container xl:mt-0 mt-20",
//   animationEnabled = true,
//   customLayout,
//   fetchParams = {},
// }: PostCardSectionProps) => {
//   // Content states
//   const [posts, setPosts] = useState<PostType[]>([]);
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);

//   // Filter state
//   const [activeFilter, setActiveFilter] =
//     useState<FilterCategory>(defaultFilter);

//   // Animation refs and controls
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
//   const mainControls = useAnimation();

//   // Define available filters
//   const filterOptions: FilterCategory[] = [
//     "All",
//     "Midjourney",
//     "UI/UX",
//     "Layout",
//     "Branding",
//     "Identity",
//     "Typo",
//     "Idea",
//   ];

//   // Fetch data whenever relevant props change
//   useEffect(() => {
//     fetchData();
//   }, [apiEndpoint, contentType, limit, page, activeFilter, fetchParams]);

//   // Animation control
//   useEffect(() => {
//     if (isInView && animationEnabled) {
//       mainControls.start("visible");
//     } else if (!isInView && animationEnabled) {
//       mainControls.start("hidden");
//     }
//   }, [isInView, mainControls, animationEnabled]);

//   // Data fetching function
//   const fetchData = async () => {
//     setLoading(true);

//     // Build query parameters
//     const queryParams = new URLSearchParams({
//       page: page.toString(),
//       limit: limit.toString(),
//       type: contentType,
//       filter: activeFilter !== "All" ? activeFilter.toLowerCase() : "",
//       ...fetchParams,
//     });

//     try {
//       const res = await fetch(`${apiEndpoint}?${queryParams.toString()}`);
//       const data = await res.json();

//       // Handle different response structures based on content type
//       if (contentType === "featured") {
//         setPosts(data.featured || []);
//       } else if (contentType === "related") {
//         setPosts(data.related || []);
//       } else {
//         setPosts(data.posts || []);
//       }

//       // Set pagination data
//       setTotalItems(data.totalItems || 0);

//       // Calculate total pages if not provided directly
//       if (data.totalPages) {
//         setTotalPages(data.totalPages);
//       } else if (data.totalItems) {
//         setTotalPages(Math.ceil(data.totalItems / limit));
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setLoading(false);
//     }
//   };

//   // Handle filter change
//   const handleFilterChange = (filter: FilterCategory) => {
//     setActiveFilter(filter);
//     // Reset to first page when changing filters
//     if (page !== 1) {
//       handlePageChange(1);
//     }
//   };

//   // Handle page change
//   const handlePageChange = (newPage: number) => {
//     // Update URL with new page parameter
//     const url = new URL(window.location.href);
//     url.searchParams.set("page", newPage.toString());

//     // If using filter, include it in the URL
//     if (activeFilter !== "All") {
//       url.searchParams.set("filter", activeFilter.toLowerCase());
//     } else {
//       url.searchParams.delete("filter");
//     }

//     window.history.pushState({}, "", url.toString());

//     // If using Next.js app router, you can use useRouter() instead
//     // const router = useRouter();
//     // router.push(`${href}?page=${newPage}&filter=${activeFilter !== 'All' ? activeFilter.toLowerCase() : ''}`);
//   };

//   // Animation variants
//   const sectionVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Component type based on animation setting
//   const SectionComponent = animationEnabled ? motion.section : "section";
//   const DivComponent = animationEnabled ? motion.div : "div";

//   return (
//     <SectionComponent
//       ref={sectionRef}
//       initial={animationEnabled ? "hidden" : undefined}
//       animate={animationEnabled ? mainControls : undefined}
//       variants={animationEnabled ? sectionVariants : undefined}
//       className={className}
//     >
//       {loading ? (
//         <DivComponent
//           variants={animationEnabled ? itemVariants : undefined}
//           className="text-center py-12"
//         >
//           <p>Loading content...</p>
//         </DivComponent>
//       ) : posts.length > 0 ? (
//         <div className="content-category">
//           {/* Section Header */}
//           <DivComponent
//             className="flex justify-between items-end pb-8"
//             variants={animationEnabled ? itemVariants : undefined}
//           >
//             <h3 className="w-2/5 font-medium text-blog-heading leading-[125%]">
//               {title}
//             </h3>
//             {withHeaderButton && <Button text={cta} href={href} />}
//           </DivComponent>

//           {/* Filter Options */}
//           {showFilters && (
//             <DivComponent
//               className="filter-options flex flex-wrap gap-4 mb-8"
//               variants={animationEnabled ? itemVariants : undefined}
//             >
//               {filterOptions.map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => handleFilterChange(filter)}
//                   className={`px-4 py-2 rounded-full transition-all ${
//                     activeFilter === filter
//                       ? "bg-primary text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </DivComponent>
//           )}

//           {/* Content Grid */}
//           {customLayout ? (
//             customLayout(posts, itemVariants, hoveredPostId, setHoveredPostId)
//           ) : (
//             <DivComponent
//               className={`content_posts grid ${gridCols} gap-x-5 gap-y-8`}
//               variants={animationEnabled ? sectionVariants : undefined}
//             >
//               {posts.map((post) => (
//                 <PostCard
//                   key={post.id}
//                   post={post}
//                   href={href}
//                   cta={cta}
//                   itemVariants={itemVariants}
//                   onMouseEnter={(id) => setHoveredPostId(id)}
//                   onMouseLeave={() => setHoveredPostId(null)}
//                 />
//               ))}
//             </DivComponent>
//           )}

//           {/* Pagination */}
//           {showPagination && totalPages > 1 && (
//             <DivComponent
//               className="pagination-container mt-8 flex justify-center"
//               variants={animationEnabled ? itemVariants : undefined}
//             >
//               <div className="flex flex-wrap gap-2 justify-center">
//                 {/* Previous Page Button */}
//                 <button
//                   onClick={() => page > 1 && handlePageChange(page - 1)}
//                   disabled={page === 1}
//                   className={`px-3 py-1 rounded ${
//                     page === 1
//                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                       : "bg-gray-200 hover:bg-gray-300"
//                   }`}
//                 >
//                   Previous
//                 </button>

//                 {/* Page Number Buttons */}
//                 {Array.from({ length: totalPages }, (_, i) => {
//                   // Show current page, first, last, and pages around current
//                   const pageNum = i + 1;
//                   const showPageButton =
//                     pageNum === 1 ||
//                     pageNum === totalPages ||
//                     Math.abs(pageNum - page) <= 2;

//                   // Ellipsis logic
//                   if (!showPageButton) {
//                     if (
//                       (pageNum === 2 && page > 4) ||
//                       (pageNum === totalPages - 1 && page < totalPages - 3)
//                     ) {
//                       return (
//                         <span key={`ellipsis-${pageNum}`} className="px-3 py-1">
//                           ...
//                         </span>
//                       );
//                     }
//                     return null;
//                   }

//                   return (
//                     <button
//                       key={pageNum}
//                       onClick={() => handlePageChange(pageNum)}
//                       className={`px-3 py-1 rounded ${
//                         page === pageNum
//                           ? "bg-primary text-white"
//                           : "bg-gray-200 hover:bg-gray-300"
//                       }`}
//                     >
//                       {pageNum}
//                     </button>
//                   );
//                 }).filter(Boolean)}

//                 {/* Next Page Button */}
//                 <button
//                   onClick={() =>
//                     page < totalPages && handlePageChange(page + 1)
//                   }
//                   disabled={page === totalPages}
//                   className={`px-3 py-1 rounded ${
//                     page === totalPages
//                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                       : "bg-gray-200 hover:bg-gray-300"
//                   }`}
//                 >
//                   Next
//                 </button>
//               </div>
//             </DivComponent>
//           )}
//         </div>
//       ) : (
//         <DivComponent
//           variants={animationEnabled ? itemVariants : undefined}
//           className="text-center py-12"
//         >
//           <p>No content found for the selected filters.</p>
//         </DivComponent>
//       )}
//     </SectionComponent>
//   );
// };

// export default PostCardSection;
