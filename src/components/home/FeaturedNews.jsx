import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '@/lib/championData';
import { useI18n } from '@/lib/I18nContext';

function NewsCard({ item, index }) {
  const { language } = useI18n();
  const isLarge = item.size === 'large';
  const isMedium = item.size === 'medium';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-sm border border-border hover:border-pulse/30 transition-all duration-500 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : isMedium ? 'md:col-span-1 md:row-span-2' : ''
      }`}
    >
      <Link to={`/news/${item.id}`} className="block h-full">
        <div className="relative h-full min-h-[200px]">
    
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
          <div className="absolute inset-0 bg-void/20 group-hover:bg-void/10 transition-colors" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 bg-pulse/20 text-pulse text-[10px] font-heading tracking-widest uppercase border border-pulse/20">
                {item.translations[language].category}
              </span>
              <span className="text-[10px] text-muted-foreground font-heading tracking-wider">{item.date}</span>
            </div>
            <h3 className={`font-heading uppercase tracking-wide text-foreground group-hover:text-pulse transition-colors ${
              isLarge ? 'text-xl md:text-2xl' : 'text-sm md:text-base'
            }`}>
              {item.translations[language].title}
            </h3>
            {(isLarge || isMedium) && (
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{item.translations[language].description}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedNews() {
  const { t } = useI18n();
  return (
    <section className="relative py-20 md:py-32 bg-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-2">{t('news.label')}</p>
            <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-tight text-foreground">
              {t('news.title')}
            </h2>
          </div>
          <Link to="/news" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-pulse transition-colors font-heading tracking-wider uppercase group">
            {t('news.viewAll')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {newsItems.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}