"use client";

import PageTemplate from "@/components/template";
import FAQSection, { FAQItem } from "@/components/faq-section";
import Image from "next/image";
import { colors } from "@/app/page";
import TypewriterText from "@/components/typewriter";
import Portfolio from "@/components/portfolio";

export default function AdsPage() {
  // FAQ items for Social Ads
  const faqItems: FAQItem[] = [
    {
      question: "Ce tipuri de reclame video produceți?",
      answer:
        "Producem o gamă variată de reclame video, de la spoturi scurte pentru social media până la reclame mai ample pentru campanii specifice. Ne adaptăm formatul și stilul în funcție de platforma pe care va rula reclama și de obiectivele tale de marketing.",
    },
    {
      question: "Cât de mult durează producția unei reclame video?",
      answer:
        "Timpul de producție variază în funcție de complexitatea proiectului. Pentru reclame simple, procesul poate dura 1-2 săptămâni, în timp ce pentru proiecte mai complexe, cu multiple locații sau actori, poate dura 3-4 săptămâni sau mai mult. Vei primi un calendar detaliat la începutul proiectului.",
    },
    {
      question: "Cât costă producția unei reclame video?",
      answer:
        "Costul depinde de mai mulți factori: durata clipului, complexitatea scenariului, numărul de zile de filmare, necesitatea de actori profesioniști, echipamente speciale, etc. Oferim soluții pentru diverse bugete și îți putem prezenta opțiuni care să se încadreze în limitele tale financiare.",
    },
  ];

  return (
    <PageTemplate
      title="RECLAME VIDEO"
      heroImage="/heroVideo.mp4"
      content={`Oamenii urasc reclamele. Ii intrerup din a se uita la lucrurile care ii intereseaza, incearca tot timpul sa le vanda ceva si, de cele mai multe ori, sunt plictisitoare.

Dar tot ai nevoie de ele daca vrei sa cresti, asa ca ce faci?

Faci reclame…care nu sunt reclame. Sau macar nu pare ca sunt.

În era digitală actuală, reclamele tradiționale nu mai au același impact. Consumatorii sunt bombardați cu mesaje publicitare și au devenit experți în a le ignora. La Jumară Productions, abordăm publicitatea dintr-o perspectivă diferită.

Creăm reclame care nu par a fi reclame. Conținut care captează atenția nu pentru că întrerupe experiența utilizatorului, ci pentru că o îmbogățește. Materiale video care spun o poveste autentică, oferă valoare reală și creează o conexiune emoțională cu audiența ta.

Rețeta noastră pentru reclame eficiente combină storytelling-ul captivant cu producția video de înaltă calitate. Nu vindem doar un produs sau serviciu - construim o narațiune în care audiența ta se poate regăsi, cu care poate rezona.

Indiferent dacă ai nevoie de un spot scurt pentru campaniile tale de social media sau de conținut video mai amplu pentru alte canale de marketing, echipa noastră de experți în producție video și strategie de conținut te poate ajuta să creezi reclame care nu doar că vor fi vizionate, ci și apreciate de publicul tău țintă.`}
      rightImage="/image.jpg"
    >
      <div className="relative h-24 overflow-hidden bg-[#061425]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path d="M0,150 L0,100 Q250,0 500,100 L500,150 Z" fill="white" />
        </svg>
      </div>
      {/* Approach section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#061425]">
            Abordarea Noastră
          </h2>
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300 min-h-[200px]">
            <div className="flex-1 px-6 py-4">
              <h3 className="text-xl font-bold mb-3">Storytelling Autentic</h3>
              <TypewriterText
                text="Transformăm mesajele de marketing în povești autentice care rezonează cu audiența ta și creează o conexiune emoțională durabilă."
                className="text-gray-700"
              />
            </div>
            <div className="flex-1 px-6 py-4">
              <h3 className="text-xl font-bold mb-3">
                Producție de Înaltă Calitate
              </h3>
              <TypewriterText
                text="Utilizăm echipamente profesionale și tehnici avansate de producție pentru a asigura că reclamele tale arată impecabil și se remarcă prin calitate."
                className="text-gray-700"
              />
            </div>
            <div className="flex-1 px-6 py-4">
              <h3 className="text-xl font-bold mb-3">
                Optimizare pentru Platforme
              </h3>
              <TypewriterText
                text="Adaptăm fiecare reclamă în funcție de platforma pe care va rula, ținând cont de specificațiile tehnice și comportamentul utilizatorilor."
                className="text-gray-700"
              />
            </div>
          </div>
        </div>
      </section>
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
        title="PORTOFOLIU DE RECLAME"
        description="Iată câteva exemple de reclame video pe care le-am realizat pentru clienții noștri."
        // backgroundColor="bg-[#061425]"
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
      <FAQSection
        title="ÎNTREBĂRI FRECVENTE DESPRE RECLAMELE VIDEO"
        faqs={faqItems}
      />
    </PageTemplate>
  );
}
