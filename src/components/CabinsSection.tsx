import { useState } from 'react';
import {
  Bath,
  BedDouble,
  Camera,
  ChevronLeft,
  ChevronRight,
  Home,
  ListChecks,
  Sofa,
  Sun,
  Trees,
  Utensils,
} from 'lucide-react';
import { CABINS, CONTACT, HOST_PILLARS, type CabinSpace } from '@/src/data/repaletData';
import { ResilientImage } from './ResilientImage';

interface CabinsSectionProps {
  onOpenAmenities: () => void;
}

function SpaceIcon({ id }: { id: CabinSpace['id'] }) {
  const cls = 'w-4 h-4 text-muted';
  switch (id) {
    case 'exterior':
      return <Home className={cls} aria-hidden="true" />;
    case 'sala-comedor':
      return <Sofa className={cls} aria-hidden="true" />;
    case 'cocina':
      return <Utensils className={cls} aria-hidden="true" />;
    case 'habitacion':
      return <BedDouble className={cls} aria-hidden="true" />;
    case 'bano':
      return <Bath className={cls} aria-hidden="true" />;
    case 'estacionamiento-patio':
      return <Trees className={cls} aria-hidden="true" />;
    case 'balcon':
      return <Sun className={cls} aria-hidden="true" />;
  }
}

