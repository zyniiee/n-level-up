"use client";
import { useState, useEffect } from "react";
import { NotionGocNhin } from "@/types";

export function useGocNhin() {
  const [featuredPosts, setFeaturedPosts] = useState<NotionGocNhin[]>([]);
  const [allPosts, setAllPosts] = useState<NotionGocNhin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/gocnhin")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Goc Nhin posts");
        }
        return res.json();
      })
      .then((data) => {
        setFeaturedPosts(data.featured || []);
        setAllPosts(data.allPosts || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Goc Nhin posts:", err);
        setError("Failed to load Goc Nhin posts");
        setIsLoading(false);
      });
  }, []);

  return { featuredPosts, allPosts, isLoading, error };
}
