import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Heart } from 'lucide-react';

export default function DonationSuccess() {
  const params = new URLSearchParams(window.location.search);
  const amount = params.get('amount');
  const cause = params.get('cause');

  const causeLabels = {
    urgence: "Aide d'urgence",
    enfance: "Protection de l'enfance",
    precarite: "Lutte contre la précarité",
    femme: "Valorisation de la femme",
    developpement: "Développement social",
    general: "Là où c'est le plus utile",
  };

  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-2">Merci !</p>
        <h1 className="font-heading text-3xl md:text-4xl uppercase tracking-tight text-foreground mb-4">
          Don reçu avec succès
        </h1>
        {amount && (
          <p className="text-lg text-muted-foreground mb-2">
            Votre don de <span className="text-foreground font-semibold">{amount}€</span>
            {cause && causeLabels[cause] && (
              <> pour <span className="text-pulse">{causeLabels[cause]}</span></>
            )} a bien été enregistré.
          </p>
        )}
        <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
          Votre générosité permet à la SNPE de continuer ses actions humanitaires au Tchad. Merci du fond du cœur.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-pulse text-void font-heading text-sm tracking-widest uppercase hover:bg-pulse/90 transition-all glow-cyan"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/faire-un-don"
            className="px-8 py-3 border border-border text-muted-foreground font-heading text-sm tracking-widest uppercase hover:border-pulse/30 hover:text-foreground transition-all flex items-center gap-2 justify-center"
          >
            <Heart className="w-4 h-4" /> Faire un autre don
          </Link>
        </div>
      </div>
    </div>
  );
}