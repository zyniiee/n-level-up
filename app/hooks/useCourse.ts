"use client";
import { useState, useEffect } from "react";
import { NotionCourse } from "@/types";

export function useCourses() {
  const [courses, setCourses] = useState<NotionCourse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }
        return res.json();
      })
      .then((data) => {
        setCourses(data.allCourses || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses");
        setIsLoading(false);
      });
  }, []);

  return { courses, isLoading, error };
}
