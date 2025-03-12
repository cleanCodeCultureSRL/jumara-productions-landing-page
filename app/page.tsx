"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Contact from "@/components/contact";
import WorkStyle from "@/components/workstyle";
import Clients from "@/components/clients";
import Stats from "@/components/stats";
import Hero from "@/components/hero";

export const colors = {
  orange: "#cb7536",
  navy: "#061425",
  white: "#efddc5",
  black: "#061425",
  red: "#e05e3d",
};

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const statsRef = useRef(null);
  const howWeWorkRef = useRef(null);
  const contactRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    const sectionId = window.location.hash.replace("#", "");
    const sectionRef = {
      home: homeRef,
      about: aboutUsRef,
      howWeWork: howWeWorkRef,
      contact: contactRef,
    }[sectionId];

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setActiveSection("home");
      } else if (currentScrollY > lastScrollY) {
        setActiveSection((prevSection) => prevSection);
      } else {
        // Scrolling up
        // You can add any specific logic for scroll up if needed
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.querySelector(".menu-container");
      if (menuElement && !menuElement.contains(event.target)) {
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

  const closeSnackbar = () => setSnackbar(null);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#061425]">
      <Header />

      <main className="flex-grow z-10 relative">
        <Hero homeRef={homeRef} />

        <div className="relative h-24 overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0,150 L0,40 Q250,80 500,40 L500,150 Z"
              fill={colors.navy}
            />
          </svg>
        </div>

        <Stats ref={statsRef} aboutUsRef={aboutUsRef} />

        <div className="relative h-24 overflow-hidden bg-[#061425]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path d="M0,150 L0,100 Q250,0 500,100 L500,150 Z" fill="white" />
          </svg>
        </div>

        <Clients ref={clientsRef} />

        <div className="relative h-24 overflow-hidden bg-[#061425]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path d="M0,0 L0,50 Q250,150 500,50 L500,0 Z" fill="white" />
          </svg>
        </div>

        <WorkStyle ref={howWeWorkRef} />

        <div className="relative h-24 overflow-hidden bg-white">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0,0 L0,100 Q250,150 500,100 L500,0 Z"
              fill={colors.navy}
            />
          </svg>
        </div>

        <Contact isHomePage={true} />
      </main>

      <Footer />

      {snackbar && (
        <div className="fixed bottom-4 right-4 bg-[#e05e3d] text-white px-4 py-2 rounded-md">
          {snackbar.message}
          <button onClick={closeSnackbar} className="ml-2 font-bold">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
