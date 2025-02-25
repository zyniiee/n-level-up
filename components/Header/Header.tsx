"use client";
import Link from "next/link";
import React, { useState } from "react";
import LottieAnimation from "./component/LottieAnimation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavMenu from "./component/NavMenu";
const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="nav w-full fixed z-20 top-0 left-0 right-0  ">
      <div className=" flex justify-between align-middle relative z-10 section_container_sml">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            className="w-[135px] max-sm:w-[110px]  md:w-[120px] lg:w-[135px] "
            width={135}
            height={100}
          />{" "}
        </Link>
        <div className="flex flex-row items-center gap-8">
          <div></div>
          <div>
            <LottieAnimation isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      <NavMenu isOpen={isMenuOpen} />
    </header>
  );
};
export default Header;
