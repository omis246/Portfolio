'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Database as DatabaseIcon, Server } from 'lucide-react'
import {
  SiPhp, SiPython, SiTypescript, SiDart,
  SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiNextdotjs, SiTailwindcss,
  SiLaravel, SiCodeigniter, SiFlask, SiWordpress,
  SiMysql, SiPostgresql, SiMongodb, SiSqlite
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { useLanguage } from './LanguageProvider'
import { ReactNode } from 'react'

type Skill = {
  name: string;
  description: string;
  icon: ReactNode;
}
type SkillCategory = {
  title: string;
  skills: Skill[];
  icon: React.ElementType;
  color: string;
}

export default function Skills() {
  const { lang } = useLanguage()
  const texts = {
    fr: {
      title: 'Mes Compétences',
      desc: 'Un aperçu des technologies et outils que je maîtrise pour créer des applications web modernes et performantes.',
      categories: [
        {
          title: 'Langages de Programmation',
          skills: [
            { name: 'PHP', description: 'Développement web backend' },
            { name: 'Python', description: 'Scripting et développement' },
            { name: 'TypeScript', description: 'JavaScript typé' },
            { name: 'JAVA', description: 'Développement orienté objet' },
            { name: 'Dart', description: 'Développement mobile' },
          ]
        },
        {
          title: 'Frontend & Design',
          skills: [
            { name: 'HTML5', description: 'Structure web' },
            { name: 'CSS3', description: 'Style web' },
            { name: 'JavaScript', description: 'Interactivité web' },
            { name: 'React', description: 'Interface utilisateur' },
            { name: 'Vue.js', description: 'Framework progressif' },
            { name: 'Next.js', description: 'React full-stack' },
            { name: 'Tailwind CSS', description: 'CSS utility-first' },
          ]
        },
        {
          title: 'Backend & Frameworks',
          skills: [
            { name: 'Laravel', description: 'Framework PHP moderne' },
            { name: 'CodeIgniter', description: 'Framework PHP léger' },
            { name: 'Flask', description: 'Micro-framework Python' },
            { name: 'WordPress', description: 'CMS populaire' },
          ]
        },
        {
          title: 'Base de Données',
          skills: [
            { name: 'MySQL', description: 'SGBD relationnel' },
            { name: 'PostgreSQL', description: 'SGBD avancé' },
            { name: 'MongoDB', description: 'Base NoSQL' },
            { name: 'SQLite', description: 'Base légère' },
          ]
        }
      ]
    },
    en: {
      title: 'My Skills',
      desc: 'An overview of the technologies and tools I master to build modern and high-performance web applications.',
      categories: [
        {
          title: 'Programming Languages',
          skills: [
            { name: 'PHP', description: 'Backend web development' },
            { name: 'Python', description: 'Scripting and development' },
            { name: 'TypeScript', description: 'Typed JavaScript' },
            { name: 'JAVA', description: 'Object-oriented development' },
            { name: 'Dart', description: 'Mobile development' },
          ]
        },
        {
          title: 'Frontend & Design',
          skills: [
            { name: 'HTML5', description: 'Web structure' },
            { name: 'CSS3', description: 'Web styling' },
            { name: 'JavaScript', description: 'Web interactivity' },
            { name: 'React', description: 'User interface' },
            { name: 'Vue.js', description: 'Progressive framework' },
            { name: 'Next.js', description: 'Full-stack React' },
            { name: 'Tailwind CSS', description: 'Utility-first CSS' },
          ]
        },
        {
          title: 'Backend & Frameworks',
          skills: [
            { name: 'Laravel', description: 'Modern PHP framework' },
            { name: 'CodeIgniter', description: 'Lightweight PHP framework' },
            { name: 'Flask', description: 'Python micro-framework' },
            { name: 'WordPress', description: 'Popular CMS' },
          ]
        },
        {
          title: 'Databases',
          skills: [
            { name: 'MySQL', description: 'Relational DBMS' },
            { name: 'PostgreSQL', description: 'Advanced DBMS' },
            { name: 'MongoDB', description: 'NoSQL database' },
            { name: 'SQLite', description: 'Lightweight database' },
          ]
        }
      ]
    }
  }
  // Ajout des icônes pour chaque catégorie et chaque skill
  const skillCategories: SkillCategory[] = [
    {
      ...texts[lang].categories[0],
      icon: Code,
      color: 'from-pink-500 to-yellow-500',
      skills: [
        { ...texts[lang].categories[0].skills[0], icon: <SiPhp className="text-[#777bb4]" size={24} /> },
        { ...texts[lang].categories[0].skills[1], icon: <SiPython className="text-[#3776ab]" size={24} /> },
        { ...texts[lang].categories[0].skills[2], icon: <SiTypescript className="text-[#3178c6]" size={24} /> },
        { ...texts[lang].categories[0].skills[3], icon: <FaJava className="text-[#007396]" size={24} /> },
        { ...texts[lang].categories[0].skills[4], icon: <SiDart className="text-[#0175c2]" size={24} /> },
      ]
    },
    {
      ...texts[lang].categories[1],
      icon: Palette,
      color: 'from-blue-500 to-purple-500',
      skills: [
        { ...texts[lang].categories[1].skills[0], icon: <SiHtml5 className="text-[#e34f26]" size={24} /> },
        { ...texts[lang].categories[1].skills[1], icon: <SiCss3 className="text-[#1572b6]" size={24} /> },
        { ...texts[lang].categories[1].skills[2], icon: <SiJavascript className="text-[#f7df1e]" size={24} /> },
        { ...texts[lang].categories[1].skills[3], icon: <SiReact className="text-[#61dafb]" size={24} /> },
        { ...texts[lang].categories[1].skills[4], icon: <SiVuedotjs className="text-[#42b883]" size={24} /> },
        { ...texts[lang].categories[1].skills[5], icon: <SiNextdotjs className="text-black dark:text-white" size={24} /> },
        { ...texts[lang].categories[1].skills[6], icon: <SiTailwindcss className="text-[#38bdf8]" size={24} /> },
      ]
    },
    {
      ...texts[lang].categories[2],
      icon: Server,
      color: 'from-green-500 to-blue-500',
      skills: [
        { ...texts[lang].categories[2].skills[0], icon: <SiLaravel className="text-[#ff2d20]" size={24} /> },
        { ...texts[lang].categories[2].skills[1], icon: <SiCodeigniter className="text-[#ee4623]" size={24} /> },
        { ...texts[lang].categories[2].skills[2], icon: <SiFlask className="text-[#000000]" size={24} /> },
        { ...texts[lang].categories[2].skills[3], icon: <SiWordpress className="text-[#21759b]" size={24} /> },
      ]
    },
    {
      ...texts[lang].categories[3],
      icon: DatabaseIcon,
      color: 'from-yellow-500 to-green-500',
      skills: [
        { ...texts[lang].categories[3].skills[0], icon: <SiMysql className="text-[#4479a1]" size={24} /> },
        { ...texts[lang].categories[3].skills[1], icon: <SiPostgresql className="text-[#336791]" size={24} /> },
        { ...texts[lang].categories[3].skills[2], icon: <SiMongodb className="text-[#47a248]" size={24} /> },
        { ...texts[lang].categories[3].skills[3], icon: <SiSqlite className="text-[#003b57]" size={24} /> },
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="inline-flex items-center justify-center">
                    <category.icon size={28} className="inline-block text-blue-600 dark:text-blue-400" />
                  </span>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 