"use client";
import Link from "next/link";
import React from "react";
import LottieAnimation from "../LottieAnimation";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full fixed z-10 top-0 left-0 right-0 section_container_sml">
      <div className=" flex justify-between align-middle ">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={135} height={100} />
        </Link>
        <ul className="flex flex-row items-center gap-8">
          <li>
            <LottieAnimation />
          </li>
        </ul>
      </div>
    </header>
  );
};
/* <Link href="/library" className={cn("text-base cursor-pointer", pathname=== "/library"? "text-light-200": "text-light-100")} </Link>*/
export default Header;
