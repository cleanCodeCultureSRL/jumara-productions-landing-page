'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Instagram, Facebook, Twitter, Linkedin, Mail, FileText, Lightbulb, Figma, CpuIcon, CheckIcon, Telescope, Video, Cog, Rocket, Eye, Film, Users } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')
  const [snackbar, setSnackbar] = useState(null)
  const pathname = usePathname()
  const servicesRef = useRef(null)
  const aboutUsRef = useRef(null)
  const howWeWorkRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)
  const clientsRef = useRef(null)

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

  const colors = {
    orange: '#cb7536',
    navy: '#34353a',
    white: '#efddc5',
    black: '#061425',
    red: '#e05e3d'
  }

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmitNewsletter = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    setFormStatus('submitting')

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setFormStatus('success')
    setSnackbar({ message: 'Te-ai abonat cu succes la newsletter!', type: 'success' })
    e.target.reset()
  }

  const closeSnackbar = () => setSnackbar(null)

  const logos = [
    { name: 'ADNV', src: "/logos/adnv.png" },
    { name: 'Bakery School', src: "/logos/bakeryschool.png" },
    { name: 'BISM', src: "/logos/bism.png" },
    { name: 'Createrra', src: "/logos/createrra.png" },
    { name: 'Decathlon', src: "/logos/decathlon.png" },
    { name: 'Exavet', src: "/logos/exavet.png" },
    { name: 'FMS', src: "/logos/fms.png" },
    { name: 'I Love Failure', src: "/logos/ilovefailure.png" },
    { name: "Jerry's Pizza", src: "/logos/jerryspizza.png" },
    { name: 'Kinetic', src: "/logos/kinetic.png" },
    { name: 'Micul Fermier', src: "/logos/miculfermier.png" },
    { name: 'Pilot', src: "/logos/pilot.png" },
    { name: 'Regina Maria', src: "/logos/reginamaria.png" },
    { name: 'Salvati Copii', src: "/logos/salvaticopii.png" },
    { name: 'SOLO', src: "/logos/solo.png" },
    { name: 'ZAVATE', src: "/logos/zavate.png" },
  ]

  const workingProcess = [
    { step: "PASUL 1", title: "Descoperire", description: "Explorăm obiectivele și publicul țintă pentru a alinia viziunea clientului cu strategia noastră.", icon: Telescope },
    { step: "PASUL 2", title: "Planificare", description: "Creăm un plan detaliat și un storyboard care conturează vizual povestea.", icon: Lightbulb },
    { step: "PASUL 3", title: "Filmare", description: "Capturăm imagini de înaltă calitate, reflectând stilul și mesajul dorit.", icon: Video },
    { step: "PASUL 4", title: "Editare", description: "Montăm materialul brut, adăugăm efecte și ajustăm culorile pentru un impact vizual maxim.", icon: Cog },
    { step: "PASUL 5", title: "Lansare", description: "Implementăm feedback-ul clientului și pregătim produsul final pentru lansare.", icon: Rocket },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-[#061425]">
      <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-h-[70px]">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Jumară Productions Logo" width={80} height={40} />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 h-full py-2">
            <Link href="/" className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group ${pathname === '/' ? `text-[${colors.red}]` : ''}`}>
              ACASĂ
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link href="/about" className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group ${pathname === '/about' ? `text-[${colors.red}]` : ''}`}>
              DESPRE NOI
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link href="/services" className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group ${pathname === '/services' ? `text-[${colors.red}]` : ''}`}>
              SERVICII
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out ${pathname === '/services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link href="/work" className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group ${pathname === '/work' ? `text-[${colors.red}]` : ''}`}>
              CUM LUCRĂM
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out ${pathname === '/work' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link href="/contact" className={`bg-[${colors.red}] text-[${colors.white}] px-4 py-2 font-bold rounded hover:bg-opacity-90 flex items-center h-[calc(100%-16px)] my-2`}>CONTACT</Link>
          </nav>
          <button
            className="md:hidden p-2 text-[${colors.white}]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#061425] bg-opacity-70">
            <Link href="/" className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800`}>ACASĂ</Link>
            <Link href="/about" className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800`}>DESPRE NOI</Link>
            <Link href="/services" className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800`}>SERVICII</Link>
            <Link href="/work" className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800`}>CUM LUCRĂM</Link>
            <Link href="/contact" className={`block py-2 px-4 text-sm bg-[${colors.red}] text-[${colors.white}] hover:bg-opacity-90`}>CONTACT</Link>
          </div>
        )}
      </header>

      <main className="flex-grow z-10 relative">
        {/* HERO SECTION */}
        <section className="relative h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/heroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </section>


        {/* BANDA TAGLINE */}
        <section className={`bg-[#34353a] text-[${colors.white}] py-16`}>
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              JUMARĂ PRODUCTIONS. <span className={`text-[${colors.red}]`}>CONTENT VIDEO AGENCY.</span>
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              PRODUCȚIE VIDEO DE BUN GUST.
            </h2>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#34353a] py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-stretch -mx-4">
              <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                <div className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  <div className="relative z-10">
                    <Eye className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`} />
                    <h3 className={`text-4xl font-bold text-[${colors.white}] mb-2`}>+50 milioane</h3>
                    <p className={`text-xl text-[${colors.white}]`}>de vizualizări</p>
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}></div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                <div className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  <div className="relative z-10">
                    <Film className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`} />
                    <h3 className={`text-4xl font-bold text-[${colors.white}] mb-2`}>+1000</h3>
                    <p className={`text-xl text-[${colors.white}]`}>videoclipuri realizate</p>
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}></div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 px-4">
                <div className={`h-full bg-[${colors.navy}] rounded-lg p-8 text-center relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  <div className="relative z-10">
                    <Users className={`w-16 h-16 mx-auto mb-4 text-[${colors.red}]`} />
                    <h3 className={`text-4xl font-bold text-[${colors.white}] mb-2`}>+30</h3>
                    <p className={`text-xl text-[${colors.white}]`}>de branduri</p>
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[${colors.red}]`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 bg-[${colors.red}] rounded-tl-full opacity-5 transform rotate-45`}></div>
        </section>

        {/* CLIENTI */}
        <section ref={clientsRef} className="py-16 bg-white pt-40">
          <div className="container mx-auto px-4 mt-50" >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">CLIENȚII NOȘTRII</h2>
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
                    className="max-w-full h-auto filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUM LUCRAM */}
        <section id="howWeWork" className="w-full bg-[#34353a] py-20" ref={howWeWorkRef} >
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

        {/* CONTACT SECTION */}
        <section className="bg-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-[#061425] mb-6">Contactează-ne</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#061425] mb-2">TELEFON</h3>
                  <p className="text-[#061425]">+40 770 202 977</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#061425] mb-2">EMAIL</h3>
                  <p className="text-[#061425]">hello@jumaraproductions.ro</p>
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
                <form>
                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <label htmlFor="name" className="block text-[#061425] font-semibold mb-2">1. NUME</label>
                      <input type="text" id="name" name="name" className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Nume întreg..." required />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label htmlFor="email" className="block text-[#061425] font-semibold mb-2">2. ADRESĂ DE EMAIL</label>
                      <input type="email" id="email" name="email" className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Email..." required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <label htmlFor="company" className="block text-[#061425] font-semibold mb-2">3. DENUMIRE COMPANIE</label>
                      <input type="text" id="company" name="company" className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Companie..." required />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label htmlFor="enquiry" className="block text-[#061425] font-semibold mb-2">4. NUMĂR DE TELEFON</label>
                      <input type="text" id="enquiry" name="enquiry" className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="+40 770 202 977" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-[#061425] font-semibold mb-2">CUM TE PUTEM AJUTA?</label>
                    <textarea id="message" name="message" rows={6} className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#e05e3d]" placeholder="Producție video pentru companie software..." required></textarea>
                  </div>
                  <button type="submit" className="bg-[#e05e3d] text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300">Trimite mesajul</button>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#e05e3d] rounded-tl-full opacity-20"></div>
        </section>
      </main>

      <footer className="bg-[#34353a] text-white py-8 relative">
        <div className="container mx-auto px-4">
          <div className="z-10 absolute top-0 right-0 w-1/3 h-1/3 bg-[#e05e3d] rounded-tl-full opacity-20 transform rotate-180 scale-x-[-1]"></div>
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <Image src="/logoWhite.png" alt="Jumară Productions Logo" width={120} height={60} className="mb-4" />
              <p className="max-w-md text-sm font-bold">
                Transformăm idei în producții video de bun gust, aducând viziunea ta la viață pe ecran. Soluții creative pentru a amplifica prezența ta online.
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 md:gap-8 z-20">
              <Link href="/" className="hover:text-[#e05e3d] transition-colors font-bold z-20">ACASĂ</Link>
              <Link href="/projects" className="hover:text-[#e05e3d] transition-colors font-bold z-20">PROIECTE</Link>
              <Link href="/pricing" className="hover:text-[#e05e3d] transition-colors font-bold z-20">PREȚURI</Link>
              <Link href="/about" className="hover:text-[#e05e3d] transition-colors font-bold z-20">DESPRE NOI</Link>
              <Link href="/contact" className="hover:text-[#e05e3d] transition-colors font-bold z-20">CONTACT</Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-700 font-bold">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Jumară Productions. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#e05e3d] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="#" className="hover:text-[#e05e3d] transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-[#e05e3d] transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
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