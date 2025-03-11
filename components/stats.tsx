"use client";

import { Eye, Film, Users } from "lucide-react";
import { forwardRef, useEffect, useState } from "react";

const Stats = forwardRef<
  HTMLElement,
  { aboutUsRef: React.RefObject<HTMLElement> }
>(({ aboutUsRef }, ref) => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [viewsCount, setViewsCount] = useState(0);
  const [videosCount, setVideosCount] = useState(0);
  const [brandsCount, setBrandsCount] = useState(0);

  const colors = {
    orange: "#cb7536",
    navy: "#061425",
    white: "#efddc5",
    black: "#061425",
    red: "#e05e3d",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = ref as React.RefObject<HTMLElement>;
    if (element && element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element && element.current) {
        observer.unobserve(element.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (!statsVisible) return;

    const duration = 2000; // Animation duration in milliseconds
    const finalViews = 50;
    const finalVideos = 1000;
    const finalBrands = 30;
    const framesPerSecond = 60;
    const totalFrames = (duration / 1000) * framesPerSecond;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setViewsCount(Math.floor(progress * finalViews));
      setVideosCount(Math.floor(progress * finalVideos));
      setBrandsCount(Math.floor(progress * finalBrands));

      if (frame === totalFrames) {
        clearInterval(timer);
        setViewsCount(finalViews);
        setVideosCount(finalVideos);
        setBrandsCount(finalBrands);
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(timer);
  }, [statsVisible]);

  return (
    <>
      <section className={`bg-[#061425] text-[${colors.white}] py-16  px-4`}>
        <div className="container mx-auto px-4">
          <h3
            className={`text-2xl md:text-3xl font-bold mb-4 font-monumentRegular text-[${colors.red}]`}
          >
            JUMARĂ PRODUCTIONS.
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            PRODUCȚIE VIDEO DE BUN GUST.
          </h2>
        </div>
      </section>
      <section
        className="bg-[#061425] py-16 relative overflow-hidden"
        id="aboutUs"
        ref={(el) => {
          if (aboutUsRef) aboutUsRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref) ref.current = el;
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-stretch -mx-4">
            <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
              <div
                className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="relative z-10">
                  <Eye
                    className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`}
                  />
                  <h3
                    className={`text-4xl font-bold text-[${colors.white}] mb-2`}
                  >
                    {viewsCount}+ milioane
                  </h3>
                  <p className={`text-xl text-[${colors.white}]`}>
                    vizualizări
                  </p>
                </div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}
                ></div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
              <div
                className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="relative z-10">
                  <Film
                    className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`}
                  />
                  <h3
                    className={`text-4xl font-bold text-[${colors.white}] mb-2`}
                  >
                    {videosCount}+
                  </h3>
                  <p className={`text-xl text-[${colors.white}]`}>
                    videoclipuri realizate
                  </p>
                </div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}
                ></div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4">
              <div
                className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="relative z-10">
                  <Users
                    className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`}
                  />
                  <h3
                    className={`text-4xl font-bold text-[${colors.white}] mb-2`}
                  >
                    {brandsCount}+
                  </h3>
                  <p className={`text-xl text-[${colors.white}]`}>branduri</p>
                </div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute bottom-0 right-0 w-1/2 h-1/2 bg-[${colors.red}] rounded-tl-full opacity-5 transform rotate-45`}
        ></div>
      </section>
    </>
  );
});

Stats.displayName = "Stats";

export default Stats;
