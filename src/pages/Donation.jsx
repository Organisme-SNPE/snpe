import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Droplets, Shield, Swords, Sparkles, ArrowRight, Check } from 'lucide-react';

const causes = [
  { id: 'urgence', label: "Aide d'urgence", description: "Réponse immédiate aux crises humanitaires", icon: Swords, color: 'text-red-400' },
  { id: 'enfance', label: "Protection de l'enfance", description: "Droits et bien-être des enfants", icon: Heart, color: 'text-pink-400' },
  { id: 'precarite', label: "Lutte contre la précarité", description: "Soutien aux personnes vulnérables", icon: Shield, color: 'text-orange-400' },
  { id: 'femme', label: "Construction de puits", description: "Accès à l'eau potable pour tous", icon: Droplets, color: 'text-blue-400' },
  { id: 'developpement', label: "Qualité de vie", description: "Propreté et nettoyage", icon: Sparkles, color: 'text-green-400' },
  { id: 'general', label: "Là où c'est le plus utile", description: "La SNPE décide selon les besoins", icon: Heart, color: 'text-pulse' },
  { id: 'association', label: "Don pour l'Association (marketing, structure, membres...)", description: "Marketing, structure, membres, etc.", icon: Heart, color: 'text-pulse', isSmall: true, fullWidth: true },
];

const amounts = [5, 10, 25, 50, 100, 250];

export default function Donation() {
  const [selectedCause, setSelectedCause] = useState('femme');
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const handleDonate = async () => {
    alert("Le paiement est en cours de configuration. Revenez plus tard !");
    return;
    // Code commenté temporairement
    /*
    if (!finalAmount || finalAmount < 1) return;

    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount,
          cause: selectedCause,
          causeLabel: causes.find(c => c.id === selectedCause)?.label,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        alert('Erreur HTTP: ' + response.status + ' - ' + text);
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log('Response data:', data);
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Erreur lors de la création du paiement: ' + (data.error || 'Erreur inconnue'));
      }
    } catch (error) {
      alert('Erreur réseau: ' + error.message);
    }
    setLoading(false);
    */
  };

  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-glass/50 to-void" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-2">Agir ensemble</p>
          <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-tight text-foreground">
            Faire un don
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Votre générosité permet au SNPE d'agir concrètement pour les populations vulnérables.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-24 space-y-10">

        {/* Step 1 – Amount */}
        <div>
          <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-4">1 — Choisissez un montant (€)</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                className={`py-3 font-heading text-sm tracking-wider border transition-all ${
                  selectedAmount === amt && !customAmount
                    ? 'bg-pulse/10 border-pulse text-pulse'
                    : 'bg-glass border-border text-foreground hover:border-pulse/30'
                }`}
              >
                {amt}€
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-sm font-heading tracking-wider">Autre montant :</span>
            <input
              type="number"
              min="1"
              placeholder="Ex: 75"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
              className="w-32 px-3 py-2 bg-glass border border-border text-foreground text-sm focus:border-pulse focus:outline-none transition-colors"
            />
            <span className="text-muted-foreground text-sm">€</span>
          </div>
        </div>

        {/* Step 2 – Cause */}
        <div>
          <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-4">2 — Choisissez une cause</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {causes.map((cause) => {
              const Icon = cause.icon;
              if (cause.isSmall) {
                return (
                  <motion.button
                    key={cause.id}
                    onClick={() => setSelectedCause(cause.id)}
                    whileTap={{ scale: 0.98 }}
                    className={`py-1.5 px-3 border text-xs transition-all ${cause.fullWidth ? 'sm:col-span-2' : ''} ${
                      selectedCause === cause.id
                        ? 'bg-pulse/10 border-pulse'
                        : 'bg-glass border-border hover:border-pulse/30'
                    }`}
                  >
                    <p className={`italic ${selectedCause === cause.id ? 'text-pulse' : 'text-foreground'}`}>
                      {cause.label}
                    </p>
                  </motion.button>
                );
              }
              return (
                <motion.button
                  key={cause.id}
                  onClick={() => setSelectedCause(cause.id)}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 p-4 border text-left transition-all ${
                    selectedCause === cause.id
                      ? 'bg-pulse/10 border-pulse'
                      : 'bg-glass border-border hover:border-pulse/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 ${
                    selectedCause === cause.id ? 'bg-pulse/20' : 'bg-void'
                  }`}>
                    <Icon className={`w-5 h-5 ${selectedCause === cause.id ? 'text-pulse' : cause.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-heading text-sm uppercase tracking-wide ${selectedCause === cause.id ? 'text-pulse' : 'text-foreground'}`}>
                      {cause.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{cause.description}</p>
                  </div>
                  {selectedCause === cause.id && (
                    <Check className="w-4 h-4 text-pulse flex-shrink-0" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Summary + CTA */}
        <div className="p-6 bg-glass border border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-muted-foreground font-heading tracking-widest uppercase mb-1">Votre don</p>
              <p className="font-heading text-3xl text-foreground">{finalAmount || '—'}€</p>
              <p className="text-xs text-muted-foreground mt-1">
                Pour : <span className="text-pulse">{causes.find(c => c.id === selectedCause)?.label}</span>
              </p>
            </div>
            <Heart className="w-10 h-10 text-pulse/30" />
          </div>
          <button
            onClick={handleDonate}
            disabled={loading || !finalAmount || finalAmount < 1}
            className="w-full py-4 bg-pulse text-void font-heading text-sm tracking-widest uppercase hover:bg-pulse/90 transition-all glow-cyan disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                Redirection...
              </span>
            ) : (
              <>
                Faire un don de {finalAmount || '—'}€
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-[10px] text-muted-foreground text-center mt-3">
            Paiement sécurisé par Stripe • Reçu fiscal disponible sur demande
          </p>
        </div>
      </div>
    </div>
  );
}