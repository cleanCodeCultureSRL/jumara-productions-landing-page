"use client";

import { ReactNode, useRef, useState } from "react";
import Header from "@/components/header";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Image from "next/image";

interface PageTemplateProps {
  title: string;
  heroImage: string;
  content: string;
  rightImage?: string;
  children?: ReactNode;
}

export default function PageTemplate({
  title,
  heroImage,
  content,
  rightImage,
  children,
}: PageTemplateProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Calculate tilt with a maximum of 15 degrees rotation
    const tiltX = (y - 0.5) * 15;
    const tiltY = (0.5 - x) * 15;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    // Reset tilt when mouse leaves the image
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#061425]">
      <Header />

      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              src={heroImage}
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[#061425] bg-opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex items-end h-full">
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              {title}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-[#061425] text-white py-16 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2 lg:w-3/5">
                <div className="prose prose-lg max-w-none">
                  {content.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {rightImage && (
                <div className="w-full md:w-1/2 lg:w-2/5">
                  <div
                    ref={imageRef}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-md shadow-lg"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="w-full h-full transition-transform duration-200 ease-out"
                      style={{
                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.05, 1.05, 1.05)`,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Image
                        src={rightImage}
                        alt="Content Image"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Flexible Content Section - This will be different for each page */}
        {children}

        <Contact isHomePage={false} />
      </main>

      <Footer />
    </div>
  );
}
