"use client";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { NavLinkArray } from "@/components/utils/NavLinksArray";
import Link from "next/link";
import Logo from "../../../assets/Logo.webp";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div className="absolute w-full h-full bg-gray-200 py-7 px-5 sm:px-10 lg:px-20 ">
      <div className="flex justify-between items-center">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div>
          <X className="w-10 h-10" />
        </div>
      </div>
      <div>
        {NavLinkArray.map((nav,index) => (
          <Link key={index} href={nav.href}>{nav.label}</Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
