"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(true);

  const user = false;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <Image src={isOpen ? "/open.png" : "/close.png"} alt="menu" width={20} height={20} onClick={toggleMenu} />
      </div>
      {!isOpen && (
        <div className="bg-rose-600 text-white absolute left-0 top-32 w-screen h-[calc(100vh-8rem)] flex justify-center items-center flex-col gap-8 text-2xl font-semibold z-10" onClick={toggleMenu}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className="hover:text-3xl transition-all duration-500">
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" className="hover:text-3xl transition-all duration-500">
              Login
            </Link>
          ) : (
            <Link href="/orders" className="hover:text-3xl transition-all duration-500">
              Order
            </Link>
          )}
          <Cart />
        </div>
      )}
    </>
  );
}
