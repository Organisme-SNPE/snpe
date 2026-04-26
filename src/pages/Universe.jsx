import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useI18n } from '@/lib/I18nContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons for leaflet with vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const createCityIcon = (isCapital) => L.divIcon({
  className: '',
  html: `
    <div style="
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${isCapital ? '20px' : '14px'};
      height: ${isCapital ? '20px' : '14px'};
      background: ${isCapital ? '#FFB800' : '#00F2FF'};
      border: 2px solid ${isCapital ? '#fff' : 'rgba(0,242,255,0.5)'};
      border-radius: 50%;
      box-shadow: 0 0 ${isCapital ? '12px' : '8px'} ${isCapital ? 'rgba(255,184,0,0.7)' : 'rgba(0,242,255,0.5)'};
    ">
      <div style="
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: ${isCapital ? 'rgba(255,184,0,0.3)' : 'rgba(0,242,255,0.2)'};
        animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      "></div>
    </div>`,
  iconSize: [isCapital ? 20 : 14, isCapital ? 20 : 14],
  iconAnchor: [isCapital ? 10 : 7, isCapital ? 10 : 7],
  popupAnchor: [0, isCapital ? -14 : -10],
});

const cities = [
  {
    id: 'ndjamena',
    name: "N'Djaména",
    isCapital: true,
    lat: 12.1048,
    lng: 15.0444,
    description: "Capitale et plus grande ville du Tchad, N'Djaména est le centre politique, économique et culturel du pays. Fondée en 1900, elle se situe au confluent du Chari et du Logone.",
    population: '1,3 million hab.',
    region: 'N\'Djaména',
  },
  {
    id: 'moundou',
    name: 'Moundou',
    isCapital: false,
    lat: 8.5667,
    lng: 16.0833,
    description: "Deuxième ville du Tchad et capitale économique du sud, Moundou est un centre industriel majeur avec une brasserie et de nombreuses industries agroalimentaires.",
    population: '250 000 hab.',
    region: 'Logone Occidental',
  },
  {
    id: 'sarh',
    name: 'Sarh',
    isCapital: false,
    lat: 9.1500,
    lng: 18.3833,
    description: "Anciennement Fort-Archambault, Sarh est la troisième ville du Tchad. Située au bord du Chari, c'est un important centre de commerce et d'agriculture.",
    population: '130 000 hab.',
    region: 'Moyen-Chari',
  },
  {
    id: 'abeche',
    name: 'Abéché',
    isCapital: false,
    lat: 13.8333,
    lng: 20.8333,
    description: "Quatrième ville du Tchad et capitale du Ouaddaï, Abéché est un carrefour historique du commerce transsaharien et une ancienne cité sultanale.",
    population: '110 000 hab.',
    region: 'Ouaddaï',
  },
  {
    id: 'kelo',
    name: 'Kélo',
    isCapital: false,
    lat: 9.3167,
    lng: 15.8000,
    description: "Ville du sud du Tchad et chef-lieu du département du Tandjilé Est, Kélo est un centre agricole important dans la région cotonnière.",
    population: '55 000 hab.',
    region: 'Tandjilé',
  },
  {
    id: 'mongo',
    name: 'Mongo',
    isCapital: false,
    lat: 12.1833,
    lng: 18.6833,
    description: "Capitale de la région du Guéra, Mongo est une ville centrale du Tchad avec une importance stratégique et administrative.",
    population: '50 000 hab.',
    region: 'Guéra',
  },
  {
    id: 'bongor',
    name: 'Bongor',
    isCapital: false,
    lat: 10.2833,
    lng: 15.3667,
    description: "Ville située sur le Mayo-Kebbi, Bongor est un carrefour commercial entre le Cameroun et le Tchad, importante pour l'agriculture et l'élevage.",
    population: '45 000 hab.',
    region: 'Mayo-Kebbi Est',
  },
  {
    id: 'farchana',
    name: 'Farchana',
    isCapital: false,
    lat: 13.3167,
    lng: 22.2000,
    description: "Localité de l'est tchadien, Farchana est connue pour accueillir des réfugiés et comme point de passage frontalier avec le Soudan.",
    population: '30 000 hab.',
    region: 'Wadi Fira',
  },
];

function MapFlyTo({ city }) {
  const map = useMap();
  React.useEffect(() => {
    if (city) map.flyTo([city.lat, city.lng], 8, { duration: 1.2 });
  }, [city, map]);
  return null;
}

