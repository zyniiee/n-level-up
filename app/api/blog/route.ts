import { NextResponse } from "next/server";
import { getDatabaseItems } from "@/lib/notion";
import { getCachedBlogData } from "@/lib/cached-notion";

export async function GET() {
  try {
    const data = await getCachedBlogData();

    if ("error" in data) {
      return NextResponse.json({ error: data.error });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Blog API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
