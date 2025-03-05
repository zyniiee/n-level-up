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
    <>
      <header className="w-full fixed z-30 top-0 left-0 right-0 overflow-hidden bg-[rgba(5,5,5,0.051)] backdrop-blur-md">
        <div className="section_container_sml mx-auto max-w-[1440px] w-full flex justify-between align-middle relative z-10">
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              className="w-[135px] max-sm:w-[110px] md:w-[120px] lg:w-[135px]"
              width={135}
              height={100}
            />
          </Link>
          <div className="flex flex-row items-center gap-8">
            <div></div>
            <div>
              <LottieAnimation isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </header>
      <NavMenu isOpen={isMenuOpen} />
    </>
  );
};

export default Header;
