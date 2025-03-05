import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import CustomCursor from "@/components/ui/Cursor/CustomCursor";
import Header from "@/components/Header/Header";
import FooterSection from "@/components/Footer/FooterSection";
import { footerData } from "@/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEVEL UP - Art & Design Courses",
  description:
    "Nơi mang lại những chia sẻ thực tế, kinh nghiệm làm việc, tài nguyên thiết kế v.v để các bạn sẽ có cái nhìn tích cực rằng: &quot;Thiết kế đồ họa dễ mà!&quot;",
  icons: {
    icon: "/icons/leveup-icon.png",
  },
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body className={`${montserrat.variable} antialiased cursor-none`}>
      {" "}
      <Header />
      <CustomCursor />
      {children}
      <FooterSection footer={footerData} />
    </body>
  </html>
);

export default RootLayout;
