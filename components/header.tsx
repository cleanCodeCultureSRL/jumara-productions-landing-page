"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const colors = {
    orange: "#cb7536",
    navy: "#061425",
    white: "#efddc5",
    black: "#061425",
    red: "#e05e3d",
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuElement = document.querySelector(".menu-container");
      if (menuElement && !menuElement.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-[#061425] absolute top-0 left-0 right-0 z-50 sticky">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-h-[70px]">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logoWhite.png"
            alt="Jumară Productions Logo"
            width={80}
            height={40}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 h-full py-2">
          <Link
            href="/"
            className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group`}
          >
            ACASĂ
            <span
              className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`}
            />
          </Link>
          <Link
            href="/ce-facem"
            className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group`}
          >
            CE FACEM
            <span
              className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`}
            />
          </Link>
          <Link
            href="/how-we-work"
            className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group`}
          >
            CUM O FACEM
            <span
              className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`}
            />
          </Link>
          <Link
            href="/about-us"
            className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group`}
          >
            ECHIPA
            <span
              className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`}
            />
          </Link>

          <Link
            href="/contact"
            className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group`}
          >
            CONTACT
            <span
              className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`}
            />
          </Link>
        </nav>
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="menu-container md:hidden bg-[#061425] bg-opacity-70">
          <Link
            href="/"
            className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}
            onClick={() => setIsMenuOpen(false)}
          >
            ACASĂ
          </Link>
          <Link
            href="/how-we-work"
            className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}
            onClick={() => setIsMenuOpen(false)}
          >
            HOW WE WORK
          </Link>
          <Link
            href="/about-us"
            className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/services"
            className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}
            onClick={() => setIsMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
