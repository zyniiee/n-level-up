import React from "react";
import { home } from "@/constants";
import Button from "@/components/ui/Button/button";
const { heading, sub_heading, cta } = home[0].about;
const AboutSection = () => {
  return (
    <section className="xl:grid grid-cols-3 gap-4 section_container flex">
      <div className="xl:col-span-1 block-hidden "></div>
      <div className="xl:col-span-2 ">
        <h2 className="page_about_heading xl:pt-0 pt-20 xl:text-3xl text-xl">
          {heading}
        </h2>
        <p className="page_about_subHeading pt-10 pb-10">{sub_heading}</p>
        <Button text={cta} href="/about"></Button>
      </div>
    </section>
  );
};

export default AboutSection;
