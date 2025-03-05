// app/api/courses/route.ts
import { NextResponse } from "next/server";
import { getCachedCoursesData } from "@/lib/cached-notion";

export async function GET() {
  try {
    const coursesData = await getCachedCoursesData();
    return NextResponse.json(coursesData);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
