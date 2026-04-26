import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/I18nContext';

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative h-screen overflow-hidden bg-void">
      {/* Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/72874aaf3_Logodfinitif14versionbleuargent.png"
          alt="SNPE Logo"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/80" />
      </div>

      {/* Animated scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,242,255,0.1) 2px, rgba(0,242,255,0.1) 4px)'
        }} />
        <div className="absolute left-0 right-0 h-px bg-pulse/20 animate-scan-line" />
      </div>

      {/* Decorative Vector Lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-pulse/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-px h-48 bg-gradient-to-b from-transparent via-prestige/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="font-heading text-xs sm:text-sm text-pulse/80 uppercase mb-4 tracking-widest"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight tracking-tight max-w-3xl mx-auto">
            <span className="block text-foreground">{t('hero.title1')}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pulse via-foreground to-prestige text-glow-cyan">
              {t('hero.title2')}
            </span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto tracking-wide"
          >
            {t('hero.tagline')}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <a href="/faire-un-don" className="group relative px-10 py-4 bg-pulse border border-pulse text-void font-heading text-sm tracking-widest uppercase hover:bg-transparent hover:text-pulse transition-all duration-300 glow-cyan">
              <span className="relative z-10">{t('nav.donate')}</span>
            </a>

          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-heading text-[10px] tracking-widest uppercase text-muted-foreground">{t('hero.scroll')}</span>
          <ChevronDown className="w-4 h-4 text-pulse animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}