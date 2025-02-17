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
import { home, sampleBlog, sampleGocNhin } from "@/constants";
import CoursesList from "../home/components/CoursesList";
import BlogSection from "../home/components/BlogSection";
import GocNhinSection from "../home/components/GocNhinSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <TextScroll />
      <AboutSection />
      <VideoSection />
      <TextScrollLarge />
      <CoursesList />
      <TeamSection />
      <ProjectSection />
      <ReviewSection reviews={home[0].reviews} />
      <BlogSection />
      <GocNhinSection />
    </>
  );
};

export default Home;
