import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/I18nContext';

const navPaths = [
  { key: "nav.home", path: "/" },
  { key: "nav.causes", path: "/champions" },
  { key: "nav.news", path: "/news" },
  { key: "nav.impact", path: "/universe" },
  { key: "nav.join", path: "/travailler-avec-nous" }
];

export default function Navbar() {
  const { t, language, changeLanguage, languages } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();
  const isUniversePage = location.pathname === '/universe';
  const shouldApplyScrollEffect = !isUniversePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled && shouldApplyScrollEffect ? 'bg-primary/95 backdrop-blur-xl border-b border-primary-foreground/10' : isUniversePage ? 'bg-void border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile centered logo */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 h-16 flex items-center">
            <img
              src="https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/ebf6f7143_SNPE.png"
              alt="SNPE"
              className="h-8 object-contain"
            />
          </div>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/bd0fd90dd_LogoSeulFinalVersionBlanc.png" alt="SNPE Logo" className="w-20 h-20 object-contain" />
              <span className={`font-heading text-xl tracking-widest uppercase hidden sm:block transition-all duration-500 ${
                scrolled && !isUniversePage
                  ? 'text-white'
                  : scrolled && isUniversePage
                  ? 'text-primary'
                  : 'bg-gradient-to-r from-pulse via-foreground to-prestige bg-clip-text text-transparent text-glow-cyan drop-shadow-[0_0_8px_rgba(91,172,211,0.4)]'
              }`}>
                SNPE
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navPaths.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 font-heading text-sm tracking-wider uppercase transition-all relative group ${
                    location.pathname === link.path
                      ? scrolled && !isUniversePage ? 'text-white/90' : scrolled && isUniversePage ? 'text-primary' : 'text-pulse'
                      : scrolled && !isUniversePage ? 'text-white/70 hover:text-white' : scrolled && isUniversePage ? 'text-primary/70 hover:text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(link.key)}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'w-full bg-pulse' 
                      : 'w-0 bg-pulse/50 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA + Language + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/faire-un-don"
                className="hidden md:flex items-center gap-2 px-6 py-2 bg-pulse text-void font-heading text-sm tracking-wider uppercase rounded-sm hover:bg-pulse/90 transition-all glow-cyan"
              >
                {t('nav.donate')}
              </Link>
              
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 font-heading text-sm tracking-wider uppercase transition-all ${
                    scrolled && !isUniversePage
                      ? 'text-white/70 hover:text-white'
                      : scrolled && isUniversePage
                      ? 'text-primary/70 hover:text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <ChevronDown className={`w-3 h-3 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 bg-void border border-border rounded-sm overflow-hidden z-50 min-w-[150px]"
                    >
                      {Object.entries(languages).map(([code, lang]) => (
                        <button
                          key={code}
                          onClick={() => {
                            changeLanguage(code);
                            setLanguageOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-heading transition-colors ${
                            language === code
                              ? 'bg-pulse/10 text-pulse'
                              : 'text-muted-foreground hover:bg-pulse/10 hover:text-pulse'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-foreground"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-void/90 backdrop-blur-md pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 pt-20 overflow-y-auto pointer-events-auto"
            >
              <div className="flex flex-col items-center gap-6 p-8">
                {navPaths.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-2xl tracking-widest uppercase text-foreground hover:text-pulse transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                ))}
                <div className="w-full h-px bg-border my-2" />
                
                {/* Language Menu Mobile */}
                <div className="w-full">
                  <button
                    onClick={() => setLanguageOpen(!languageOpen)}
                    className="w-full flex items-center justify-center gap-2 py-3 font-heading text-lg tracking-wider uppercase text-foreground hover:text-pulse transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    {t('nav.language')}
                  </button>
                  <AnimatePresence>
                    {languageOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col gap-2 mt-3 pt-3 border-t border-border"
                      >
                        {Object.entries(languages).map(([code, lang]) => (
                          <button
                            key={code}
                            onClick={() => {
                              changeLanguage(code);
                              setLanguageOpen(false);
                            }}
                            className={`block px-4 py-3 text-center font-heading text-lg transition-colors uppercase tracking-wider ${
                              language === code
                                ? 'bg-pulse/10 text-pulse'
                                : 'text-muted-foreground hover:bg-pulse/10 hover:text-pulse'
                            }`}
                          >
                            {lang.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link
                  to="/faire-un-don"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-10 py-3 bg-pulse text-void font-heading text-lg tracking-wider uppercase rounded-sm glow-cyan"
                >
                  {t('nav.donate')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}