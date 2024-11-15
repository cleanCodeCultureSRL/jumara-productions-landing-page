'use client'

import { Facebook, Heart, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const colors = {
    orange: '#cb7536',
    navy: '#061425',
    white: '#efddc5',
    black: '#061425',
    red: '#e05e3d'
  }

  const navigateToSection = (sectionId) => {
    window.location.href = `/#${sectionId}`;
    setIsMenuOpen(false);
  };



  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.querySelector('.menu-container');
      if (menuElement && !menuElement.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#34353a] overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#e05e3d] opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full border-4 border-[#cb7536] opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 transform rotate-45 bg-[#efddc5] opacity-20 animate-bounce"></div>

      <header className="bg-[#061425] absolute top-0 left-0 right-0 z-50 sticky">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-h-[70px]">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logoWhite.png" alt="Jumară Productions Logo" width={80} height={40} />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 h-full py-2">
            <button onClick={() => navigateToSection('home')} className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group `}>
              ACASĂ
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`} />
            </button>
            <button onClick={() => navigateToSection('aboutUs')} className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group `}>
              DESPRE NOI
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`} />
            </button>
            <button onClick={() => navigateToSection('howWeWork')} className={`text-[${colors.white}] hover:text-[${colors.red}] font-bold flex items-center h-full relative group `}>
              CUM LUCRĂM
              <span className={`absolute bottom-[-4px] left-0 w-full h-1 bg-[${colors.red}] transform transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100`} />
            </button>
            <button onClick={() => navigateToSection('contact')} className={`bg-[${colors.red}] text-[${colors.white}] px-4 py-2 font-bold rounded hover:bg-opacity-90 flex items-center h-[calc(100%-16px)] my-2`}>CONTACT</button>
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
          <div className="menu-container  md:hidden bg-[#061425] bg-opacity-70">
            <button onClick={() => navigateToSection('home')} className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}>ACASĂ</button>
            <button onClick={() => navigateToSection('aboutUs')} className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}>DESPRE NOI</button>
            <button onClick={() => navigateToSection('howWeWork')} className={`block py-2 px-4 text-sm font-bold text-[${colors.white}] hover:bg-gray-800 w-full text-left`}>CUM LUCRĂM</button>
            <button onClick={() => navigateToSection('contact')} className={`block py-2 px-4 text-sm bg-[${colors.red}] text-[${colors.white}] hover:bg-opacity-90 w-full text-left`}>CONTACT</button>
          </div>
        )}
      </header>

      <main className="flex-grow z-10 relative flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className={`text-9xl font-bold text-[${colors.red}] mb-4`}>404</h1>
          <h2 className={`text-4xl font-bold text-[${colors.white}] mb-8`}>Not found</h2>
          <p className={`text-xl text-[${colors.white}] mb-8 max-w-md mx-auto`}>
            Ne pare rău, dar pagina pe care o căutați nu există!
          </p>
          <Link
            href="/"
            className={`inline-flex items-center px-6 py-3 rounded-full bg-[${colors.red}] text-[${colors.white}] font-bold hover:bg-opacity-90 transition duration-300`}
          >
            Înapoi la pagina principală
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/6 bg-[#e05e3d] rounded-tl-full opacity-20"></div>

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
          <div className="flex flex-col items-center pt-4 border-t border-gray-700 font-bold">
            <div className='flex flex-row justify-between w-full'>
              <div>
                <p className="text-sm mb-2">
                  © {new Date().getFullYear()} Jumară Productions. Toate drepturile rezervate.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="https://wa.me/40770202977" className="hover:text-[#e05e3d] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a href="https://www.instagram.com/jumaraproductions.ro/" className="hover:text-[#e05e3d] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://web.facebook.com/jumaraproductions.ro" className="hover:text-[#e05e3d] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.tiktok.com/@jumaraproductions.ro" className="hover:text-[#e05e3d] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>

            <p className="text-sm flex items-center mb-4">
              Created with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by{' '}
              <a href="https://www.cleancodeculture.com" className="ml-1 hover:text-[#e05e3d] transition-colors">
                www.cleancodeculture.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}