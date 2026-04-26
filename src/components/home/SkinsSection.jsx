import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nContext';

export default function SkinsSection() {
  const { t } = useI18n();
  return (
    <section className="relative py-20 md:py-32 bg-void overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-void" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-xs tracking-widest uppercase text-prestige mb-2">{t('vision.label')}</p>
            <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tight text-foreground mb-6">
              {t('vision.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t('vision.description')}
            </p>
            <button className="mt-8 px-10 py-4 bg-prestige/10 border border-prestige/50 text-prestige font-heading text-sm tracking-widest uppercase hover:bg-prestige hover:text-void transition-all duration-300 glow-gold">
              {t('vision.button')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-sm overflow-hidden border border-prestige/20 bg-glass">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-muted-foreground text-sm font-heading tracking-wider uppercase">Contenu visuel</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-prestige/30" />
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-prestige/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}