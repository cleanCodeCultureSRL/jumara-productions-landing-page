"use client";

import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";

const Clients = forwardRef<HTMLElement>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const logos = [
    { name: "Decathlon", src: "/logos/decathlon.png" },
    { name: "lensa", src: "/logos/lensa.png" },
    { name: "Regina Maria", src: "/logos/reginamaria.png" },
    { name: "Jerry's Pizza", src: "/logos/jerryspizza.png" },
    { name: "Pilot", src: "/logos/pilot.png" },
    { name: "Salvati Copii", src: "/logos/salvaticopii.png" },
    { name: "sweat", src: "/logos/sweat.png" },
    { name: "SOLO", src: "/logos/solo.png" },
    { name: "I Love Failure", src: "/logos/ilovefailure.png" },
    { name: "Kinetic", src: "/logos/kinetic.png" },
    { name: "Exavet", src: "/logos/exavet.png" },
    { name: "BISM", src: "/logos/bism.png" },
    { name: "ZAVATE", src: "/logos/zavate.png" },
    { name: "Micul Fermier", src: "/logos/miculfermier.png" },
    { name: "ADNV", src: "/logos/adnv.png" },
    { name: "Createrra", src: "/logos/createrra.png" },
    { name: "BusinessPeople", src: "/logos/businessPeople.png" },
    { name: "nomadia", src: "/logos/nomadia.png" },
    { name: "pddle", src: "/logos/pddle.png" },
    { name: "energyPal", src: "/logos/energyPal.png" },
    { name: "Bakery School", src: "/logos/bakeryschool.png" },
    { name: "skilld", src: "/logos/silkd.png" },
    { name: "11th", src: "/logos/11th.png" },
    { name: "FMS", src: "/logos/fms.png" },
    { name: "esenzio", src: "/logos/esenzio.png" },
  ];

  return (
    <section ref={ref} className="py-16 bg-white pt-40">
      <div className="container mx-auto px-4 mt-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center font-archivo">
          CLIENȚII NOȘTRI
        </h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          De la start-up-uri până la retaileri și branduri recunoscute la nivel
          global
        </p>

        <div
          className={`transition-all duration-1000 overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="marquee-container">
            <div className="marquee">
              {logos.concat(logos).map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="marquee-item">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={150}
                    height={60}
                    className="max-w-full h-auto filter"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Clients.displayName = "Clients";

export default Clients;
