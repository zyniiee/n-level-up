import { NextApiRequest, NextApiResponse } from "next";
import { getDatabaseItems } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const coursesData = await getDatabaseItems(process.env.NOTION_COURSES_ID!);
    if (!Array.isArray(coursesData) || coursesData.length === 0) {
      return NextResponse.json({ error: "No data found in Notion." });
    }

    //Filter only "Published" posts
    const publishedCourses = coursesData
      .filter(
        (course: any) => course.properties.Status?.status?.name === "Published"
      )
      .sort((a: any, b: any) => {
        const orderA = a.properties["Thứ tự"]?.number || 0;
        const orderB = b.properties["Thứ tự"]?.number || 0;
        return orderA - orderB;
      });

    return NextResponse.json({
      allCourses: publishedCourses,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
