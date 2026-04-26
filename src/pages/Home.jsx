import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedNews from '@/components/home/FeaturedNews';
import ChampionShowcase from '@/components/home/ChampionShowcase.jsx';
import SkinsSection from '@/components/home/SkinsSection';
import GameModes from '@/components/home/GameModes';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkinsSection />
      <FeaturedNews />
      <ChampionShowcase />
      <GameModes />
    </>
  );
}