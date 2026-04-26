import React from 'react';
import { ShieldAlert } from 'lucide-react';

const UserNotRegisteredError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-body">
      <div className="max-w-md w-full mx-4 p-8 border border-border bg-card text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/be9043712_LogoSeulFinalVersionBlanc.png"
            alt="SNPE Logo"
            className="w-14 h-14 object-contain opacity-80"
          />
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-primary/10 border border-primary/20">
          <ShieldAlert className="w-7 h-7 text-primary" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-2xl uppercase tracking-widest text-foreground mb-3">
          Accès Restreint
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          Vous n'êtes pas enregistré pour accéder à cette application. Veuillez contacter l'administrateur de l'association SNPE pour demander un accès.
        </p>

        {/* Info Box */}
        <div className="p-4 bg-muted border border-border text-sm text-muted-foreground text-left space-y-2">
          <p className="font-heading text-xs tracking-widest uppercase text-primary mb-2">Que faire ?</p>
          <ul className="space-y-1.5 list-none">
            <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">›</span> Vérifiez que vous êtes connecté avec le bon compte</li>
            <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">›</span> Contactez l'administrateur SNPE pour obtenir l'accès</li>
            <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">›</span> Essayez de vous déconnecter puis reconnecter</li>
          </ul>
        </div>

        {/* Footer label */}
        <p className="mt-8 font-heading text-[10px] tracking-widest uppercase text-muted-foreground">
          Secours aux Nécessiteux et Protection de l'Enfance — N'Djamena, Tchad
        </p>
      </div>
    </div>
  );
};

export default UserNotRegisteredError;