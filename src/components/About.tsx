'use client'

import { motion } from 'framer-motion'
import { Heart, Music, Utensils } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { lang } = useLanguage()
  const texts = {
    fr: `Maîtrisant l’art du développement web et mobile, je suis un développeur Full-stack passionné par l’innovation et la qualité. Que ce soit en freelance, en entreprise ou à l’université, j’ai accompagné des clients et des équipes dans la réalisation de solutions digitales performantes, sur-mesure et sécurisées.<br />
Créatif, rigoureux et à l’écoute, j’aime transformer les idées en applications concrètes, intuitives et évolutives. Mon expertise couvre l’ensemble du cycle de développement : de la conception à la mise en production, en passant par l’optimisation de l’expérience utilisateur et la sécurité.<br />
Si vous recherchez un professionnel capable de donner vie à vos projets web ou mobiles, d’apporter une réelle valeur ajoutée et de relever de nouveaux défis, je suis prêt à collaborer pour concrétiser votre vision digitale.`,
    en: `Mastering the art of web and mobile development, I am a passionate Full-stack developer driven by innovation and quality. Whether as a freelancer, in a company or at university, I have supported clients and teams in delivering high-performance, tailor-made and secure digital solutions.<br />
Creative, rigorous and attentive, I love turning ideas into concrete, intuitive and scalable applications. My expertise covers the entire development cycle: from design to production, including user experience optimization and security.<br />
If you are looking for a professional able to bring your web or mobile projects to life, add real value and take on new challenges, I am ready to collaborate and make your digital vision a reality.`
  }
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#393053] to-[#635985] rounded-full flex items-center justify-center shadow-2xl border-8 border-[#FFD700]/20 overflow-hidden">
                <Image
                  src="/1194HF.png"
                  alt="Photo de Kevin Annop Soraya"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
                  <Music size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Musique</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Guitare, flûte</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
                  <Heart size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Basketball</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Sport</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
                  <Utensils size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Cuisine</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Passion</div>
              </div>
            </div>
          </motion.div>
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                À propos de moi
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: texts[lang] }} />
         
           
          
          </motion.div>
        </div>
      </div>
    </section>
  )
} 