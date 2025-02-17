import { NextResponse } from "next/server";
import { getDatabaseItems } from "@/lib/notion";

export async function GET() {
  try {
    const galleryData = await getDatabaseItems(process.env.NOTION_GALLERY_ID!);

    // 🔍 Debug: Log raw Notion data
    //console.log("Raw Notion Data:", JSON.stringify(blogData, null, 2));

    if (!Array.isArray(galleryData) || galleryData.length === 0) {
      //console.log("No data found in Notion.");
      return NextResponse.json({ error: "No data found in Notion." });
    }

    //Filter only "Published" posts
    const publishedPosts = galleryData.filter(
      (post: any) => post.properties.Status?.status?.name === "Published"
    );

    // Filter only "Featured" posts
    const featuredPosts = publishedPosts.filter(
      (post: any) => post.properties.Featured?.checkbox === true
    );

    return NextResponse.json({
      featured: featuredPosts,
      allPosts: publishedPosts,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
