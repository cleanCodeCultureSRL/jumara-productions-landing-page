"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero({ homeRef }) {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = isMobile
        ? "/heroVideoMobile.mp4"
        : "/heroVideo.mp4";
      videoRef.current.load();
    }
  }, [isMobile]);

  return (
    <section
      id="home"
      ref={homeRef}
      className="relative h-screen"
      style={{ marginBottom: "-70px" }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
      >
        <source src={isMobile ? "/heroVideoMobile.mp4" : "/heroVideo.mp4"} />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
