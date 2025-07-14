'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Expand } from 'lucide-react'
import { useState, useEffect } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

export default function Projects() {
  const { lang } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)
  const texts = {
    fr: {
      title: 'Mes Projets',
      desc: 'Découvrez une sélection de mes projets récents, démontrant mes compétences en développement web et mobile.',
      all: 'Tous les Projets',
      seeAll: 'Voir tous les projets',
      demo: 'Démo',
      detail: 'Voir le projet en détail',
      github: 'GitHub',
      period: 'Période',
      tech: 'Technologies',
      close: 'Fermer',
      noPeriod: 'Période non précisée',
    },
    en: {
      title: 'My Projects',
      desc: 'Discover a selection of my recent projects, showcasing my skills in web and mobile development.',
      all: 'All Projects',
      seeAll: 'See all projects',
      demo: 'Demo',
      detail: 'View project details',
      github: 'GitHub',
      period: 'Period',
      tech: 'Technologies',
      close: 'Close',
      noPeriod: 'No period specified',
    }
  }
  const projects = [
    {
      title: 'Gestion de planning d’Entreprise',
      description: 'Application web pour la gestion du personnel et la planification hebdomadaire des tâches, avec tableau de bord interactif et génération automatique de rapports PDF.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
      category: 'Full Stack',
      icon: Globe,
      github: '#',
      live: '#',
      featured: true,
      period: 'Avril - Juin 2025',
      images: ['/affichage plannings.png', '/plannings.png'],
    },
    {
      title: 'Gestion de la scolarité Universitaire',
      description: 'Application pour la gestion de la scolarité universitaire, suivi des notes, gestion financière, planification des emplois du temps, gestion des rôles et génération de documents PDF.',
      technologies: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
      category: 'Full Stack',
      icon: Globe,
      github: '#',
      live: '#',
      featured: true,
      period: 'Décembre - Avril 2025',
      images: [
        '/login masca.png',
        '/filiere.png',
        '/matieres.png',
        '/edt.png',
        '/fiche de renseignement.png',
        '/bulletin archivé.png',                 
      ],
    },
    {
      title: ' MINICO',
      description: 'Application pour faciliter les problèmes de transports en utilisant la methode MINICO.',
      technologies: ['Python','Flask', 'Bootstrap'],
      category: 'Full Stack',
      icon: Globe,
      github: '#',
      live: 'https://transport-minico-flask.onrender.com/',
      featured: false,
      images:[
        '/minico.png',
      ]
     
    },
    {
      title: 'Gestion des Congés',
      description: 'Application pour la gestion des congés des employés, demandes, validation, calcul automatique des droits, historique, interface de consultation pour employé et responsable.',
      technologies: ['CodeIgniter', 'MySQL', 'Bootstrap'],
      category: 'Backend',
      icon: Code,
      github: '#',
      live: '#',
      featured: false,
      period: 'Août - Novembre 2023',
      images: [
        '/login.png',
        '/ajout perso.png',
        '/modif.png',
        '/liste perso.png',
        '/demande.png',
        '/liste demande.png',
        '/attente.png',   
        '/coordonnée.png',               
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {texts[lang].title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {texts[lang].desc}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {project.images ? (
                    <ProjectSlider images={project.images} heightClass="h-64" />
                  ) : (
                    <project.icon size={80} className="text-white opacity-80" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div id="all-projects">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            {texts[lang].all}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {project.images ? (
                    <ProjectSlider images={project.images} heightClass="h-48" />
                  ) : (
                    <project.icon size={60} className="text-white opacity-80" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Github size={14} />
                      </motion.a>
                      <motion.a
                        href="#"
                        onClick={e => { e.preventDefault(); setSelectedProject(project); }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        aria-label={texts[lang].detail}
                      >
                        <Expand size={16} />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1.5 rounded bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-600 transition-colors font-semibold text-xs"
                          aria-label="Voir la démo du projet"
                        >
                          {texts[lang].demo}
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            onClick={() => {
              const el = document.getElementById('all-projects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {texts[lang].seeAll}
          </motion.button>
        </motion.div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center overflow-y-auto p-8" style={{maxHeight:'100vh'}}>
          <button onClick={() => setSelectedProject(null)} className="self-end mb-4 text-white text-3xl font-bold" aria-label={texts[lang].close}>&times;</button>
          <div className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 flex flex-col gap-8 items-center">
            <div className="w-full">
              {selectedProject.images ? (
                <ProjectSlider images={selectedProject.images} heightClass="h-64" />
              ) : (
                <selectedProject.icon size={80} className="text-blue-600 dark:text-blue-400 mb-4" />
              )}
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{selectedProject.period || texts[lang].noPeriod}</div>
              <p className="text-base text-slate-700 dark:text-slate-200 mb-2">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedProject.technologies && selectedProject.technologies.map((tech: string) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                {selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">{texts[lang].github}</a>}
                {selectedProject.live && <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 underline">{texts[lang].demo}</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

const ProjectSlider: FC<{ images: string[]; heightClass?: string; initialIndex?: number }> = ({ images, heightClass = 'h-64', initialIndex = 0 }) => {
  const [current, setCurrent] = useState(initialIndex)
  const [isOpen, setIsOpen] = useState(false)
  const [zoomIndex, setZoomIndex] = useState(initialIndex)
  // Auto-play : avance toutes les 3 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      if (isOpen) {
        setZoomIndex((prev) => (prev + 1) % images.length)
      } else {
        setCurrent((prev) => (prev + 1) % images.length)
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length, isOpen])
  // Ouvre la modale au clic sur l'image
  const handleImageClick = () => {
    setZoomIndex(current)
    setIsOpen(true)
  }
  // Navigation dans la modale
  const next = () => setZoomIndex((zoomIndex + 1) % images.length)
  const prev = () => setZoomIndex((zoomIndex - 1 + images.length) % images.length)
  return (
    <>
      <div className={`relative w-full h-full flex items-center justify-center ${heightClass}`}>
        <button
          type="button"
          onClick={handleImageClick}
          aria-label="Agrandir l'image"
          className={`w-full h-full p-0 m-0 border-0 bg-transparent cursor-pointer rounded-lg`}
          style={{ lineHeight: 0 }}
        >
          <Image
            src={images[current]}
            alt="Projet"
            width={800}
            height={400}
            className={`object-contain w-full rounded-lg ${heightClass}`}
            style={{ maxHeight: heightClass === 'h-64' ? '16rem' : '12rem', width: '100%', height: 'auto' }}
            priority={current === 0}
          />
        </button>
        {images.length > 1 && (
          <>
            <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1">&#8592;</button>
            <button onClick={() => setCurrent((current + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1">&#8594;</button>
          </>
        )}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_: string, i: number) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`}></span>
          ))}
        </div>
      </div>
      {/* Lightbox modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setIsOpen(false)}>
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-white text-3xl font-bold">&times;</button>
            <Image
              src={images[zoomIndex]}
              alt="Zoom projet"
              width={1600}
              height={900}
              className="object-contain w-auto max-w-full max-h-[90vh] rounded-lg bg-white mx-auto"
              priority
            />
            {images.length > 1 && (
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button onClick={prev} className="text-white text-4xl px-4">&#8592;</button>
              </div>
            )}
            {images.length > 1 && (
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button onClick={next} className="text-white text-4xl px-4">&#8594;</button>
              </div>
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_: string, i: number) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i === zoomIndex ? 'bg-white' : 'bg-white/40'}`}></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
} 