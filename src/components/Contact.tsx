'use client'

import { motion } from 'framer-motion'
import { MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import React, { useState, useRef } from 'react';
import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { lang } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: MdEmail,
      title: 'Email',
      value: 'kevinannopsoraya@gmail.com',
      href: 'mailto:kevinannopsoraya@gmail.com'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '034 514 09 52',
      href: 'https://wa.me/261345140952'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Madagascar, Antananarivo',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      href: 'https://github.com/omis246',
      color: 'hover:bg-gray-900 dark:hover:bg-gray-700'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/votreusername',
      color: 'hover:bg-blue-600 dark:hover:bg-blue-500'
    },

  ]

  const texts = {
    fr: {
      title: 'Contactez-moi',
      desc: "Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.",
      infoTitle: 'Informations de Contact',
      infoDesc: "Je suis toujours ouvert aux nouvelles opportunités et collaborations intéressantes. N'hésitez pas à me contacter pour discuter de vos projets.",
      follow: 'Suivez-moi',
      formTitle: 'Envoyez-moi un message',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      placeholderFirstName: 'Votre prénom',
      placeholderLastName: 'Votre nom',
      placeholderEmail: 'votre@email.com',
      placeholderSubject: 'Sujet de votre message',
      placeholderMessage: 'Votre message...',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Merci, votre message a bien été envoyé !',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      available: 'Disponible pour de nouvelles opportunités',
    },
    en: {
      title: 'Contact Me',
      desc: "Interested in my profile? Feel free to contact me to discuss your projects or collaboration opportunities.",
      infoTitle: 'Contact Information',
      infoDesc: "I am always open to new opportunities and interesting collaborations. Feel free to contact me to discuss your projects.",
      follow: 'Follow me',
      formTitle: 'Send me a message',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      placeholderFirstName: 'Your first name',
      placeholderLastName: 'Your last name',
      placeholderEmail: 'your@email.com',
      placeholderSubject: 'Subject of your message',
      placeholderMessage: 'Your message...',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Thank you, your message has been sent!',
      error: 'An error occurred. Please try again.',
      available: 'Available for new opportunities',
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            {texts[lang].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 shadow-lg"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {texts[lang].desc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                {texts[lang].infoTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                {texts[lang].infoDesc}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <info.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {texts[lang].follow}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, boxShadow: '0 4px 24px 0 rgba(80, 70, 229, 0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-white/80 dark:bg-slate-800/80 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-md hover:shadow-xl transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              {texts[lang].formTitle}
            </h3>

            <form
              ref={formRef}
              className="space-y-6"
              action="https://formspree.io/f/xwpqewek"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus('sending');
                const form = e.currentTarget;
                const data = new FormData(form);
                try {
                  const res = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: { Accept: 'application/json' },
                  });
                  if (res.ok) {
                    setStatus('success');
                    formRef.current?.reset();
                  } else {
                    setStatus('error');
                  }
                } catch {
                  setStatus('error');
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {texts[lang].firstName}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-5 py-3 border-0 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm"
                    placeholder={texts[lang].placeholderFirstName}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {texts[lang].lastName}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-5 py-3 border-0 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm"
                    placeholder={texts[lang].placeholderLastName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {texts[lang].email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-3 border-0 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm"
                  placeholder={texts[lang].placeholderEmail}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {texts[lang].subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-5 py-3 border-0 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm"
                  placeholder={texts[lang].placeholderSubject}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {texts[lang].message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-3 border-0 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm resize-none"
                  placeholder={texts[lang].placeholderMessage}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 24px 0 rgba(80, 70, 229, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full font-semibold text-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 shadow-lg"
                disabled={status === 'sending'}
              >
                <Send size={20} />
                <span>{status === 'sending' ? texts[lang].sending : texts[lang].send}</span>
              </motion.button>
            </form>
            {status === 'success' && (
              <div className="mt-4 text-green-600 font-semibold text-center">{texts[lang].success}</div>
            )}
            {status === 'error' && (
              <div className="mt-4 text-red-600 font-semibold text-center">{texts[lang].error}</div>
            )}
          </motion.div>
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-8 py-4 rounded-full shadow-md">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-lg">{texts[lang].available}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 