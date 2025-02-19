"use client";
import React from "react";
import { Footer } from "@/types";
import FooterAbout from "./component/FooterAbout";
import FooterCopyright from "./component/FooterCopyright";
import FooterHeading from "./component/FooterHeading";
import FooterLinks from "./component/FooterLinks";
import FooterSocial from "./component/FooterSocial";

const FooterSection = ({ footer }: { footer: Footer }) => {
  return (
    <footer className="flex flex-col overflow-hidden  xl:mt-0  mt-20">
      <FooterAbout about={footer.about} />
      <FooterHeading />
      <div className="section_container flex lg:justify-between lg:flex-row flex-col lg:items-end items-start gap-8 lg:gap-0">
        <FooterLinks footer={footer} />
        <FooterSocial socialMedia={footer.social_media} />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default FooterSection;
