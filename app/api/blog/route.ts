import { NextResponse } from "next/server";
import { getCachedBlogData } from "@/lib/cached-notion";

export async function GET() {
  try {
    const blogData = await getCachedBlogData();

    if ("error" in blogData) {
      return NextResponse.json({ error: blogData.error }, { status: 500 });
    }

    const featured = blogData.allPosts.filter(
      (post) => post.properties.Featured?.checkbox === true
    );

    return NextResponse.json({
      allPosts: blogData.allPosts,
      featured: featured,
    });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog data" },
      { status: 500 }
    );
  }
}
