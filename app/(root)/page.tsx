import Image from "next/image";
import HeroSection from "../home/components/HeroSection";
import styles from "../home/styles/home.module.css";
import TextScroll from "../home/components/TextScroll";
import AboutSection from "../home/components/AboutSection";
import VideoSection from "../home/components/VideoSection";
import TextScrollLarge from "../home/components/TextScrollLarge";
import TeamSection from "../home/components/TeamSection";
import ReviewSection from "../home/components/ReviewSection";
import ProjectSection from "../home/components/ProjectSection";
import BlogSection from "../home/components/BlogSection";
import CoursesListCover from "../home/components/CoursesListCover";
import { home, sampleBlog, sampleGocNhin } from "@/constants";
import CoursesList from "../home/components/CoursesList";
const Home = () => {
  return (
    <>
      <HeroSection />
      <TextScroll />
      <AboutSection />
      <VideoSection />
      <TextScrollLarge />
      <CoursesListCover />
      <TeamSection />
      <ProjectSection />
      <ReviewSection reviews={home[0].reviews} />
      <BlogSection posts={sampleBlog} />
      <BlogSection posts={sampleGocNhin} />
    </>
  );
};

export default Home;
