"use client";

import { useEffect, useRef, useState } from "react";
import PageTemplate from "@/components/template";
import FAQSection, { FAQItem } from "@/components/faq-section";
import TypewriterText from "@/components/typewriter";
import Portfolio from "@/components/portfolio";

export default function VideoVerticalPage() {
  // FAQ items for TikTok/Vertical video
  const faqItems: FAQItem[] = [
    {
      question:
        "Ce primesc dacă fac conținut video vertical cu Jumară Productions?",
      answer: `Știm cum e să faci de toate într-un business, tocmai de asta ne dorim să îți dăm un lucru mai puțin de făcut. 

Pachetele noastre includ:
• Research - pe baza informațiilor pe care le primim de la tine și a obiectivelor tale de business, facem o analiză a nișei și a audienței tale
• Strategie conținut video - după ce am aflat ce aveam nevoie despre tine și audiența ta, îți facem o strategie personalizată de conținut video, care conține:
   - plan de idei
   - script-uri
• 1-2 zile de producție
• editare
• 2 runde de feedback`,
    },
    {
      question:
        "Am nevoie de un buget mare pentru a crea conținut video vertical?",
      answer:
        "Nu neapărat, dar depinde foarte mult de ce anume îți dorești. În general, noi oferim servicii de producție video la o calitate înaltă, filmate cu camere profesionale de cinema, lumini de studio, microfoane, tot tacâmul. Cu toate astea, suntem flexibili și ne putem adapta în funcție de nevoile tale.",
    },
    {
      question: "Pot folosi videoclipurile create pe mai multe platforme?",
      answer:
        "Da! Întrucât mai toate rețelele sociale au acum tab-uri speciale pentru acest tip de conținut, noi zicem că nu ai nimic de pierdut. Noi ne asigurăm că videoclipurile vor fi formatate astfel încât să poată fi postate pe orice platformă.",
    },
    {
      question:
        "Cât timp durează producția unui set de videoclipuri verticale?",
      answer:
        'În general, nouă ne place să venim pregătiți în ziua de filmare cu ideile și scripturile gata făcute, astfel încât să fim cât mai eficienți și să ne putem concentra pe a "da" cât mai bine în fața camerei.\n\nDin experiența trecută, într-o zi normală de filmare putem face între 8 și 15 videoclipuri verticale. Depinde de tine cât de "hardcore" vrei să fie ziua. :)',
    },
    {
      question:
        "Ce alte tipuri de videoclipuri pentru social media ar trebui să creez?",
      answer:
        "Deși videoclipurile verticale domină în acest moment spațiul rețelelor sociale, noi credem că este la fel de important să faci și alte tipuri de conținut: și pentru a diversifica, și pentru a crea conexiuni mai puternice cu audiența ta.\n\nPentru cea din urmă, recomandarea noastră este să te gândești și la un tip de conținut long-form, care deși este mai dificil de realizat, creează mult mai multă încredere și o comunitate mai apropiată.",
    },
  ];

  // Benefits section data
  const benefits = [
    {
      title: "Potențial de viralitate",
      description:
        "Schimbările algoritmilor rețelelor de social media (survenite după apariția TikTok) au dus la situația în care videoclipurile verticale ajung la mai mulți oameni, oferind brandurilor o expunere uriașă. Chiar și afacerile mici, cu un număr redus de urmăritori, pot folosi acești algoritmi pentru a crește engagementul și a-și extinde comunitatea.",
    },
    {
      title: "Potențial de viralitate",
      description:
        "Schimbările algoritmilor rețelelor de social media (survenite după apariția TikTok) au dus la situația în care videoclipurile verticale ajung la mai mulți oameni, oferind brandurilor o expunere uriașă. Chiar și afacerile mici, cu un număr redus de urmăritori, pot folosi acești algoritmi pentru a crește engagementul și a-și extinde comunitatea.",
    },
    {
      title: "Potențial de viralitate",
      description:
        "Schimbările algoritmilor rețelelor de social media (survenite după apariția TikTok) au dus la situația în care videoclipurile verticale ajung la mai mulți oameni, oferind brandurilor o expunere uriașă. Chiar și afacerile mici, cu un număr redus de urmăritori, pot folosi acești algoritmi pentru a crește engagementul și a-și extinde comunitatea.",
    },
    // Add more benefits as needed
  ];

  return (
    <PageTemplate
      title="VIDEO VERTICAL (TIKTOK / REELS)"
      heroImage="/heroVideo.mp4"
      content={`Într-o lume dominată în care nimeni nu mai poate fi atent mai mult de 5 secunde, conținutul video vertical nu mai e doar o opțiune – e o necesitate. Dar nu orice fel de video. Oamenii fug de intro-uri plictisitoare și reclame evidente, dar reacționează la autenticitate, la povești inspiraționale, la conexiunea cu alți oameni. 

De aceea, brandurile care știu să comunice real și care se adaptează diferitelor platforme și tipuri de audiență sunt cele care câștigă pe termen lung.

Un video bine gândit nu doar că atrage priviri, ci creează conexiuni. Iar asta e cheia într-o lume a social media în continuă schimbare – să spui ce ai TU de spus, într-un mod natural, relevant și cu impact. Doar în felul ăsta îi vei atrage lângă tine și brandul tău pe cei pe care îi vrei cu adevărat acolo - cei care au șansa să nu fie doar clienți sau vizitatori, ci care pot deveni loiali.

Fie că vorbim de TikTok sau Instagram Reels, la Jumară Productions înțelegem ritmul unic și energia acestui format. De aceea, serviciul nostru de producție de video vertical nu se rezumă doar la a crea conținut – ci la a construi povești vizuale captivante, care atrag, implică și inspiră publicul. Hai și tu cu noi să descoperi combinația perfectă între creativitate și strategie, astfel încât brandul tău să nu fie doar vizibil, ci de neuitat.

Nu ești sigur că suntem potriviți? Dă-ne un e-mail și hai să vedem împreună!`}
      rightImage="/image.jpg"
    >
      {" "}
      <div className="relative h-24 overflow-hidden bg-[#061425]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path d="M0,150 L0,100 Q250,0 500,100 L500,150 Z" fill="white" />
        </svg>
      </div>
      {/* Benefits section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#061425]">
            Beneficiile Videoclipurilor Verticale
          </h2>
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300 min-h-[200px]">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex-1 px-6 py-4">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <TypewriterText
                  text={benefit.description}
                  className="text-gray-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <div className="relative h-24 overflow-hidden bg-[#061425]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path d="M0,0 L0,50 Q250,150 500,50 L500,0 Z" fill="white" />
        </svg>
      </div>
      {/* Portfolio section */}
      <Portfolio
        title="CLIPURI PORTOFOLIU"
        description="Poți să vezi mai jos ce clipuri video verticale am mai făcut în trecut."
        // vertical={true}
        videoSrc="/heroVideoMobile.mp4"
      />
      <div className="relative h-24 overflow-hidden bg-[#061425]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path d="M0,150 L0,100 Q250,0 500,100 L500,150 Z" fill="white" />
        </svg>
      </div>
      {/* FAQ Section */}
      <FAQSection title="TIKTOK VIDEO PRODUCTION FAQS" faqs={faqItems} />
    </PageTemplate>
  );
}
