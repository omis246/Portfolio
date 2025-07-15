'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import { useLanguage } from './LanguageProvider'
import Head from 'next/head'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const texts = {
    fr: {
      logo: 'Portfolio',
      nav: [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    en: {
      logo: 'Portfolio',
      nav: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  }
  const navItems = texts[lang].nav

  return (
    <>
      <Head>
        <title>Portfolio KEVIN</title>
      </Head>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              {texts[lang].logo}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Lang Switcher & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Lang Switcher */}
              <button
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors font-semibold"
              >
                {lang === 'fr' ? 'FR' : 'EN'}
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300"
              >
                {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-slate-700"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  )
} 