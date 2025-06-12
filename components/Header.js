'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-background-light">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-text">
            Paige Hokanson
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('projects')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-link">Projects</button>
              <div 
                className={`absolute w-48 bg-background-light rounded-lg shadow-lg py-2 mt-2 transition-all duration-200 ${
                  activeDropdown === 'projects' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Link href="#project-1" className="block px-4 py-2 hover:bg-background">Full-Stack E-Commerce Application</Link>
                <Link href="#project-2" className="block px-4 py-2 hover:bg-background">Google Cloud Honeypot & Threat Visualization</Link>
              </div>
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('socials')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-link">Socials</button>
              <div 
                className={`absolute w-48 bg-background-light rounded-lg shadow-lg py-2 mt-2 transition-all duration-200 ${
                  activeDropdown === 'socials' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <a 
                  href="https://linkedin.com/in/paige-hokanson" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-2 hover:bg-background"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/paigehokanson" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-2 hover:bg-background"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://youtube.com/@Paige-Hokanson" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-2 hover:bg-background"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
            
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
            <a href="/resume.pdf" className="btn-primary">Download Resume</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background-light rounded-lg mt-2 py-2">
            <Link href="#project-1" className="block px-4 py-2 hover:bg-background">Project 1</Link>
            <Link href="#project-2" className="block px-4 py-2 hover:bg-background">Project 2</Link>
            <Link href="#about" className="block px-4 py-2 hover:bg-background">About</Link>
            <Link href="#contact" className="block px-4 py-2 hover:bg-background">Contact</Link>
            <div className="px-4 py-2">
              <a href="/resume.pdf" className="btn-primary block text-center">Download Resume</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 