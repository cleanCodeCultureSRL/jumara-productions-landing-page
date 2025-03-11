"use client";

import { ReactNode } from "react";
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
  return (
    <div className="min-h-screen flex flex-col relative bg-[#061425]">
      <Header />

      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex items-end h-full">
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              {title}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-16 px-6">
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
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={rightImage}
                      alt="Content Image"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-md shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Flexible Content Section - This will be different for each page */}
        {children}

        {/* Wave separator before contact */}
        <div className="relative h-24 overflow-hidden bg-white">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path d="M0,0 L0,100 Q250,150 500,100 L500,0 Z" fill="#061425" />
          </svg>
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
