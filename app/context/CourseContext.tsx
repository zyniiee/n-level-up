import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { NotionCourse } from "@/types";

interface CourseContextType {
  courses: NotionCourse[];
  isLoading: boolean;
  error: string | null;
}

const CourseContext = createContext<CourseContextType>({
  courses: [],
  isLoading: true,
  error: null,
});

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<NotionCourse[]>([]);
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
