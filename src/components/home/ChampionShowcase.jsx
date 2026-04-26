import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertTriangle, Flame, Droplets, Target, Heart, Shield, Grid3X3, Users, Sparkles } from 'lucide-react';
import { champions, roles } from '@/lib/championData';
import { useI18n } from '@/lib/I18nContext';

const iconMap = { Grid3X3, AlertTriangle, Flame, Droplets, Target, Heart, Shield, Users, Sparkles };

export default function ChampionShowcase() {
  const { t, language } = useI18n();
  const [activeRole, setActiveRole] = useState('all');
  const [hoveredChampion, setHoveredChampion] = useState(null);

  const filtered = activeRole === 'all' 
    ? champions.slice(0, 6) 
    : champions.filter(c => c.role === activeRole).slice(0, 6);

  return (
    <section className="relative py-20 md:py-32 bg-glass overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,242,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-heading text-xs tracking-widest uppercase text-prestige mb-2">{t('actions.label')}</p>
          <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tight text-foreground">
            {t('actions.title')}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            {t('champions.description')}
          </p>
        </div>

        {/* Role Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {roles.map((role) => {
            const Icon = iconMap[role.icon];
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center gap-2 px-4 py-2 font-heading text-xs tracking-widest uppercase transition-all border ${
                  activeRole === role.id
                    ? 'bg-pulse/10 border-pulse text-pulse glow-cyan'
                    : 'border-border text-muted-foreground hover:border-pulse/30 hover:text-foreground'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {role.name}
              </button>
            );
          })}
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <AnimatePresence mode="wait">
            {filtered.map((champ, i) => (
              <motion.div
                key={champ.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredChampion(champ.id)}
                onMouseLeave={() => setHoveredChampion(null)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border group-hover:border-pulse/50 transition-all duration-500 bg-glass flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm font-heading tracking-wider uppercase">Contenu visuel</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-pulse/5 transition-opacity duration-300 ${
                    hoveredChampion === champ.id ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-heading text-sm uppercase tracking-wider text-foreground group-hover:text-pulse transition-colors">
                      {champ.translations[language].name}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-heading tracking-wider uppercase">
                      {champ.translations[language].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/champions"
            className="inline-flex items-center gap-2 px-8 py-3 border border-pulse/30 text-pulse font-heading text-sm tracking-widest uppercase hover:bg-pulse/10 transition-all group"
          >
            {t('champions.viewAll')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}