import { NextApiRequest, NextApiResponse } from "next";
import { getDatabaseItems } from "@/lib/notion";
import { NextResponse } from "next/server";
import { getCachedCoursesData } from "@/lib/cached-notion";
import { error } from "console";

export async function GET() {
  try {
    const data = await getCachedCoursesData();

    if ("error" in data) {
      return NextResponse.json({ error: data.error });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Courses API error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
