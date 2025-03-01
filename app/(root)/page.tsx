import Image from "next/image";
import HeroSection from "../home/components/HeroSection";
import styles from "../home/styles/home.module.css";
import TextScroll from "../../components/Body/TextScroll";
import AboutSection from "../home/components/AboutSection";
import VideoSection from "../home/components/VideoSection";
import TextScrollLarge from "../home/components/TextScrollLarge";
import TeamSection from "../home/components/TeamSection";
import ReviewSection from "../../components/Body/ReviewSection";
import { home, footerData } from "@/constants";
import CoursesList from "../home/components/CoursesList";
import BlogSection from "../home/components/BlogSection";
import GocNhinSection from "../home/components/GocNhinSection";
import Project from "@/components/Project";
import FooterAbout from "../home/components/FooterAbout";

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
      <Project />
      <ReviewSection reviews={home[0].reviews} />
      <BlogSection />
      <GocNhinSection />
      <FooterAbout about={footerData.about} />
    </>
  );
};

export default Home;
