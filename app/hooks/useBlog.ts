"use client";
import { useState, useEffect } from "react";
import { NotionBlogPost } from "@/types";

export function useBlog() {
  const [featuredPosts, setFeaturedPosts] = useState<NotionBlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<NotionBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Blog posts");
        }
        return res.json();
      })
      .then((data) => {
        setFeaturedPosts(data.featured || []);
        setAllPosts(data.allPosts || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Blog posts:", err);
        setError("Failed to load Blog posts");
        setIsLoading(false);
      });
  }, []);

  return { featuredPosts, allPosts, isLoading, error };
}
