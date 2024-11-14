'use client'

import { Eye, Facebook, Film, Instagram, Lightbulb, Rocket, Telescope, Users, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [snackbar, setSnackbar] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const homeRef = useRef(null)
  const aboutUsRef = useRef(null)
  const howWeWorkRef = useRef(null)
  const contactRef = useRef(null)
  const videoRef = useRef(null)
  const clientsRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = isMobile ? "/heroVideoMobile.mp4" : "/heroVideo.mp4";
      videoRef.current.load();
    }
  }, [isMobile]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (clientsRef.current) {
      observer.observe(clientsRef.current)
    }

    return () => {
      if (clientsRef.current) {
        observer.unobserve(clientsRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.7, // Increase threshold for better section detection
        rootMargin: "-10% 0px -10% 0px", // Adjust root margin to detect near-viewport sections
      }
    );

    const sections = [homeRef, aboutUsRef, howWeWorkRef, contactRef];
    sections.forEach((ref) => {
      if (ref.current) {
        sectionObserver.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          sectionObserver.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setActiveSection('home');
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setActiveSection((prevSection) => prevSection); // Keeps the current section active on scroll down
      } else {
        // Scrolling up
        // You can add any specific logic for scroll up if needed
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    orange: '#cb7536',
    navy: '#061425',
    white: '#efddc5',
    black: '#061425',
    red: '#e05e3d'
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHowWeWork = () => {
    howWeWorkRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const closeSnackbar = () => setSnackbar(null)

  const logos = [
    { name: 'Decathlon', src: "/logos/decathlon.png" },
    { name: 'lensa', src: "/logos/lensa.png" },
    { name: 'Regina Maria', src: "/logos/reginamaria.png" },
    { name: "Jerry's Pizza", src: "/logos/jerryspizza.png" },
    { name: 'Pilot', src: "/logos/pilot.png" },
    { name: 'Salvati Copii', src: "/logos/salvaticopii.png" },
    { name: 'I Love Failure', src: "/logos/ilovefailure.png" },
    { name: 'Kinetic', src: "/logos/kinetic.png" },
    { name: 'Exavet', src: "/logos/exavet.png" },
    { name: 'BISM', src: "/logos/bism.png" },
    { name: 'ZAVATE', src: "/logos/zavate.png" },
    { name: 'Micul Fermier', src: "/logos/miculfermier.png" },
    { name: 'ADNV', src: "/logos/adnv.png" },
    { name: 'Createrra', src: "/logos/createrra.png" },
    { name: 'Bakery School', src: "/logos/bakeryschool.png" },
    { name: 'FMS', src: "/logos/fms.png" },
    { name: 'SOLO', src: "/logos/solo.png" },
  ]


  const workingProcess = [
    { step: "PASUL 1", title: "STRATEGIE", description: "După ce aflăm ce nevoi ai și cine este publicul tău țintă, facem o strategie de conținut video personalizată pentru tine și brandul tău, cu piloni de comunicare, tone of voice și recomandări pentru fiecare platformă în parte.", icon: Telescope },
    { step: "PASUL 2", title: "IDEI & SCRIPT", description: "Pe baza strategiei, facem o listă de idei care să te ajute să ajungi la cât mai mulți oameni din audiența ta. Iar după ce le alegem împreună pe cele mai bune, colegii noștri vor scrie niște script-uri beton, care să vorbească pe limba audienței tale.", icon: Lightbulb },
    { step: "PASUL 3", title: "PRODUCȚIE", description: "Pentru că avem totul pregătit dinainte, ziua de filmare este, de obicei, cea mai fun. Noi venim cu camere, lumini, microfoane, tu trebuie să vii doar cu un vibe bun și cu dorința de a da cât mai bine pe (micul) ecran.", icon: Video },
    { step: "PASUL 4", title: "EDITARE", description: "Acum că am terminat treaba de pe \"teren\", e momentul ca ai noștri colegi de la editare să-și pună amprenta pe ce am filmat. Tranziții, efecte, sunete, colorizare, toate vor fi puse la locul potrivit ca videoclipurile tale să-i facă pe oameni să stea lipiți de ecrane.", icon: Film },
    { step: "PASUL 5", title: "POSTARE", description: "Punctul final al muncii pe care o facem împreună vine atunci când le arătăm și celorlalți ce am făcut. Și ca să nu te preocupi tu să răspunzi la toate comentariile și să fii copleșit de like-uri, facem noi și asta pentru tine ;). Iar apoi o luăm de la capăt.", icon: Rocket },
  ];

  const handleSubmit = async () => {

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, phoneNumber, company }),
    });

    if (response.ok) {
      setSnackbar({ message: 'Message sent successfully!', type: 'success' });
      setName('');
      setPhoneNumber('');
      setCompany('');
      setEmail('');
      setMessage('');
    } else {
      setSnackbar({ message: 'Failed to send message.' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#061425]">
      <header className="bg-[#061425] absolute top-0 left-0 right-0 z-50 sticky">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-h-[70px]">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logoWhite.png" alt="Jumară Productions Logo" width={80} height={40} />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 h-full py-2">
            <button onClick={scrollToTop} className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group ${activeSection === 'home' ? `text-[${colors.red}]` : ''}`}>
              ACASĂ
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out ${activeSection === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
            <button onClick={scrollToAboutUs} className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group ${activeSection === 'about' ? `text-[${colors.red}]` : ''}`}>
              DESPRE NOI
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out ${activeSection === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
            <button onClick={scrollToHowWeWork} className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group ${activeSection === 'howWeWork' ? `text-[${colors.red}]` : ''}`}>
              CUM LUCRĂM
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out ${activeSection === 'howWeWork' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
            <button onClick={scrollToContact} className={`bg-[${colors.red}] text-[${colors.white}] px-4 py-2 font-bold rounded hover:bg-opacity-90 flex items-center h-[calc(100%-16px)] my-2`}>CONTACT</button>
          </nav>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#061425] bg-opacity-70">
            <button onClick={scrollToTop} className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}>ACASĂ</button>
            <button onClick={scrollToAboutUs} className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}>DESPRE NOI</button>
            <button onClick={scrollToHowWeWork} className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}>CUM LUCRĂM</button>
            <button onClick={scrollToContact} className={`block py-2 px-4 text-sm bg-[${colors.red}] text-[${colors.white}] hover:bg-opacity-90 w-full text-left`}>CONTACT</button>
          </div>
        )}
      </header>

      <main className="flex-grow z-10 relative">
        {/* HERO SECTION */}
        <section id="home" ref={homeRef} className="relative h-screen" style={{ marginBottom: "-70px" }}>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
          >
            src={isMobile ? "/heroVideoMobile.mp4" : "/heroVideo.mp4"}
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Transition element after hero section */}
        <div className="relative h-24 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,150 L0,40 Q250,80 500,40 L500,150 Z" fill={colors.navy} />
          </svg>
        </div>

        {/* BANDA TAGLINE */}
        <section className={`bg-[${colors.navy}] text-[${colors.white}] py-16  px-4`}>
          <div className="container mx-auto px-4">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 font-monumentRegular text-[${colors.red}]`}>
              JUMARĂ PRODUCTIONS.
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              PRODUCȚIE VIDEO DE BUN GUST.
            </h2>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#061425] py-16 relative overflow-hidden" id="about" ref={aboutUsRef}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-stretch -mx-4">
              <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                <div className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  <div className="relative z-10">
                    <Eye className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`} />
                    <h3 className={`text-4xl font-bold text-[${colors.white}] mb-2`}>50+ milioane</h3>
                    <p className={`text-xl text-[${colors.white}]`}>vizualizări</p>
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}></div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                <div className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  <div className="relative z-10">
                    <Film className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`} />
                    <h3 className={`text-4xl font-bold text-[${colors.white}] mb-2`}>1000+</h3>
                    <p className={`text-xl text-[${colors.white}]`}>videoclipuri realizate</p>
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}></div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 px-4">
                <div className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  <div className="relative z-10">
                    <Users className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`} />
                    <h3 className={`text-4xl font-bold text-[${colors.white}] mb-2`}>30+</h3>
                    <p className={`text-xl text-[${colors.white}]`}>branduri</p>
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 bg-[${colors.red}] rounded-tl-full opacity-5 transform rotate-45`}></div>
        </section>

        {/* Transition element  */}
        <div className="relative h-24 overflow-hidden bg-[#061425]">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,150 L0,100 Q250,0 500,100 L500,150 Z" fill="white" />
          </svg>
        </div>

        {/* CLIENTI */}
        <section ref={clientsRef} className="py-16 bg-white pt-40">
          <div className="container mx-auto px-4 mt-50" >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center font-archivo">CLIENȚII NOȘTRII</h2>
            <p className="text-xl text-center text-gray-600 mb-8">
              Lucrăm de la start-up-uri până la retaileri și branduri recunoscute la nivel global
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {logos.map((logo, index) => (
                <div
                  key={logo.name}
                  className={`flex items-center justify-center transition-all duration-1000 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="max-w-full h-auto filter"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transition element  */}
        <div className="relative h-24 overflow-hidden bg-[#061425]">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,0 L0,50 Q250,150 500,50 L500,0 Z" fill="white" />
          </svg>
        </div>

        {/* CUM LUCRAM */}
        <section id="howWeWork" ref={howWeWorkRef} className="w-full bg-[#061425] py-20" >
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-lg text-[#e05e3d] mb-4 select-none">CUM FUNCȚIONEAZĂ</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#efddc5] select-none">
                Procesul nostru de <span className="text-[#e05e3d]">producție</span>
              </h3>
              <p className="max-w-2xl mx-auto text-[#efddc5] select-none">
                Abordarea noastră metodică asigură livrarea de producții video de înaltă calitate, adaptate perfect nevoilor afacerii tale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start relative select-none">
              {workingProcess.map((step, index) => (
                <div key={index} className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center w-full sm:w-1/5 mb-8 sm:mb-0 relative">
                  <div className="bg-[#e05e3d] rounded-full p-4 sm:p-6 mb-4 sm:mb-6 mr-4 sm:mr-0 relative z-10">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#efddc5]" />
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <h4 className="text-sm font-semibold text-[#e05e3d] mb-2">{step.step}</h4>
                    <h5 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#efddc5]">{step.title}</h5>
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

        {/* Transition element  */}
        <div className="relative h-24 overflow-hidden bg-white">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,0 L0,100 Q250,150 500,100 L500,0 Z" fill={colors.navy} />
          </svg>
        </div>

        {/* CONTACT SECTION */}
        <section id="contact" ref={contactRef} className="bg-white py-16 relative overflow-hidden px-6">
          <div className="container mx-auto px-2">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-[#061425] mb-6">Contactează-ne</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#061425] mb-2">TELEFON</h3>
                  <p className="text-[#061425]">+40 770 202 977</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#061425] mb-2">EMAIL</h3>
                  <p className="text-[#061425]">contact@imeravisual.ro</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#061425] mb-2">ADRESA</h3>
                  <p className="text-[#061425]">România,<br />București,<br />Sector 4</p>
                </div>
              </div>
              <div className="w-px bg-gray-300 mx-4"></div>
              <div className="w-full lg:w-[calc(66.666667%-1rem)] px-4">
                <h2 className="text-3xl font-bold text-[#061425] mb-6">Hai să vorbim</h2>
                <div className="w-full h-px bg-gray-300 mb-6"></div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <label htmlFor="name" className="block text-[#061425] font-semibold mb-2">1. NUME</label>
                      <input type="text" id="name" name="name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Nume întreg..." required />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label htmlFor="email" className="block text-[#061425] font-semibold mb-2">2. ADRESĂ DE EMAIL</label>
                      <input type="email" id="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Email..." required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <label htmlFor="company" className="block text-[#061425] font-semibold mb-2">3. DENUMIRE COMPANIE</label>
                      <input type="text" id="company" name="company" value={company}
                        onChange={(e) => setCompany(e.target.value)} className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Companie..." required />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label htmlFor="enquiry" className="block text-[#061425] font-semibold mb-2">4. NUMĂR DE TELEFON</label>
                      <input type="text" id="enquiry" name="enquiry" value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="+40 770 202 977" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-[#061425] font-semibold mb-2">CUM TE PUTEM AJUTA?</label>
                    <textarea id="message" name="message" value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required rows={6} className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Producție video pentru companie software..."></textarea>
                  </div>
                  <button type="submit" className="bg-[#e05e3d] text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300">Trimite mesajul</button>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/6 bg-[#e05e3d] rounded-tl-full opacity-20"></div>
        </section>
      </main>

      <footer className="bg-[#061425] text-white py-8 relative">
        <div className="container mx-auto px-4">
          <div className="z-10 absolute top-0 right-0 w-1/3 h-1/3 bg-[#e05e3d] rounded-tl-full opacity-20 transform rotate-180 scale-x-[-1]"></div>
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <Image src="/logoWhite.png" alt="Jumară Productions Logo" width={120} height={60} className="mb-4" />
              <p className="max-w-md text-xl font-bold">
                Producție video de bun gust.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-700 font-bold">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Jumară Productions. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/40770202977" className="hover:text-[#e05e3d] transition-colors" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="https://www.instagram.com/jumaraproductions.ro/" className="hover:text-[#e05e3d] transition-colors" target="_blank"
                rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://web.facebook.com/jumaraproductions.ro" className="hover:text-[#e05e3d] transition-colors" target="_blank"
                rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.tiktok.com/@jumaraproductions.ro" className="hover:text-[#e05e3d] transition-colors" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {snackbar && (
        <div className="fixed bottom-4 right-4 bg-[#e05e3d] text-white px-4 py-2 rounded-md">
          {snackbar.message}
          <button onClick={closeSnackbar} className="ml-2 font-bold">×</button>
        </div>
      )}
    </div>
  )
}