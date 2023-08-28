"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../components/assets/Logo.webp";
import { NavLinkArray } from "@/components/utils/NavLinksArray";
import Link from "next/link";
import { Search, ShoppingCart, MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  if (!isNavOpen)
    return (
      <div className="flex justify-between items-center py-7 px-5 sm:px-10 lg:px-20 transition">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-14 ">
          <div className="flex gap-10 text-lg">
            {NavLinkArray.map((NavItem,index) => (
              <Link key={index} href={NavItem.href}>{NavItem.label}</Link>
            ))}
          </div>
          <div className="flex items-center p-1 border border-gray-300 rounded w-80">
            <Search className="h-4" />
            <input
              type="input"
              placeholder="Search..."
              className="outline-none"
            />
          </div>
          <Link href="/cart">
            <div className="hidden lg:flex bg-gray-200 p-3 rounded-full relative">
              <span className="absolute bg-red-600 p-1 rounded-full right-0 top-0 text-xs text-gray-100">
                {cartItems}
              </span>
              <ShoppingCart />
            </div>
          </Link>
        </div>
        <div className="lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          <div className="lg:hidden ">
            <MenuIcon className="w-10 h-10" />
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className="absolute w-full h-full bg-white md:py-7 py-3 px-5 sm:px-10 md:px-20 transition">
        <div className="flex justify-between items-center">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div onClick={() => setIsNavOpen(!isNavOpen)}>
            <X className="w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center h-full w-full">
          <div className="flex bg-gray-200 p-3 rounded-full relative">
            <span className="absolute bg-red-600 p-1 rounded-full right-0 top-0 text-xs text-gray-100">
              {cartItems}
            </span>
            <ShoppingCart />
          </div>
          {NavLinkArray.map((nav, index) => (
            <Link key={index} href={nav.href}>
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Navbar;
