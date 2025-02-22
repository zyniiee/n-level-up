// 1. Create a new file: src/context/CourseContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { NotionCourses } from "@/types";

interface CourseContextType {
  courses: NotionCourses[];
  isLoading: boolean;
  error: string | null;
}

const CourseContext = createContext<CourseContextType>({
  courses: [],
  isLoading: true,
  error: null,
});

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<NotionCourses[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.allCourses);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load courses");
        setIsLoading(false);
      });
  }, []);

  return (
    <CourseContext.Provider value={{ courses, isLoading, error }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