export default function Universe() {
  const { t } = useI18n();
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-glass to-void" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-xs tracking-widest uppercase text-pulse mb-2">{t('universe.mapLabel')}</p>
          <h1 className="font-heading text-4xl md:text-7xl uppercase tracking-tight text-foreground">
            {t('universe.title')}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {t('universe.description')}
          </p>
        </div>
      </div>

      {/* Map + Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-sm overflow-hidden border border-border z-10" style={{ height: '520px' }}>
          {/* Leaflet Map */}
          <MapContainer
            center={[15.0, 18.5]}
            zoom={5}
            style={{ height: '100%', width: '100%', background: '#06070B' }}
            zoomControl={true}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {cities.map(city => (
              <Marker
                key={city.id}
                position={[city.lat, city.lng]}
                icon={createCityIcon(city.isCapital)}
                eventHandlers={{ click: () => setSelectedCity(city) }}
              >
                <Popup className="leaflet-popup-dark">
                  <div style={{ fontFamily: 'Oswald, sans-serif', color: '#F0F4F8', background: '#12161F', padding: '8px', minWidth: '160px' }}>
                    <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: city.isCapital ? '#FFB800' : '#00F2FF', marginBottom: '4px' }}>
                      {city.isCapital ? `★ ${t('universe.capitalLabel')}` : city.region}
                    </p>
                    <p style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{city.name}</p>
                    <p style={{ fontSize: '11px', color: '#8BA0B4' }}>{city.population}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
            <MapFlyTo city={selectedCity} />
          </MapContainer>

          {/* Info Panel */}
          <AnimatePresence>
            {selectedCity && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                className="absolute top-4 right-4 w-72 bg-void/95 backdrop-blur-xl border border-border p-5 z-[9999]"
              >
                <button
                  onClick={() => setSelectedCity(null)}
                  className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-pulse transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${selectedCity.isCapital ? 'bg-prestige' : 'bg-pulse'}`} />
                  <p className={`font-heading text-[10px] tracking-widest uppercase ${selectedCity.isCapital ? 'text-prestige' : 'text-pulse'}`}>
                    {selectedCity.isCapital ? `${t('universe.capitalLabel')} ${t('universe.region')}` : selectedCity.region}
                  </p>
                </div>
                <h3 className="font-heading text-xl uppercase tracking-wider text-foreground mb-1">{selectedCity.name}</h3>
                <p className="font-heading text-xs text-muted-foreground tracking-wider mb-3">{selectedCity.population}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{selectedCity.description}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instructions */}
          {!selectedCity && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000]">
              <p className="font-heading text-[10px] tracking-widest uppercase text-muted-foreground bg-void/80 backdrop-blur px-4 py-2 border border-border whitespace-nowrap">
                {t('universe.click')}
              </p>
            </div>
          )}
        </div>

        {/* City List */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mt-4">
          {cities.map(city => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city)}
              className={`group p-3 border transition-all text-left ${
                selectedCity?.id === city.id
                  ? city.isCapital ? 'border-prestige bg-prestige/10' : 'border-pulse bg-pulse/10'
                  : 'border-border bg-glass hover:border-pulse/30'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${city.isCapital ? 'bg-prestige' : 'bg-pulse'}`} />
                <h4 className={`font-heading text-[10px] tracking-widest uppercase truncate transition-colors ${
                  selectedCity?.id === city.id
                    ? city.isCapital ? 'text-prestige' : 'text-pulse'
                    : 'text-foreground group-hover:text-pulse'
                }`}>
                  {city.name}
                </h4>
              </div>
              <p className="text-[9px] text-muted-foreground truncate">{city.isCapital ? t('universe.capitalLabel') : city.region}</p>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .leaflet-container { background: #06070B !important; }
        .leaflet-popup-content-wrapper { background: #12161F; border: 1px solid #1e2530; border-radius: 2px; box-shadow: 0 0 20px rgba(0,242,255,0.15); padding: 0; }
        .leaflet-popup-content { margin: 0; }
        .leaflet-popup-tip { background: #12161F; }
        .leaflet-control-zoom a { background: #12161F !important; color: #00F2FF !important; border-color: #1e2530 !important; }
        .leaflet-control-attribution { background: rgba(6,7,11,0.7) !important; color: #4a5568 !important; font-size: 9px; }
        .leaflet-control-attribution a { color: #4a5568 !important; }
        @keyframes ping { 75%, 100% { transform: scale(2.5); opacity: 0; } }
      `}</style>
    </div>
  );
}