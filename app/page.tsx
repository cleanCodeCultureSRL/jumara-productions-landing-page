"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Contact from "@/components/contact";
import WorkStyle from "@/components/workstyle";
import Clients from "@/components/clients";
import Stats from "@/components/stats";
import Hero from "@/components/hero";
import { ServiceCard, services } from "./ce-facem/page";

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

        {/* Service Grid Section */}
        <section className="bg-white text-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center relative">
              <span className="inline-block relative z-10 text-[#061425]">
                CE FACEM NOI
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600"></span>
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  image={service.image}
                  slug={service.slug}
                  size={service.size}
                />
              ))}
            </div>
          </div>
        </section>

        {/* DE CE JUMARA PRODUCTIONS Section */}
        <section className="relative text-white py-16 overflow-hidden">
          {/* Background image that changes on hover with top and bottom fades */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `linear-gradient(to bottom, #061425, transparent 15%, transparent 85%, #061425), url('/studio.jpg')`,
              opacity: 0.3,
            }}
          ></div>

          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="inline-block relative z-10">
                DE CE JUMARA PRODUCTIONS
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600"></span>
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              {[
                { title: "STUDIO", image: "/studio.jpg" },
                { title: "DIGITAL FIRST", image: "/office.jpg" },
                { title: "SOCIAL MEDIA NATIVES", image: "/studio.jpg" },
                { title: "IN-HOUSE CREATIVE", image: "/office.jpg" },
                { title: "BULK SHOOTING", image: "/studio.jpg" },
                { title: "END-TO-END CONTENT TEAM", image: "/office.jpg" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="mb-4 py-4 cursor-pointer transition-colors px-4 rounded"
                  onMouseEnter={(e) => {
                    const bgElement = e.currentTarget
                      .closest("section")
                      ?.querySelector(".absolute");
                    if (bgElement) {
                      bgElement.style.backgroundImage = `url('${item.image}')`;
                    }
                  }}
                >
                  <h3 className="text-xl font-bold tracking-wider transition-transform duration-300 hover:scale-110 inline-block">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="relative h-24 overflow-hidden bg-[#061425]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path d="M0,150 L0,100 Q250,0 500,100 L500,150 Z" fill="white" />
          </svg>
        </div>
        {/* Testimonials Section */}
        <section className="bg-white py-16 relative">
          <div className="container mx-auto px-6 pt-12">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="inline-block relative z-10 text-[#061425]">
                CE SPUN CLIENȚII NOȘTRI
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600"></span>
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Alexandra Popescu",
                  position: "Marketing Director, TechCorp",
                  testimonial:
                    "Colaborarea cu Jumara Productions a fost o revelație pentru brandul nostru. Conținutul creat de ei a dus la o creștere de 45% în engagement pe canalele sociale.",
                  image: "/avatar1.jpg",
                },
                {
                  name: "Mihai Dumitrescu",
                  position: "CEO, Foodie Brands",
                  testimonial:
                    "Suntem impresionați de calitatea și creativitatea materialelor video. Echipa Jumara înțelege perfect mesajul nostru și îl transmite într-un mod care rezonează cu audiența.",
                  image: "/avatar2.jpg",
                },
                {
                  name: "Elena Ionescu",
                  position: "Brand Manager, FashionStep",
                  testimonial:
                    "Profesionalismul și eficiența sunt cuvintele care definesc Jumara. Au livrat întotdeauna la timp și rezultatele au depășit așteptările noastre de fiecare dată.",
                  image: "/avatar3.jpg",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                      {/* You can replace with actual images when available */}
                      <div className="w-full h-full bg-gradient-to-r from-orange-400 to-red-500"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#061425]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic flex-grow">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex text-yellow-500 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
