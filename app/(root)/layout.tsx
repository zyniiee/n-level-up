import FooterSection from "@/components/Footer/FooterSection";
import Header from "@/components/Header/Header";
import React, { ReactNode } from "react";
import { footerData } from "@/constants";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="page-container">
      <div className="mx-auto">
        <Header />
        <div className="">{children}</div>
        <FooterSection footer={footerData} />
      </div>
    </main>
  );
};

export default Layout;
