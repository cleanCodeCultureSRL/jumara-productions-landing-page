"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText = ({ text, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 10); // Adjust typing speed here

    return () => clearInterval(timer);
  }, [isVisible, text]);

  return (
    <div ref={textRef} className={`relative ${className}`}>
      <div>{displayText}</div>

      <div
        className="invisible absolute top-0 left-0 h-0 overflow-hidden"
        aria-hidden="true"
      >
        {text}
      </div>
    </div>
  );
};

export default TypewriterText;
