import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import CustomCursor from "@/components/ui/Cursor/CustomCursor";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Level Up",
  description: "By Zynieeeee",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body className={`${montserrat.variable} antialiased cursor-none`}>
      {" "}
      <CustomCursor />
      {children}
    </body>
  </html>
);

export default RootLayout;
