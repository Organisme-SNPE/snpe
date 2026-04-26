import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Heart, Shield, Globe, Zap, Search, MapPin, Briefcase, X, ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/I18nContext';

const departments = [
  { id: 'all', label: 'Tous les départements' },
  { id: 'operations', label: 'Opérations' },
  { id: 'programs', label: 'Programmes' },
  { id: 'finance', label: 'Finances' },
  { id: 'communications', label: 'Communications' },
  { id: 'partnerships', label: 'Partenariats' },
];

const locations = [
  { id: 'all', label: 'Tous les lieux' },
  { id: 'ndjamena', label: "N'Djamena" },
  { id: 'remote', label: 'Remote' },
];

const jobTypes = [
  { id: 'all', label: 'Tous les types' },
  { id: 'fulltime', label: 'Temps plein' },
  { id: 'contract', label: 'Contrat' },
  { id: 'volunteer', label: 'Bénévolat' },
];

const openRoles = [
  { id: 1, title: 'Spécialiste Audiovisuel', department: 'communications', location: 'remote', type: 'fulltime', description: 'Créer et monter des contenus vidéo et photo pour la documentation des actions humanitaires.' },
  { id: 2, title: 'Agent de Terrain - Protection Enfance', department: 'operations', location: 'ndjamena', type: 'fulltime', description: 'Intervenir directement auprès des enfants vulnérables pour assurer leur protection.' },
  { id: 3, title: 'Spécialiste Marketing Digital', department: 'communications', location: 'remote', type: 'fulltime', description: 'Développer et mettre en œuvre les stratégies marketing digital de la SNPE.' },
  { id: 4, title: 'Médecin Phytothérapeute', department: 'programs', location: 'ndjamena', type: 'fulltime', description: 'Fournir des soins de santé naturels et holistiques aux populations vulnérables.' },
  { id: 5, title: 'Responsable Partenariats', department: 'partnerships', location: 'remote', type: 'fulltime', description: 'Développer des partenariats stratégiques avec des organisations locales et internationales.' },
  { id: 6, title: 'Bénévole - Distribution Alimentaire', department: 'operations', location: 'ndjamena', type: 'volunteer', description: 'Participer aux distributions alimentaires dans les communautés vulnérables.' },
];

const values = [
  { icon: Users, key: 'solidarity' },
  { icon: Zap, key: 'commitment' },
  { icon: Shield, key: 'transparency' },
  { icon: Heart, key: 'humanity' },
];

