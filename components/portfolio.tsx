"use client";

import { useEffect } from "react";

interface PortfolioProps {
  title?: string;
  description?: string;
  items?: number[];
  videoSrc?: string;
}

export default function Portfolio({
  title = "PORTOFOLIU YOUTUBE",
  description = "Iată câteva exemple de videoclipuri YouTube pe care le-am realizat pentru clienții noștri.",
  items = [1, 2, 3],
  videoSrc = "/heroVideo.mp4",
}: PortfolioProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-x-0", "opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".slide-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        <p className="text-center mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((number, index) => (
            <div
              key={number}
              className="aspect-video relative bg-gray-800 rounded-lg overflow-hidden group transform -translate-x-full opacity-0 transition-all duration-700 ease-out slide-in"
              style={{ transitionDelay: `${index * 200}ms` }}
              data-aos="fade-right"
            >
              <video
                src={videoSrc}
                className="w-full h-full object-cover transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[15rem] md:text-[20rem] font-bold text-white opacity-70 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                {number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
