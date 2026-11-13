import { useState } from 'react';
import { ArrowUpRight, Car, Footprints, MapPin } from 'lucide-react';
import { HORCON_SPOTS, IMAGES, LOCATION_MAP, type CoastalSpot } from '@/src/data/repaletData';
import { ResilientImage } from './ResilientImage';

type FilterType = 'all' | 'playas' | 'miradores' | 'eventos';

export function HorconGuideSection() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [activeSpotId, setActiveSpotId] = useState<string>(HORCON_SPOTS[0].id);

  const filteredSpots =
    filter === 'all'
      ? HORCON_SPOTS
      : HORCON_SPOTS.filter((spot) => spot.category === filter);

  const activeSpot: CoastalSpot =
    filteredSpots.find((s) => s.id === activeSpotId) ?? filteredSpots[0];

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'Todos los lugares' },
    { id: 'playas', label: 'Playas' },
    { id: 'miradores', label: 'Miradores y Fauna' },
    { id: 'eventos', label: 'Eventos y Cultura' },
  ];

  return (
    <section id="horcon" className="py-20 lg:py-24 border-t border-[#171E18]/10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Intro Editorial Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-[#3E4C40] mb-3">
              Guía local · Puchuncaví, V Región
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#171E18] [text-wrap:balance]">
              Horcón: historia costera, acantilados y playas escondidas
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#3E4C40] leading-relaxed">
              Emplazado en una de las comarcas más antiguas de Chile y ancestral terminal costero del Camino del Inca, Horcón cautivó en los años 60 y 70 a poetas y artesanos. Hoy conserva esa mística entre su caleta pesquera, santuarios de aves y senderos al mar.
            </p>
          </div>
        </div>

        {/* Coastal Visual Carrier */}
        <div className="overflow-hidden rounded-xl mb-12 bg-[#EAE6DC]">
          <ResilientImage
            src={IMAGES.horconMain}
            alt="Playa y acantilados de Quirilluca en Horcón, Puchuncaví, Chile"
            aspectClassName="aspect-[16/9]"
            className="max-h-[460px] object-cover object-center"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div
            role="tablist"
            aria-label="Filtrar lugares de interés en Horcón"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EAE6DC] rounded-lg"
          >
            {filterTabs.map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setFilter(tab.id);
                    const nextList =
                      tab.id === 'all'
                        ? HORCON_SPOTS
                        : HORCON_SPOTS.filter((s) => s.category === tab.id);
                    if (nextList.length > 0 && !nextList.some((s) => s.id === activeSpotId)) {
                      setActiveSpotId(nextList[0].id);
                    }
                  }}
                  className={`px-3.5 py-2 min-h-[38px] text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] ${
                    isSelected
                      ? 'bg-[#F6F4EF] text-[#171E18] shadow-xs'
                      : 'text-[#3E4C40] hover:text-[#171E18]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-[#3E4C40]">
            Al hospedarte te compartimos alianzas y descuentos en gastronomía local.
          </p>
        </div>

        {/* Interactive Directory Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 divide-y divide-[#171E18]/10 border-t border-b border-[#171E18]/10">
            {filteredSpots.map((spot) => {
              const isActive = spot.id === activeSpot.id;
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveSpotId(spot.id)}
                  className={`w-full text-left py-3.5 px-3 -mx-3 rounded-lg transition-colors flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] ${
                    isActive ? 'bg-[#EFECE4]' : 'hover:bg-[#EFECE4]/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#EAE6DC] shrink-0">
                      <ResilientImage
                        src={spot.image}
                        alt={spot.imageAlt}
                        aspectClassName="aspect-square"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-semibold text-[#1B5E3A] tabular-nums shrink-0">
                          {spot.number}.
                        </span>
                        <span className="text-base font-semibold text-[#171E18] truncate">
                          {spot.name}
                        </span>
                      </div>
                      <span className="block text-xs text-[#3E4C40] mt-0.5">
                        {spot.categoryLabel} · {spot.distanceNote}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium whitespace-nowrap shrink-0 ${
                      isActive ? 'text-[#1B5E3A]' : 'text-[#3E4C40]'
                    }`}
                  >
                    {isActive ? 'Seleccionado' : 'Ver foto'}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-5 rounded-xl bg-[#EFECE4] border border-[#171E18]/10 overflow-hidden">
            <div className="overflow-hidden bg-[#EAE6DC]">
              <ResilientImage
                src={activeSpot.image}
                alt={activeSpot.imageAlt}
                aspectClassName="aspect-[16/10]"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs text-[#3E4C40] mb-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#1B5E3A]" aria-hidden="true" />
                <span>{activeSpot.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{activeSpot.distanceNote}</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-[#171E18] mb-3">
                {activeSpot.number}. {activeSpot.name}
              </h3>
              <p className="text-sm sm:text-base text-[#3E4C40] leading-relaxed mb-5">
                {activeSpot.description}
              </p>
              <div className="pt-4 border-t border-[#171E18]/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#3E4C40]">
                <span className="font-medium text-[#171E18]">Desde la cabaña:</span>
                {activeSpot.walkDistance && (
                  <span className="inline-flex items-center gap-1.5 tabular-nums">
                    <Footprints className="w-3.5 h-3.5 text-[#1B5E3A]" aria-hidden="true" />
                    <span>{activeSpot.walkDistance}</span>
                  </span>
                )}
                {activeSpot.driveDistance && (
                  <span className="inline-flex items-center gap-1.5 tabular-nums">
                    <Car className="w-3.5 h-3.5 text-[#1B5E3A]" aria-hidden="true" />
                    <span>{activeSpot.driveDistance}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Discreet Referential Location Map (OpenStreetMap - No API key required) */}
        <div className="mt-16 pt-12 border-t border-[#171E18]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-medium text-[#3E4C40]">
              Ubicación referencial · {LOCATION_MAP.sectorName}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#171E18]">
              Entre Playa Cau Cau y Playa El Tebo
            </h3>
            <p className="text-sm sm:text-base text-[#3E4C40] leading-relaxed">
              Nuestro refugio está emplazado en un tranquilo entorno residencial costero de Horcón, a pasos del mirador Ensenada del Fraile y cercano a los centros de eventos El Tebo y Punta Los Lunes. Al confirmar tu estadía, te compartimos el punto exacto de llegada por WhatsApp.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={LOCATION_MAP.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[40px] text-sm font-medium text-[#171E18] border border-[#171E18]/20 hover:bg-[#EFECE4] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Abrir sector en Google Maps</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={LOCATION_MAP.openStreetMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-[#3E4C40] hover:text-[#171E18] hover:underline underline-offset-4 py-2 whitespace-nowrap"
              >
                <span>Ampliar mapa</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 overflow-hidden rounded-xl border border-[#171E18]/12 bg-[#EAE6DC]">
            <iframe
              title="Mapa referencial de Comunidad Ensenada del Fraile, Horcón"
              src={LOCATION_MAP.embedUrl}
              loading="lazy"
              className="w-full h-[280px] sm:h-[320px] border-0 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
