"use client";

import { Facebook, Heart, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#061425] text-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="z-10 absolute top-0 right-0 w-1/3 h-1/3 bg-[#e05e3d] rounded-tl-full opacity-20 transform rotate-180 scale-x-[-1]"></div>
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <Image
              src="/logoWhite.png"
              alt="Jumară Productions Logo"
              width={120}
              height={60}
              className="mb-4"
            />
            <p className="max-w-md text-xl font-bold">
              Producție video de bun gust.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 border-t border-gray-700 font-bold">
          <div className="flex flex-row justify-between w-full">
            <div>
              <p className="text-sm mb-2">
                © {new Date().getFullYear()} Jumară Productions. Toate
                drepturile rezervate.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/40770202977"
                className="hover:text-[#e05e3d] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/jumaraproductions.ro/"
                className="hover:text-[#e05e3d] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://web.facebook.com/jumaraproductions.ro"
                className="hover:text-[#e05e3d] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@jumaraproductions.ro"
                className="hover:text-[#e05e3d] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>

          <p className="text-sm flex items-center mb-4">
            Created with{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by{" "}
            <a
              href="https://www.cleancodeculture.com"
              className="ml-1 hover:text-[#e05e3d] transition-colors"
            >
              www.cleancodeculture.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
