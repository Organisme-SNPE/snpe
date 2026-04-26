import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, ArrowRight, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';
import { X } from 'lucide-react';
import TiktokIcon from '@/components/icons/TiktokIcon';
import { useI18n } from '@/lib/I18nContext';

const socials = [
{ icon: Facebook, label: "Facebook", href: "https://www.facebook.com/snpe-tchad", bgColor: "hover:bg-[#1877F2]", borderColor: "border-[#1877F2]" },
{ icon: X, label: "X", href: "https://twitter.com/snpe_tchad", bgColor: "hover:bg-black", borderColor: "border-black" },
{ icon: Instagram, label: "Instagram", href: "https://www.instagram.com/snpe_tchad", bgColor: "hover:bg-gradient-to-r hover:from-[#FD1D1D] hover:to-[#833AB4]", borderColor: "border-[#833AB4]" },
{ icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@snpe-tchad", bgColor: "hover:bg-[#FF0000]", borderColor: "border-[#FF0000]" },
{ icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/snpe-tchad", bgColor: "hover:bg-[#0A66C2]", borderColor: "border-[#0A66C2]" },
{ icon: TiktokIcon, label: "TikTok", href: "https://www.tiktok.com/@snpe_tchad", bgColor: "hover:bg-black", borderColor: "border-black" }];


export default function Footer() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footerLinks = [
    {
      heading: t('footer.about'),
      links: [
        { label: t('footer.ourMission'), path: "/universe" },
        { label: t('footer.history'), path: "/universe" },
        { label: t('footer.team'), path: "/universe" },
        { label: t('footer.reports'), path: "/universe" },
        { label: t('footer.press'), path: "/news" }
      ]
    },
    {
      heading: t('footer.actions'),
      links: [
        { label: t('footer.causes'), path: "/champions" },
        { label: t('footer.children'), path: "/champions" },
        { label: t('footer.emergency'), path: "/champions" },
        { label: t('footer.impact'), path: "/universe" },
        { label: t('footer.news'), path: "/news" }
      ]
    },
    {
      heading: t('footer.join'),
      links: [
        { label: t('footer.donate'), path: "/faire-un-don" },
        { label: t('footer.membership'), path: "/travailler-avec-nous" },
        { label: t('footer.volunteer'), path: "/travailler-avec-nous" },
        { label: t('footer.partnerships'), path: "/travailler-avec-nous" }
      ]
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-primary text-white">

      {/* Newsletter Banner */}
      <div className="bg-secondary py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-white">
              {t('footer.newsletter')}
            </h3>
            <p className="text-white/80 text-sm mt-1">
              {t('footer.subscribe')}
            </p>
          </div>
          {subscribed ?
          <div className="flex items-center gap-2 text-white font-heading tracking-wider text-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              {t('footer.thanks')}
            </div> :

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-0 min-w-[320px]">
              <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('footer.email')}
              className="flex-1 px-4 py-3 bg-white text-[#1a1a1a] text-sm placeholder:text-gray-400 focus:outline-none" />

              <button
              type="submit"
              className="px-5 py-3 bg-primary text-white font-heading text-xs tracking-widest uppercase hover:bg-primary/80 transition-colors flex items-center gap-2 whitespace-nowrap">

                {t('footer.subscribe_btn')} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          }
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src="https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/be9043712_LogoSeulFinalVersionBlanc.png"
                alt="SNPE Logo"
                className="w-12 h-12 object-contain" />
              
              <span className="font-heading text-xl tracking-widest uppercase text-white">SNPE</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{t('footer.location')} • {t('footer.copyright').split('©')[1].split('Tous')[0].trim()}
            </p>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 mb-6">
              {socials.slice(0, 3).map(({ icon: Icon, label, href, bgColor, borderColor }) =>
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-12 h-12 flex items-center justify-center rounded-full border text-white/70 ${borderColor} ${bgColor} hover:text-white transition-all duration-300`}>
                
                  <Icon className="w-5 h-5" />
                </a>
              )}
              <div className="w-full" />
              {socials.slice(3).map(({ icon: Icon, label, href, bgColor, borderColor }) =>
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-12 h-12 flex items-center justify-center rounded-full border text-white/70 ${borderColor} ${bgColor} hover:text-white transition-all duration-300`}>
                
                  <Icon className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t('footer.location')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>{t('footer.contact')}</span>
                </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) =>
          <div key={col.heading}>
              <h4 className="font-heading text-sm tracking-widest uppercase text-secondary mb-5 border-b border-white/10 pb-3">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.path}
                  className="text-sm text-white/60 hover:text-white transition-colors hover:pl-1 duration-200 block">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-5">
            <Link to="/" className="hover:text-white/70 transition-colors">{t('footer.privacy')}</Link>
            <Link to="/" className="hover:text-white/70 transition-colors">{t('footer.terms')}</Link>
            <Link to="/" className="hover:text-white/70 transition-colors">{t('footer.cookies')}</Link>
            <Link to="/" className="hover:text-white/70 transition-colors">{t('footer.accessibility')}</Link>
          </div>
        </div>
      </div>

    </footer>);

}