export default function TravaillerAvecNous() {
  const { t, language } = useI18n();
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRole, setExpandedRole] = useState(null);

  const filteredRoles = openRoles.filter(role => {
    const deptMatch = selectedDept === 'all' || role.department === selectedDept;
    const locMatch = selectedLocation === 'all' || role.location === selectedLocation;
    const typeMatch = selectedType === 'all' || role.type === selectedType;
    const searchMatch = role.title.toLowerCase().includes(searchQuery.toLowerCase());
    return deptMatch && locMatch && typeMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-void">
      {/* HERO VIDEO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/72874aaf3_Logodfinitif14versionbleuargent.png"
            alt="SNPE Logo"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/60 to-void" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-foreground max-w-4xl mx-auto">
              {t('work.hero1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulse to-prestige">
                {t('work.hero2')}
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
            >
              {t('work.tagline')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12"
            >
              <a href="#open-roles" className="inline-flex items-center gap-2 px-8 py-4 bg-pulse text-void font-heading text-sm tracking-widest uppercase hover:bg-pulse/90 transition-all glow-cyan">
                {t('work.viewOpportunities')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-20 md:py-32 bg-glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-4">{t('work.mission')}</p>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-foreground leading-tight mb-6">
                {t('work.title')}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t('work.missionText')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('work.missionText2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.key} className="p-6 bg-void border border-border hover:border-pulse/30 transition-all">
                    <Icon className="w-6 h-6 text-pulse mb-3" />
                    <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-2">{t(`work.values.${value.key}`)}</h3>
                    <p className="text-xs text-muted-foreground">{t(`work.values.${value.key}Desc`)}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES SECTION */}
      <section id="open-roles" className="py-20 md:py-32 bg-void">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-4">{t('work.join')}</p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-foreground">
              {t('work.openRoles')}
            </h2>
          </div>

          {/* FILTERS */}
          <div className="mb-12 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('work.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-glass border border-border text-foreground placeholder:text-muted-foreground focus:border-pulse focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FilterDropdown
                label={t('work.department')}
                options={departments}
                value={selectedDept}
                onChange={setSelectedDept}
              />
              <FilterDropdown
                label={t('work.location')}
                options={locations}
                value={selectedLocation}
                onChange={setSelectedLocation}
              />
              <FilterDropdown
                label={t('work.jobType')}
                options={jobTypes}
                value={selectedType}
                onChange={setSelectedType}
              />
            </div>
          </div>

          {/* RESULTS COUNT */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground font-heading tracking-wider">
              {filteredRoles.length} {filteredRoles.length === 1 ? t('work.result') : t('work.results')}
            </p>
          </div>

          {/* JOBS LIST */}
          <div className="space-y-3">
            <AnimatePresence>
              {filteredRoles.length > 0 ? (
                filteredRoles.map((role, i) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.05 }}
                    className="border border-border hover:border-pulse/30 transition-all bg-glass overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                      className="w-full flex items-center justify-between p-6 text-left group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading text-lg uppercase tracking-wider text-foreground group-hover:text-pulse transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-3">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-heading tracking-wider uppercase">
                            <Briefcase className="w-3.5 h-3.5" />
                            {departments.find(d => d.id === role.department)?.label}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-heading tracking-wider uppercase">
                            <MapPin className="w-3.5 h-3.5" />
                            {locations.find(l => l.id === role.location)?.label}
                          </span>
                          <span className="text-xs text-pulse font-heading tracking-wider uppercase">
                            {jobTypes.find(t => t.id === role.type)?.label}
                          </span>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-pulse transition-transform ${expandedRole === role.id ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {expandedRole === role.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-border"
                        >
                          <div className="p-6 space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                            <div className="flex gap-3">
                              <button className="px-6 py-3 bg-pulse text-void font-heading text-xs tracking-widest uppercase hover:bg-pulse/90 transition-all glow-cyan">
                                {t('work.apply')}
                              </button>
                              <button className="px-6 py-3 border border-border text-muted-foreground font-heading text-xs tracking-widest uppercase hover:border-pulse/30 hover:text-foreground transition-all">
                                {t('work.learnMore')}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground font-heading tracking-wider">{t('work.noResults')}</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 bg-glass">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-xs tracking-widest uppercase text-prestige mb-4">{t('work.spontaneous')}</p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-foreground mb-6">
              {t('work.noJob')}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('work.spontaneousText')}
            </p>
            <button className="px-10 py-4 bg-prestige/10 border border-prestige/50 text-prestige font-heading text-sm tracking-widest uppercase hover:bg-prestige hover:text-void transition-all duration-300 glow-gold">
              {t('work.sendApplication')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FilterDropdown({ label, options, value, onChange }) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find(opt => opt.id === value)?.label;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-4 bg-glass border border-border text-foreground hover:border-pulse/30 transition-all"
      >
        <span className="text-sm font-heading tracking-wider">
          <span className="text-xs text-muted-foreground uppercase">{label}</span>
          <div className="text-left mt-1">{selectedLabel}</div>
        </span>
        <ChevronDown className={`w-4 h-4 text-pulse transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-void border border-border z-50"
          >
            {options.map(opt => (
              <button
                key={opt.id}
                onClick={() => {
                  onChange(opt.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  value === opt.id
                    ? 'bg-pulse/10 text-pulse font-heading tracking-wider'
                    : 'text-muted-foreground hover:bg-glass hover:text-foreground'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}