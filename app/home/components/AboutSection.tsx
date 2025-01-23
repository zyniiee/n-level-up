import React from "react";
import { home } from "@/constants";
import Button from "@/components/ui/Button/button";
const { heading, sub_heading, cta } = home[0].about;
const AboutSection = () => {
  return (
    <section className="grid grid-cols-3 gap-4 section_container">
      <div className="col-span-1"></div>
      <div className="col-span-2">
        <h2 className="page_about-heading text-3xl">{heading}</h2>
        <p className="page_about-subHeading pt-10 pb-10">{sub_heading}</p>
        <Button text={cta} href="/about"></Button>
      </div>
    </section>
  );
};

export default AboutSection;
