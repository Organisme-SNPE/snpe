import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gameModes } from '@/lib/championData';
import { useI18n } from '@/lib/I18nContext';

export default function GameModes() {
  const { t, language } = useI18n();
  const [activeMode, setActiveMode] = useState('urgence');
  const active = gameModes.find(m => m.id === activeMode);

  return (
    <section className="relative py-20 md:py-32 bg-glass overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-2">{t('actions.label')}</p>
          <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tight text-foreground">{t('actions.title')}</h2>
        </div>

        {/* Mode Selector */}
        <div className="flex justify-center gap-3 mb-12">
          {gameModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`relative px-6 py-3 font-heading text-xs sm:text-sm tracking-widest uppercase transition-all border ${
                activeMode === mode.id
                  ? 'bg-pulse/10 border-pulse text-pulse'
                  : 'border-border text-muted-foreground hover:border-pulse/30'
              }`}
            >
              {mode.translations[language].name}
              {activeMode === mode.id && (
                <motion.div
                  layoutId="mode-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-pulse"
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Mode Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-sm overflow-hidden border border-border"
          >
            <div className="relative aspect-video md:aspect-[21/9] bg-glass flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-void via-void/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <h3 className="font-heading text-2xl md:text-4xl uppercase tracking-wider text-foreground mb-3">
                  {active.translations[language].name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                  {active.translations[language].description}
                </p>
                <Link to="/faire-un-don" className="inline-block mt-6 px-8 py-3 bg-pulse/10 border border-pulse/50 text-pulse font-heading text-sm tracking-widest uppercase hover:bg-pulse hover:text-void transition-all duration-300">
                  {t('nav.donate')}
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}