import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Share2, Facebook, Link2, ChevronRight, Tag } from 'lucide-react';
import XIcon from '@/components/icons/XIcon';
import { newsItems } from '@/lib/championData';
import { useI18n } from '@/lib/I18nContext';

function ShareButton({ icon: IconComp, label, color, onClick }) {
  const Icon = IconComp;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 border font-heading text-[10px] tracking-widest uppercase transition-all ${color}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </button>
  );
}

function RelatedCard({ item, language }) {
  return (
    <Link to={`/news/${item.id}`} className="group flex gap-3 p-3 border border-border hover:border-pulse/30 bg-glass transition-all">
      <img src={item.image} alt={item.translations[language].title} className="w-20 h-16 object-cover flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <span className="text-[9px] font-heading tracking-widest uppercase text-pulse">{item.translations[language].category}</span>
        <h4 className="font-heading text-xs uppercase tracking-wide text-foreground group-hover:text-pulse transition-colors line-clamp-2 mt-0.5">{item.translations[language].title}</h4>
        <span className="text-[10px] text-muted-foreground">{item.date}</span>
      </div>
    </Link>
  );
}

export default function NewsArticle() {
  const { id } = useParams();
  const { t, language } = useI18n();
  const article = newsItems.find(n => n.id === parseInt(id));
  const related = newsItems.filter(n => n.id !== parseInt(id)).slice(0, 3);
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen bg-void pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-3xl uppercase text-foreground mb-4">{t('newsArticle.notFound') || 'Article introuvable'}</h2>
          <Link to="/news" className="text-pulse font-heading text-sm tracking-wider uppercase hover:underline">
            ← {t('newsArticle.backToNews') || 'Retour aux news'}
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-void pt-20">

      {/* Hero Image */}
      <div className="relative aspect-video max-h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/30 via-transparent to-void/30" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-8 md:pb-12 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-pulse/20 border border-pulse/30 text-pulse font-heading text-[10px] tracking-widest uppercase">
              {article.translations[language].category}
            </span>
            <span className="text-xs text-muted-foreground font-heading tracking-wider">{article.date}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight text-foreground leading-tight">
            {article.translations[language].title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Article Body */}
          <div className="lg:col-span-2">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-[11px] font-heading tracking-widest uppercase text-muted-foreground">
              <Link to="/" className="hover:text-pulse transition-colors">{t('nav.home')}</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/news" className="hover:text-pulse transition-colors">{t('nav.news')}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-pulse">{article.translations[language].category}</span>
            </div>

            {/* Back Button */}
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-pulse transition-colors font-heading text-xs tracking-widest uppercase mb-6 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              {t('newsArticle.backToNews') || 'Retour aux news'}
            </Link>

            {/* Read time */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>{t('newsArticle.publishedOn') || 'Publié le'} {article.date}</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-heading tracking-wider">4 min de lecture</span>
            </div>

            {/* Lead */}
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-pulse pl-4 mb-8">
              {article.translations[language].description}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-glass border border-border flex items-center justify-center">
                <span className="font-heading text-sm text-pulse">SN</span>
              </div>
              <div>
                <p className="font-heading text-sm uppercase tracking-wider text-foreground">Équipe SNPE</p>
                <p className="text-xs text-muted-foreground">Équipe de communication SNPE</p>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose-content space-y-6 text-muted-foreground leading-relaxed text-sm">
              {article.translations[language].content && article.translations[language].content.map((block, idx) => {
                if (block.type === 'p') {
                  return <p key={idx}>{block.text}</p>;
                } else if (block.type === 'h2') {
                  return (
                    <h2 key={idx} className="font-heading text-2xl uppercase tracking-wider text-foreground pt-4">
                      {block.text}
                    </h2>
                  );
                } else if (block.type === 'quote') {
                  return (
                    <div key={idx} className="my-8 p-6 bg-glass border border-pulse/20 border-l-4 border-l-pulse">
                      <p className="font-heading text-base uppercase tracking-wide text-foreground mb-2">{t('newsArticle.remember') || 'À retenir'}</p>
                      <p className="text-sm text-muted-foreground">{block.text}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
              <Tag className="w-3.5 h-3.5 text-muted-foreground mt-0.5" />
              {['Humanitaire', 'Tchad', 'SNPE', article.translations[language].category].filter((v, i, a) => a.indexOf(v) === i).map(tag => (
                <span key={tag} className="px-3 py-1 bg-glass border border-border text-muted-foreground font-heading text-[10px] tracking-widest uppercase hover:border-pulse/30 hover:text-pulse transition-all cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground mb-3">{t('newsArticle.shareOn') || 'Partager'}</p>
              <div className="flex flex-wrap gap-2">
                <ShareButton icon={XIcon} label="X" color="border-border text-muted-foreground hover:border-pulse/50 hover:text-pulse" onClick={() => handleShare('twitter')} />
                <ShareButton icon={Facebook} label="Facebook" color="border-border text-muted-foreground hover:border-pulse/50 hover:text-pulse" onClick={() => handleShare('facebook')} />
                <ShareButton icon={Share2} label={copied ? 'Copié !' : 'Copier le lien'} color={copied ? 'border-prestige/50 text-prestige' : 'border-border text-muted-foreground hover:border-pulse/50 hover:text-pulse'} onClick={handleCopyLink} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Related Articles */}
            <div>
              <p className="font-heading text-xs tracking-widest uppercase text-pulse border-b border-border pb-3 mb-4">{t('newsArticle.relatedArticles') || 'Articles similaires'}</p>
              <div className="space-y-3">
                {related.map(item => (
                  <RelatedCard key={item.id} item={item} language={language} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-glass border border-pulse/20">
              <p className="font-heading text-[10px] tracking-widest uppercase text-pulse mb-2">{t('nav.join')}</p>
              <h3 className="font-heading text-xl uppercase tracking-wide text-foreground mb-3">{t('newsArticle.supportUs') || 'Soutenez notre mission'}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {t('donation.title') === 'Faire un don' ? 'Votre don permet à la SNPE d\'agir concrètement pour les populations vulnérables au Tchad.' : (language === 'en' ? 'Your donation allows SNPE to act concretely for vulnerable populations in Chad.' : 'تبرعك يسمح لـ SNPE بالتصرف بشكل ملموس للسكان الضعفاء في تشاد.')}
              </p>
              <Link to="/faire-un-don" className="block w-full py-3 text-center bg-pulse/10 border border-pulse/50 text-pulse font-heading text-xs tracking-widest uppercase hover:bg-pulse hover:text-void transition-all duration-300">
                {t('nav.donate')}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}