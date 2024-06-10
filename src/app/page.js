import Image from "next/image";
import FirstSection from "@/components/HomePage/FirstSection";
import SimpleSlider from "@/components/HomePage/Slider";
import AboutMe from "@/components/HomePage/AboutMe";
import WorkExperience from "@/components/HomePage/WorkExperience";
import Project from "@/components/HomePage/Project";
import Article from "@/components/HomePage/Article";
import Contact from "@/components/HomePage/Contact";
import LinkItem from "@/components/HomePage/LinkItem";
export default function Home() {
  return (
    <>
      <FirstSection />
      {/* <SimpleSlider /> */}
      <AboutMe />
      <WorkExperience />
      <Project />
      <Article />
      <Contact />
      <LinkItem />
    </>
  );
}
