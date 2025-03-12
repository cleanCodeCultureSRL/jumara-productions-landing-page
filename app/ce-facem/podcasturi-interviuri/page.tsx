"use client";

import PageTemplate from "@/components/template";
import FAQSection, { FAQItem } from "@/components/faq-section";
import Image from "next/image";
import TypewriterText from "@/components/typewriter";
import Portfolio from "@/components/portfolio";

export default function PodcasturiInterviuriPage() {
  // FAQ items for YouTube videos
  const faqItems: FAQItem[] = [
    {
      question: "Cât timp durează producția unui video pentru YouTube?",
      answer:
        "Timpul necesar pentru crearea unui video pentru YouTube variază în funcție de complexitatea proiectului. De la conceptualizare până la livrarea finală, procesul poate dura între 2-6 săptămâni. Lucrăm îndeaproape cu tine pentru a stabili un calendar realist care să se potrivească nevoilor tale.",
    },
    {
      question:
        "Poate Jumară Productions să ajute cu videoclipuri pentru YouTube Shorts?",
      answer:
        "Absolut. Putem ajuta cu crearea de conținut pentru YouTube Shorts, precum și pentru videoclipuri mai lungi. Prin înțelegerea profundă a obiectivelor afacerii tale și a publicului țintă, te putem ajuta să găsești echilibrul potrivit între conținutul mai scurt și cel mai lung pentru canalul tău YouTube.",
    },
    {
      question:
        "Puteți ajuta și cu videoclipuri pentru alte platforme de social media?",
      answer:
        "Desigur. Indiferent de canalele de social media pe care le utilizezi, te putem ajuta cu conținut video țintit. De la TikTok și Instagram Reels la Facebook și LinkedIn, serviciile noastre de producție video sunt super flexibile.",
    },
    {
      question: "Poate brandul meu să devină viral cu ajutorul vostru?",
      answer:
        "Nu ne place să ne lăudăm, dar am editat videoclipuri YouTube virale în trecut. Aceasta fiind spus, 'a deveni viral' nu este o strategie simplă de marketing pe YouTube. Vom lucra îndeaproape cu tine pentru a elabora o abordare realistă și eficientă care să aducă videoclipurile tale în fața publicului țintă.",
    },
  ];

  // YouTube benefits
  const benefits = [
    {
      title: "Audiență Masivă",
      description:
        "14,4 milioane de utilizatori în România și 2.6 miliarde de utilizatori la nivel global. YouTube este mai mare decât Netflix și continuă să crească.",
    },
    {
      title: "Al Doilea Cel Mai Mare Motor de Căutare",
      description:
        "După Google, YouTube este un gigant în materie de căutări. Integrarea optimizării pentru motoarele de căutare (SEO) cu YouTube SEO poate crește vizibilitatea brandului tău atât în rezultatele de căutare YouTube, cât și pe alte motoare de căutare.",
    },
    {
      title: "Comunități Reale",
      description:
        "Oamenilor le place să urmărească videoclipuri. Conținutul short-form te ajută să ajungi la mulți oameni, dar conținutul long-form (și YouTube-ul în special) sunt cele care creează relații de durată cu audiența ta. Una e să petreci cu cineva 30 de secunde, alta e să stați 10 minute sau chiar o oră de vorbă. Fix așa e și pe internet.",
    },
  ];

  // YouTube video types
  const videoTypes = [
    {
      title: "Reclame Video",
      description:
        "Într-o eră în care atenția este mai scurtă ca niciodată, reclamele noastre video sunt clare, concise și eficiente. Fie că vorbim de Display Ads sau spoturi create special pentru campanii plătite pe YouTube, ne asigurăm că mesajul ajunge la public și generează impact.",
    },
    {
      title: "Tutorial / How-To",
      description:
        "Acestea sunt fundația multor canale de YouTube. Creăm videoclipuri informative și ușor de urmărit, care oferă valoare și atrag trafic organic prin optimizare pentru motoarele de căutare.",
    },
    {
      title: "Testimoniale / Case Studies",
      description:
        "Nimic nu construiește încredere mai bine decât relatările clienților mulțumiți. Producem testimoniale autentice și studii de caz care evidențiază succesul clienților tăi și valoarea pe care o aduci.",
    },
  ];

  return (
    <PageTemplate
      title="PODCASTURI ȘI INTERVIURI"
      heroImage="/heroVideo.mp4"
      content={`În lumea digitală de astăzi, YouTube nu este doar o altă platformă de social media; este un motor puternic pentru conținut video și marketing. Cu peste 14 milioane de utilizatori activi doar în România și 2,6 miliarde la nivel global, prezența pe această platformă este esențială pentru orice brand care dorește să își extindă vizibilitatea și să construiască o comunitate loială.

La Jumară Productions, înțelegem puterea conținutului video de calitate și importanța strategiei în succesul pe YouTube. Oferim servicii complete de producție video pentru YouTube, de la conceptualizare și filmare până la editare profesională și optimizare pentru algoritmii platformei.

Fie că ai nevoie de tutoriale informative, vloguri captivante, recenzii de produse sau conținut corporativ, echipa noastră de experți în producție video te poate ajuta să creezi materiale care nu doar că atrag vizualizări, ci și convertesc vieweri în clienți și fani ai brandului tău.

Cu o combinație unică de creativitate, expertiză tehnică și înțelegere a tendințelor de consum media, transformăm ideile tale în conținut video de impact care rezonează cu audiența ta țintă și te diferențiază de competiție.`}
      rightImage="/image.jpg"
    >
      {/* Benefits section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            De ce să faci clipuri pe YouTube?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <TypewriterText
                  text={benefit.description}
                  className="text-gray-700"
                />
              </div>
            ))}
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
        title="PORTOFOLIU PODCASTURI ȘI INTERVIURI"
        description="Iată câteva exemple de podcasturi și interviuri pe care le-am realizat pentru clienții noștri."
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
      <FAQSection title="Întrebări Frecvente" items={faqItems} />
    </PageTemplate>
  );
}
