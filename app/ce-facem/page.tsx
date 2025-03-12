"use client";

import PageTemplate from "@/components/template";
import Image from "next/image";
import Link from "next/link";

// Service card component
function ServiceCard({ title, image, slug }) {
  return (
    <Link
      href={`/ce-facem/${slug}`}
      className="block group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-bold text-xl md:text-2xl p-6 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  // Service data
  const services = [
    {
      title: "VIDEO VERTICAL (TIKTOK/REELS)",
      image: "/image.jpg",
      slug: "video-vertical",
    },
    {
      title: "YOUTUBE VIDEOS",
      image: "/image.jpg",
      slug: "youtube",
    },

    {
      title: "ADS",
      image: "/image.jpg",
      slug: "ads",
    },
    {
      title: "PODCASTURI/INTERVIURI",
      image: "/image.jpg",
      slug: "podcasturi-interviuri",
    },
  ];

  return (
    <PageTemplate
      title="CE FACEM"
      heroImage="/heroVideo.mp4"
      content={`La Jumară Productions, oferim o gamă completă de servicii de producție video adaptate pentru a satisface nevoile dvs. specifice. Fie că doriți să vă promovați brandul, să prezentați un produs sau să spuneți povestea companiei dvs., avem expertiza și resursele necesare pentru a da viață viziunii dvs.`}
      rightImage="/image.jpg"
    >
      {/* Service Grid Section */}
      <section className="bg-[#061425] text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center relative">
            <span className="inline-block relative z-10">
              VIDEO PRODUCTION SERVICES
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