export function CabinsSection({ onOpenAmenities }: CabinsSectionProps) {
  const [selectedId, setSelectedId] = useState<'colibri' | 'chercan'>('colibri');
  const [selectedSpaceId, setSelectedSpaceId] = useState<CabinSpace['id']>('exterior');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  const activeCabin = CABINS.find((c) => c.id === selectedId) ?? CABINS[0];
  const activeSpace =
    activeCabin.spaces.find((s) => s.id === selectedSpaceId) ?? activeCabin.spaces[0];

  const spacePhotos =
    activeSpace.images && activeSpace.images.length > 0
      ? activeSpace.images
      : [
          {
            src: activeSpace.image ?? activeCabin.image,
            alt: activeSpace.imageAlt ?? activeCabin.imageAlt,
          },
        ];

  const safePhotoIndex = Math.min(selectedPhotoIndex, spacePhotos.length - 1);
  const currentPhoto = spacePhotos[safePhotoIndex];
  const hasMultiplePhotos = spacePhotos.length > 1;

  const handleSelectCabin = (id: 'colibri' | 'chercan') => {
    setSelectedId(id);
    setSelectedSpaceId('exterior');
    setSelectedPhotoIndex(0);
  };

  const handleSelectSpace = (spaceId: CabinSpace['id']) => {
    setSelectedSpaceId(spaceId);
    setSelectedPhotoIndex(0);
  };

  const handleStepPhoto = (delta: number) => {
    setSelectedPhotoIndex((prev) => {
      const current = Math.min(prev, spacePhotos.length - 1);
      return (current + delta + spacePhotos.length) % spacePhotos.length;
    });
  };

  return (
    <section id="cabanas" className="py-20 lg:py-24 border-t border-ink/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium text-muted mb-3">
              Alojamiento exclusivo para parejas · Ensenada del Fraile
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink [text-wrap:balance]">
              Dos refugios rústicos rodeados de calma y vegetación
            </h2>
          </div>

          {/* Interactive Cabin Switcher */}
          <div
            role="tablist"
            aria-label="Seleccionar cabaña"
            className="inline-flex items-center gap-1 p-1 bg-stone rounded-lg self-start md:self-auto shrink-0"
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
                  className={`px-4 py-2 min-h-[40px] text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'bg-canvas text-ink shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {cabin.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="overflow-hidden rounded-xl aspect-[4/3] relative bg-stone">
              <ResilientImage
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                aspectClassName="aspect-[4/3]"
                className="w-full h-full object-cover object-center"
              />

              {hasMultiplePhotos && (
                <>
                  <button
                    type="button"
                    onClick={() => handleStepPhoto(-1)}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/55 hover:bg-ink/80 text-canvas inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepPhoto(1)}
                    aria-label="Siguiente foto"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/55 hover:bg-ink/80 text-canvas inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-ink/65 text-canvas text-xs font-medium tabular-nums">
                    {safePhotoIndex + 1} / {spacePhotos.length}
                  </span>
                </>
              )}
            </div>

            {hasMultiplePhotos && (
              <div className="flex items-center justify-between gap-3">
                <div
                  className={`grid gap-2.5 w-full sm:w-auto ${
                    spacePhotos.length === 2
                      ? 'grid-cols-2'
                      : spacePhotos.length >= 4
                      ? 'grid-cols-4'
                      : 'grid-cols-3'
                  }`}
                >
                  {spacePhotos.map((photo, index) => {
                    const isCurrent = index === safePhotoIndex;
                    return (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setSelectedPhotoIndex(index)}
                        aria-label={`Ver foto ${index + 1} de ${activeSpace.label}`}
                        aria-pressed={isCurrent}
                        className={`sm:w-24 aspect-[4/3] overflow-hidden rounded-lg border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          isCurrent
                            ? 'border-accent ring-1 ring-accent'
                            : 'border-ink/15 opacity-75 hover:opacity-100'
                        }`}
                      >
                        <ResilientImage
                          src={photo.src}
                          alt={photo.alt}
                          aspectClassName="aspect-[4/3]"
                          className="w-full h-full object-cover object-center"
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="hidden sm:block text-xs text-muted">
                  {activeSpace.label} · {spacePhotos.length} vistas
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between py-1 lg:py-2">
            <div>
              <div className="flex items-center gap-2 text-xs text-muted mb-3">
                <span>{activeCabin.capacity}</span>
                <span aria-hidden="true">·</span>
                <span>Cerca de El Tebo y Punta Los Lunes</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-3">
                {activeCabin.name}
              </h3>

              <p className="text-base font-medium text-accent-ink mb-4">
                {activeCabin.tagline}
              </p>

              <p className="text-base text-muted leading-relaxed mb-6">
                {activeCabin.description}
              </p>

              <div className="border-t border-ink/10 pt-5 mb-6">
                <p className="text-xs font-semibold text-ink mb-1.5">
                  Espacio seleccionado: {activeSpace.label}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {activeSpace.detail}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-ink/10">
              <a
                href="#reservas"
                className="inline-flex items-center justify-center px-5 py-2.5 min-h-[42px] text-sm font-medium text-canvas bg-cta hover:bg-cta-hover rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Cotizar {activeCabin.name}
              </a>
              <button
                type="button"
                onClick={onOpenAmenities}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] text-sm font-medium text-ink border border-ink/20 hover:bg-surface rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <ListChecks className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>Ver servicios y comodidades incluidas</span>
              </button>
            </div>
          </div>
        </div>

        {/* Discreet Sober Gallery Strip for Espacios Incluidos (7 spaces) */}
        <div className="mt-8 pt-6 border-t border-ink/10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <p className="text-xs font-semibold text-ink">
              Espacios incluidos en {activeCabin.name}
            </p>
            <p className="text-xs text-muted">
              Selecciona cada ambiente para recorrer sus fotografías
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {activeCabin.spaces.map((space) => {
              const isActive = space.id === activeSpace.id;
              const coverSrc = space.images?.[0]?.src ?? space.image;
              const coverAlt =
                space.images?.[0]?.alt ?? space.imageAlt ?? `${space.label} en ${activeCabin.name}`;
              return (
                <button
                  key={space.id}
                  type="button"
                  onClick={() => handleSelectSpace(space.id)}
                  className={`group text-left rounded-lg border transition-colors overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? 'border-accent bg-surface'
                      : 'border-ink/10 bg-canvas hover:border-ink/25 hover:bg-surface/60'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-surface flex flex-col items-center justify-center">
                    {coverSrc ? (
                      <ResilientImage
                        src={coverSrc}
                        alt={coverAlt}
                        aspectClassName="aspect-[4/3]"
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1 p-2 text-muted/80">
                        <SpaceIcon id={space.id} />
                        <span className="text-[10px] inline-flex items-center gap-1 text-muted/65">
                          <Camera className="w-2.5 h-2.5" aria-hidden="true" />
                          Próximamente
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-2.5 py-2">
                    <span
                      className={`block text-xs font-medium truncate ${
                        isActive ? 'text-accent-ink' : 'text-ink'
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
        <div className="mt-14 pt-12 border-t border-ink/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium text-muted mb-2">
                Anfitriones en Horcón
              </p>
              <h3 className="font-display text-2xl font-medium text-ink mb-3">
                Atención directa de {CONTACT.hosts}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Nos gusta conectarnos contigo desde el primer mensaje para que tu estadía sea tranquila, clara y sin contratiempos.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {HOST_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="pt-4 border-t border-ink/15"
                >
                  <p className="text-xs font-semibold text-accent-ink tabular-nums mb-2">
                    {pillar.number}.
                  </p>
                  <h4 className="text-base font-semibold text-ink mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
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
