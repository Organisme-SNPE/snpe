import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertTriangle, Droplets, Heart, Shield, Grid3X3, X, Users, Sparkles } from 'lucide-react';
import { champions, roles } from '@/lib/championData';
import { useI18n } from '@/lib/I18nContext';

const iconMap = { Grid3X3, AlertTriangle, Droplets, Heart, Shield, Users, Sparkles };

const rolesList = [
  { id: 'all', icon: 'Grid3X3' },
  { id: 'urgence', icon: 'AlertTriangle' },
  { id: 'enfance', icon: 'Heart' },
  { id: 'precarite', icon: 'Shield' },
  { id: 'eau', icon: 'Droplets' },
  { id: 'proprete', icon: 'Users' }
];

export default function Champions() {
  const { t, language } = useI18n();
  const [activeRole, setActiveRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChampion, setSelectedChampion] = useState(null);

  const filtered = champions.filter(c => {
    const roleMatch = activeRole === 'all' || c.role === activeRole;
    const champ = c.translations[language];
    const searchMatch = 
      champ.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      champ.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      champ.description.toLowerCase().includes(searchQuery.toLowerCase());
    return roleMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Hero Banner */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-glass to-void" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-2">SNPE — N'Djamena, Tchad</p>
          <h1 className="font-heading text-4xl md:text-7xl uppercase tracking-tight text-foreground">
            {t('champions.hero')}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {t('champions.description')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('champions.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-glass border border-border text-foreground text-sm font-body placeholder:text-muted-foreground focus:border-pulse focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {rolesList.map((role) => {
              const Icon = iconMap[role.icon];
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-heading text-[11px] tracking-widest uppercase transition-all border ${
                    activeRole === role.id
                      ? 'bg-pulse/10 border-pulse text-pulse'
                      : 'border-border text-muted-foreground hover:border-pulse/30'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t(`champions.roles.${role.id}`)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <AnimatePresence>
            {filtered.map((champ, i) => (
              <motion.div
                key={champ.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.03 }}
                className="group cursor-pointer"
                onClick={() => setSelectedChampion(champ)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border group-hover:border-pulse/50 transition-all duration-500 bg-glass flex items-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-heading text-sm uppercase tracking-wider text-foreground group-hover:text-pulse transition-colors truncate">
                      {champ.translations[language].name}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-heading tracking-wider uppercase truncate">
                      {champ.translations[language].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-heading tracking-wider">{t('champions.noResults')}</p>
          </div>
        )}
      </div>

      {/* Champion Detail Modal */}
      <AnimatePresence>
        {selectedChampion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/90 backdrop-blur-xl"
            onClick={() => setSelectedChampion(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-glass border border-border rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedChampion(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-void/50 border border-border text-foreground hover:text-pulse transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[3/4] md:aspect-auto bg-glass flex items-center justify-center">
                  <p className="text-muted-foreground text-sm font-heading tracking-wider uppercase">Contenu visuel</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-glass/50 hidden md:block" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="font-heading text-[10px] tracking-widest uppercase text-pulse border border-pulse/30 px-2 py-1 inline-block w-fit mb-4">
                    {selectedChampion.role}
                  </span>
                  <h2 className="font-heading text-3xl uppercase tracking-wider text-foreground">
                    {selectedChampion.translations[language].name}
                  </h2>
                  <p className="font-heading text-sm text-prestige tracking-wider uppercase mt-1">
                    {selectedChampion.translations[language].title}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {selectedChampion.translations[language].description}
                  </p>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}