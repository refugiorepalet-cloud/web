import { useState } from 'react';
import {
  Bath,
  BedDouble,
  Camera,
  Car,
  Home,
  Sofa,
  Trees,
  Utensils,
  UtensilsCrossed,
} from 'lucide-react';
import { CABINS, CONTACT, HOST_PILLARS, type CabinSpace } from '@/src/data/repaletData';
import { ResilientImage } from './ResilientImage';

interface CabinsSectionProps {
  onOpenAmenities: () => void;
}

function SpaceIcon({ id }: { id: CabinSpace['id'] }) {
  const cls = 'w-4 h-4 text-[#3E4C40]';
  switch (id) {
    case 'exterior':
      return <Home className={cls} aria-hidden="true" />;
    case 'sala':
      return <Sofa className={cls} aria-hidden="true" />;
    case 'cocina':
      return <Utensils className={cls} aria-hidden="true" />;
    case 'comedor':
      return <UtensilsCrossed className={cls} aria-hidden="true" />;
    case 'habitacion':
      return <BedDouble className={cls} aria-hidden="true" />;
    case 'bano':
      return <Bath className={cls} aria-hidden="true" />;
    case 'patio':
      return <Trees className={cls} aria-hidden="true" />;
    case 'estacionamiento':
      return <Car className={cls} aria-hidden="true" />;
  }
}

export function CabinsSection({ onOpenAmenities }: CabinsSectionProps) {
  const [selectedId, setSelectedId] = useState<'colibri' | 'chercan'>('colibri');
  const [selectedSpaceId, setSelectedSpaceId] = useState<CabinSpace['id']>('exterior');

  const activeCabin = CABINS.find((c) => c.id === selectedId) ?? CABINS[0];
  const activeSpace =
    activeCabin.spaces.find((s) => s.id === selectedSpaceId) ?? activeCabin.spaces[0];

  const displayedImage = activeSpace.image ?? activeCabin.image;
  const displayedAlt = activeSpace.imageAlt ?? activeCabin.imageAlt;

  const handleSelectCabin = (id: 'colibri' | 'chercan') => {
    setSelectedId(id);
    setSelectedSpaceId('exterior');
  };

  return (
    <section id="cabanas" className="py-20 lg:py-24 border-t border-[#171E18]/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium text-[#3E4C40] mb-3">
              Alojamiento exclusivo para parejas · Ensenada del Fraile
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#171E18] [text-wrap:balance]">
              Dos refugios rústicos rodeados de calma y vegetación
            </h2>
          </div>

          {/* Interactive Cabin Switcher */}
          <div
            role="tablist"
            aria-label="Seleccionar cabaña"
            className="inline-flex items-center gap-1 p-1 bg-[#EAE6DC] rounded-lg self-start md:self-auto shrink-0"
          >
            {CABINS.map((cabin) => {
              const isSelected = cabin.id === activeCabin.id;
              return (
                <button
                  key={cabin.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectCabin(cabin.id)}
                  className={`px-4 py-2 min-h-[40px] text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] ${
                    isSelected
                      ? 'bg-[#F6F4EF] text-[#171E18] shadow-xs'
                      : 'text-[#3E4C40] hover:text-[#171E18]'
                  }`}
                >
                  {cabin.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric 2-column split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 overflow-hidden rounded-xl aspect-[4/3] lg:aspect-auto relative bg-[#EAE6DC]">
            <ResilientImage
              src={displayedImage}
              alt={displayedAlt}
              aspectClassName="aspect-[4/3]"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#3E4C40] mb-3">
                <span>{activeCabin.capacity}</span>
                <span aria-hidden="true">·</span>
                <span>Cerca de El Tebo y Punta Los Lunes</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#171E18] mb-3">
                {activeCabin.name}
              </h3>

              <p className="text-base font-medium text-[#1B5E3A] mb-4">
                {activeCabin.tagline}
              </p>

              <p className="text-base text-[#3E4C40] leading-relaxed mb-6">
                {activeCabin.description}
              </p>

              <div className="border-t border-[#171E18]/10 pt-5 mb-6">
                <p className="text-xs font-semibold text-[#171E18] mb-1.5">
                  Espacio seleccionado: {activeSpace.label}
                </p>
                <p className="text-sm text-[#3E4C40] leading-relaxed">
                  {activeSpace.detail}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#171E18]/10">
              <a
                href="#reservas"
                className="inline-flex items-center justify-center px-5 py-2.5 min-h-[42px] text-sm font-medium text-[#F6F4EF] bg-[#1B5E3A] hover:bg-[#14472B] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Cotizar {activeCabin.name}
              </a>
              <button
                type="button"
                onClick={onOpenAmenities}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#171E18] hover:text-[#1B5E3A] hover:underline underline-offset-4 py-2 whitespace-nowrap shrink-0"
              >
                Ver detalle de servicios y comodidades
              </button>
            </div>
          </div>
        </div>

        {/* Discreet Sober Gallery Strip for Espacios Incluidos */}
        <div className="mt-8 pt-6 border-t border-[#171E18]/10">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <p className="text-xs font-semibold text-[#171E18]">
              Espacios incluidos en {activeCabin.name}
            </p>
            <p className="text-xs text-[#3E4C40]">
              Selecciona cada ambiente para ver su detalle y fotografía
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {activeCabin.spaces.map((space) => {
              const isActive = space.id === activeSpace.id;
              return (
                <button
                  key={space.id}
                  type="button"
                  onClick={() => setSelectedSpaceId(space.id)}
                  className={`group text-left rounded-lg border transition-colors overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] ${
                    isActive
                      ? 'border-[#1B5E3A] bg-[#EFECE4]'
                      : 'border-[#171E18]/10 bg-[#F6F4EF] hover:border-[#171E18]/25 hover:bg-[#EFECE4]/60'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFECE4] flex flex-col items-center justify-center">
                    {space.image ? (
                      <ResilientImage
                        src={space.image}
                        alt={space.imageAlt ?? `${space.label} en ${activeCabin.name}`}
                        aspectClassName="aspect-[4/3]"
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1 p-2 text-[#3E4C40]/80">
                        <SpaceIcon id={space.id} />
                        <span className="text-[10px] inline-flex items-center gap-1 text-[#3E4C40]/65">
                          <Camera className="w-2.5 h-2.5" aria-hidden="true" />
                          Próximamente
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-2.5 py-2">
                    <span
                      className={`block text-xs font-medium truncate ${
                        isActive ? 'text-[#1B5E3A]' : 'text-[#171E18]'
                      }`}
                    >
                      {space.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Personalized Hosting by Georgina y Claudio */}
        <div className="mt-14 pt-12 border-t border-[#171E18]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium text-[#3E4C40] mb-2">
                Anfitriones en Horcón
              </p>
              <h3 className="font-display text-2xl font-medium text-[#171E18] mb-3">
                Atención directa de {CONTACT.hosts}
              </h3>
              <p className="text-sm text-[#3E4C40] leading-relaxed">
                Nos gusta conectarnos contigo desde el primer mensaje para que tu estadía sea tranquila, clara y sin contratiempos.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {HOST_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="pt-4 border-t border-[#171E18]/15"
                >
                  <p className="text-xs font-semibold text-[#1B5E3A] tabular-nums mb-2">
                    {pillar.number}.
                  </p>
                  <h4 className="text-base font-semibold text-[#171E18] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#3E4C40] leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
