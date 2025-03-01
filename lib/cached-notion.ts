import { cache } from "react";
import { getDatabaseItems } from "@/lib/notion";
import {
  NotionBlogPost,
  NotionCourse,
  NotionGallery,
  NotionGocNhin,
} from "@/types";

export type BlogDataResult =
  | { error: string }
  | {
      featured: NotionBlogPost[];
      allPosts: NotionBlogPost[];
      filtered: { [key: string]: NotionBlogPost[] };
    };

export type CoursesDataResult =
  | { error: string }
  | {
      allCourses: NotionCourse[];
    };

export type GalleryDataResult =
  | { error: string }
  | {
      featured: NotionGallery[];
      allPosts: NotionGallery[];
    };

export type GocNhinDataResult =
  | { error: string }
  | {
      featured: NotionGocNhin[];
      allPosts: NotionGocNhin[];
    };

export const getCachedBlogData = cache(async (): Promise<BlogDataResult> => {
  const blogData = await getDatabaseItems(process.env.NOTION_BLOG_ID!);
  if (!Array.isArray(blogData) || blogData.length === 0) {
    return { error: "No Blog found in Notion" };
  }

  // Use a type assertion to tell TypeScript these are NotionBlogPost objects
  const typedBlogData = blogData as unknown as NotionBlogPost[];

  const publishedPosts = typedBlogData.filter(
    (post) => post.properties.Status?.status?.name === "Published"
  );

  const featuredPosts = publishedPosts.filter(
    (post) => post.properties.Featured?.checkbox === true
  );

  const filteredPosts = {
    // Original categories as properties
    midjourney: publishedPosts.filter(
      (post) => post.properties.Midjourney?.checkbox === true
    ),
    typo: publishedPosts.filter(
      (post) => post.properties.Typo?.checkbox === true
    ),
    uiux: publishedPosts.filter(
      (post) => post.properties.UIUX?.checkbox === true
    ),
    layout: publishedPosts.filter(
      (post) => post.properties.Layout?.checkbox === true
    ),
    branding: publishedPosts.filter(
      (post) => post.properties.Branding?.checkbox === true
    ),
    idea: publishedPosts.filter(
      (post) => post.properties.Idea?.checkbox === true
    ),
    hideSlide: publishedPosts.filter(
      (post) => post.properties["Hide Slide"]?.checkbox === true
    ), // Fixed typo in properties name
  };

  return {
    allPosts: publishedPosts,
    featured: featuredPosts,
    filtered: filteredPosts,
  };
});

export const getCachedCoursesData = cache(
  async (): Promise<CoursesDataResult> => {
    const coursesData = await getDatabaseItems(process.env.NOTION_COURSES_ID!);
    if (!Array.isArray(coursesData) || coursesData.length === 0) {
      return { error: "No Courses found in Notion" };
    }

    // Use a type assertion
    const typedCoursesData = coursesData as unknown as NotionCourse[];

    const publishedCourses = typedCoursesData
      .filter(
        (course) => course.properties.Status?.status?.name === "Published"
      )
      .sort((a, b) => {
        const orderA = a.properties["Thứ tự"]?.number || 0;
        const orderB = b.properties["Thứ tự"]?.number || 0;
        return orderA - orderB;
      });

    return {
      allCourses: publishedCourses,
    };
  }
);

export const getCachedGalleryData = cache(
  async (): Promise<GalleryDataResult> => {
    const galleryData = await getDatabaseItems(process.env.NOTION_GALLERY_ID!);
    if (!Array.isArray(galleryData) || galleryData.length === 0) {
      return { error: "No Gallery items found in Notion" };
    }

    // Use a type assertion
    const typedGalleryData = galleryData as unknown as NotionGallery[];

    const publishedPosts = typedGalleryData.filter(
      (post) => post.properties.Status?.status?.name === "Published"
    );

    const featuredPosts = publishedPosts.filter(
      (post) => post.properties.Featured?.checkbox === true
    );

    return {
      featured: featuredPosts,
      allPosts: publishedPosts,
    };
  }
);

export const getCachedGocnhinData = cache(
  async (): Promise<GocNhinDataResult> => {
    const gocnhinData = await getDatabaseItems(process.env.NOTION_GOCNHIN_ID!);
    if (!Array.isArray(gocnhinData) || gocnhinData.length === 0) {
      return { error: "No Goc Nhin items found in Notion" };
    }

    // Use a type assertion
    const typedGocnhinData = gocnhinData as unknown as NotionGocNhin[];

    const publishedPosts = typedGocnhinData.filter(
      (post) => post.properties.Status?.status?.name === "Published"
    );

    const featuredPosts = publishedPosts.filter(
      (post) => post.properties.Featured?.checkbox === true
    );

    return {
      featured: featuredPosts,
      allPosts: publishedPosts,
    };
  }
);
