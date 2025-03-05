import { NextResponse } from "next/server";
import { getCachedGocnhinData } from "@/lib/cached-notion";

export async function GET() {
  try {
    const gocnhinData = await getCachedGocnhinData();

    if ("error" in gocnhinData) {
      return NextResponse.json({ error: gocnhinData.error }, { status: 500 });
    }

    // Separate featured and all posts
    const featured = gocnhinData.allPosts.filter(
      (post) => post.properties.Featured?.checkbox === true
    );

    return NextResponse.json({
      allPosts: gocnhinData.allPosts,
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
