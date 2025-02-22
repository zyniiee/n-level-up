"use client";

import { CourseProvider } from "../context/CourseContext";
import FooterSection from "@/components/Footer/FooterSection";
import Header from "@/components/Header/Header";
import React, { ReactNode } from "react";
import { footerData } from "@/constants";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="page-container">
      <div className="mx-auto">
        <CourseProvider>
          <Header />
          <div className="">{children}</div>
          <FooterSection footer={footerData} />
        </CourseProvider>
      </div>
    </main>
  );
};

export default Layout;
