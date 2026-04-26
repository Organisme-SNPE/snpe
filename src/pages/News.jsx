import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsItems } from '@/lib/championData';
import { useI18n } from '@/lib/I18nContext';

export default function News() {
  const { t, language } = useI18n();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: t('news.categories.all') },
    { id: "terrain", label: t('news.categories.terrain') },
    { id: "rapport", label: t('news.categories.rapport') },
    { id: "sante", label: t('news.categories.sante') },
    { id: "infrastructure", label: t('news.categories.infrastructure') },
    { id: "partenariats", label: t('news.categories.partenariats') }
  ];

  const categoryMap = {
    all: null,
    terrain: "Actions terrain",
    rapport: "Rapport",
    sante: "Santé",
    infrastructure: "Infrastructure",
    partenariats: "Partenariats"
  };

  const filtered = activeCategory === "all"
    ? newsItems
    : newsItems.filter(n => n.translations[language].category === categoryMap[activeCategory]);

  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-glass to-void" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-2">{t('news.label')}</p>
          <h1 className="font-heading text-4xl md:text-7xl uppercase tracking-tight text-foreground">
            {t('news.title')}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-heading text-[11px] tracking-widest uppercase transition-all border ${
                activeCategory === cat.id
                  ? 'bg-pulse/10 border-pulse text-pulse'
                  : 'border-border text-muted-foreground hover:border-pulse/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm border border-border hover:border-pulse/30 transition-all"
            >
              <Link to={`/news/${item.id}`} className="block h-full">
                <div className="relative aspect-video">

                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                </div>
                <div className="p-5 bg-glass">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 bg-pulse/20 text-pulse text-[10px] font-heading tracking-widest uppercase border border-pulse/20">
                      {item.translations[language].category}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-heading tracking-wider">{item.date}</span>
                  </div>
                  <h3 className="font-heading text-base uppercase tracking-wide text-foreground group-hover:text-pulse transition-colors">
                    {item.translations[language].title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{item.translations[language].description}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}