import { NextResponse } from "next/server";
import { getDatabaseItems } from "@/lib/notion";
import { getCachedGalleryData } from "@/lib/cached-notion";

export async function GET() {
  try {
    const data = await getCachedGalleryData();

    if ("error" in data) {
      return NextResponse.json({ error: data.error });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Gallery API error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
