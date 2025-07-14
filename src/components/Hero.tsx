'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const name = 'KEVIN Annop Soraya'
  const [displayedName, setDisplayedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const { lang } = useLanguage()

  const texts = {
    fr: {
      subtitle: 'Développeur Full-stack | Web & Mobile',
      description: `Passionné par l’innovation digitale, j’accompagne entreprises et institutions dans la création de solutions web et mobiles performantes, sur-mesure et sécurisées. Actuellement en Master Informatique à l’ENI Fianarantsoa, je mets mon expertise au service de vos projets, en freelance, en stage ou en collaboration.`
    },
    en: {
      subtitle: 'Full-stack Developer | Web & Mobile',
      description: `Passionate about digital innovation, I help companies and institutions create high-performance, tailor-made and secure web and mobile solutions. Currently pursuing a Master’s in Computer Science at ENI Fianarantsoa, I put my expertise at the service of your projects, as a freelancer, intern or collaborator.`
    }
  }

  useEffect(() => {
    setDisplayedName('')
    setIsTyping(true)
    let i = 0
    function type() {
      if (i <= name.length) {
        setDisplayedName(name.slice(0, i))
        i++
        setTimeout(type, 90)
      } else {
        setIsTyping(false)
      }
    }
    type()
    return () => setIsTyping(false)
  }, [name])

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/omis246',
      label: 'GitHub',
      color: '#181717',
      bg: 'bg-white',
      hover: 'hover:bg-[#181717] hover:text-white',
      border: 'border-[#181717]/20',
    },
    {
      icon: MdEmail,
      href: 'mailto:kevinannopsoraya@gmail.com',
      label: 'Email',
      color: '#EA4335',
      bg: 'bg-white',
      hover: 'hover:bg-[#EA4335] hover:text-white',
      border: 'border-[#EA4335]/20',
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/2615140952',
      label: 'WhatsApp',
      color: '#25D366',
      bg: 'bg-white',
      hover: 'hover:bg-[#25D366] hover:text-white',
      border: 'border-[#25D366]/20',
      isExternal: true,
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-[#a18cd1] via-[#fbc2eb] to-[#fad0c4] bg-clip-text text-transparent">
              {displayedName}
              {isTyping ? <span className="animate-pulse text-pink-300">|</span> : null}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-blue-700 dark:text-blue-400 font-semibold mb-2"
          >
            {texts[lang].subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            {texts[lang].description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="/CV_KEVIN_ANNOP_SORAYA.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <Download size={20} />
              Télécharger CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Me contacter
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => {
              const extraProps = social.isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {}
              // Icône GitHub en blanc pur, fond transparent
              const isGithub = social.label === 'GitHub'
              const iconStyle = isGithub
                ? { color: '#fff' }
                : { color: social.color }
              // Bouton toujours transparent
              const buttonClass = 'p-4 rounded-full bg-transparent transition-all flex items-center justify-center'
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  {...extraProps}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.96 }}
                  className={buttonClass}
                  aria-label={social.label}
                >
                  <social.icon size={32} style={iconStyle} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 