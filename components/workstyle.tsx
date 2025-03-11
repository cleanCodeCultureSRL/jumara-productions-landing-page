"use client";

import { Film, Lightbulb, Rocket, Telescope, Video } from "lucide-react";
import { forwardRef } from "react";

const WorkStyle = forwardRef<HTMLElement>((props, ref) => {
  const workingProcess = [
    {
      step: "PASUL 1",
      title: "STRATEGIE",
      description:
        "După ce aflăm ce nevoi ai și cine este publicul tău țintă, facem o strategie de conținut video personalizată pentru tine și brandul tău, cu piloni de comunicare, tone of voice și recomandări pentru fiecare platformă în parte.",
      icon: Telescope,
    },
    {
      step: "PASUL 2",
      title: "IDEI & SCRIPT",
      description:
        "Pe baza strategiei, facem o listă de idei care să te ajute să ajungi la cât mai mulți oameni din audiența ta. Iar după ce le alegem împreună pe cele mai bune, colegii noștri vor scrie niște script-uri beton, care să vorbească pe limba audienței tale.",
      icon: Lightbulb,
    },
    {
      step: "PASUL 3",
      title: "PRODUCȚIE",
      description:
        "Pentru că avem totul pregătit dinainte, ziua de filmare este, de obicei, cea mai fun. Noi venim cu camere, lumini, microfoane, tu trebuie să vii doar cu un vibe bun și cu dorința de a da cât mai bine pe (micul) ecran.",
      icon: Video,
    },
    {
      step: "PASUL 4",
      title: "EDITARE",
      description:
        'Acum că am terminat treaba de pe "teren", e momentul ca ai noștri colegi de la editare să-și pună amprenta pe ce am filmat. Tranziții, efecte, sunete, colorizare, toate vor fi puse la locul potrivit ca videoclipurile tale să-i facă pe oameni să stea lipiți de ecrane.',
      icon: Film,
    },
    {
      step: "PASUL 5",
      title: "POSTARE",
      description:
        "Punctul final al muncii pe care o facem împreună vine atunci când le arătăm și celorlalți ce am făcut. Și ca să nu te preocupi tu să răspunzi la toate comentariile și să fii copleșit de like-uri, facem noi și asta pentru tine ;). Iar apoi o luăm de la capăt.",
      icon: Rocket,
    },
  ];

  return (
    <section id="howWeWork" ref={ref} className="w-full bg-[#061425] py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg text-[#e05e3d] mb-4 select-none">
            CUM FUNCȚIONEAZĂ
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#efddc5] select-none">
            Procesul nostru de <span className="text-[#e05e3d]">producție</span>
          </h3>
          <p className="max-w-2xl mx-auto text-[#efddc5] select-none text-2xl">
            5 pași simpli pentru un conținut video de succes
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start relative select-none">
          {workingProcess.map((step, index) => (
            <div
              key={index}
              className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center w-full sm:w-1/5 mb-8 sm:mb-0 relative"
            >
              <div className="bg-[#e05e3d] rounded-full p-4 sm:p-6 mb-4 sm:mb-6 mr-4 sm:mr-0 relative z-10">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#efddc5]" />
              </div>
              <div className="flex-1 sm:flex-none">
                <h4 className="text-sm font-semibold text-[#e05e3d] mb-2">
                  {step.step}
                </h4>
                <h5 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#efddc5]">
                  {step.title}
                </h5>
                <p className="text-[#efddc5] text-sm">{step.description}</p>
              </div>
              {index < workingProcess.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-1/2 w-full h-[2px] bg-[#e05e3d] -z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

WorkStyle.displayName = "WorkStyle";

export default WorkStyle;
