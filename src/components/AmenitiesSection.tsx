import { useEffect, useState } from 'react';
import {
  Cigarette,
  Droplets,
  Flame,
  KeyRound,
  Lightbulb,
  PawPrint,
  Recycle,
  Wifi,
  X,
} from 'lucide-react';
import {
  AMENITY_GROUPS,
  PRACTICAL_CARE_NOTES,
  type PracticalCareNote,
} from '@/src/data/repaletData';

function PracticalCareIcon({ id }: { id: PracticalCareNote['id'] }) {
  const cls = 'w-4 h-4 text-accent-ink';
  switch (id) {
    case 'reciclaje':
      return <Recycle className={cls} aria-hidden="true" />;
    case 'calefont':
      return <Flame className={cls} aria-hidden="true" />;
    case 'agua':
      return <Droplets className={cls} aria-hidden="true" />;
    case 'energia':
      return <Lightbulb className={cls} aria-hidden="true" />;
    case 'wifi':
      return <Wifi className={cls} aria-hidden="true" />;
    case 'mascotas':
      return <PawPrint className={cls} aria-hidden="true" />;
    case 'fumadores':
      return <Cigarette className={cls} aria-hidden="true" />;
    case 'llaves':
      return <KeyRound className={cls} aria-hidden="true" />;
  }
}

type GroupFilter = 'all' | 'cabana' | 'cocina' | 'bano' | 'habitacion';

interface AmenitiesSectionProps {
  isAmenitiesOpen: boolean;
  onCloseAmenities: () => void;
}

export function AmenitiesSection({
  isAmenitiesOpen,
  onCloseAmenities,
}: AmenitiesSectionProps) {
  const [filter, setFilter] = useState<GroupFilter>('all');

  useEffect(() => {
    if (!isAmenitiesOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseAmenities();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAmenitiesOpen, onCloseAmenities]);

  if (!isAmenitiesOpen) return null;

  const filterTabs: { id: GroupFilter; label: string }[] = [
    { id: 'all', label: 'Todo el equipamiento' },
    { id: 'cabana', label: 'Cabaña y exterior' },
    { id: 'cocina', label: 'Cocina y sala' },
    { id: 'habitacion', label: 'Habitación' },
    { id: 'bano', label: 'Baño' },
  ];

  const visibleGroups =
    filter === 'all'
      ? AMENITY_GROUPS
      : AMENITY_GROUPS.filter((group) => group.id === filter);

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-xs overflow-y-auto p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"
      onClick={onCloseAmenities}
    >
      <div
        className="max-w-4xl mx-auto bg-canvas rounded-xl border border-ink/15 shadow-xl overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 border-b border-ink/10 bg-surface flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-muted mb-1">
              Información completa · Equipamiento e indicaciones prácticas
            </p>
            <h2
              id="amenities-modal-title"
              className="font-display text-2xl sm:text-3xl font-medium text-ink"
            >
              Servicios y comodidades incluidas
            </h2>
          </div>
          <button
            type="button"
            onClick={onCloseAmenities}
            aria-label="Cerrar listado de comodidades"
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-ink hover:bg-stone-hover transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div
            role="tablist"
            aria-label="Filtrar equipamiento por ambiente"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-stone rounded-lg mb-8"
          >
            {filterTabs.map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 min-h-[38px] text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'bg-canvas text-ink shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            className={`grid grid-cols-1 ${
              visibleGroups.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
            } gap-8`}
          >
            {visibleGroups.map((group) => (
              <div
                key={group.id}
                className="pt-4 border-t border-ink/15"
              >
                <div className="flex items-baseline gap-2.5 mb-3">
                  <span className="text-xs font-semibold text-accent-ink tabular-nums">
                    {group.number}.
                  </span>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5">
                      <span aria-hidden="true" className="text-accent-ink font-semibold">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Indicaciones prácticas al pie del detalle */}
          <div className="mt-8 p-5 sm:p-6 rounded-xl bg-surface border border-ink/10">
            <div className="pb-4 mb-5 border-b border-ink/10">
              <h3 className="font-display text-xl font-medium text-ink">
                Indicaciones prácticas y cuidados del entorno
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PRACTICAL_CARE_NOTES.map((note) => (
                <div
                  key={note.id}
                  className="p-3.5 rounded-lg bg-canvas/70 border border-ink/8"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-md bg-surface border border-ink/10 flex items-center justify-center shrink-0">
                      <PracticalCareIcon id={note.id} />
                    </div>
                    <p className="text-xs font-semibold text-accent-ink">
                      {note.label}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {note.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted">
              Ambas cabañas (Colibrí y Chercán) cuentan con este equipamiento completo.
            </p>
            <button
              type="button"
              onClick={onCloseAmenities}
              className="px-5 py-2.5 min-h-[40px] text-sm font-medium text-canvas bg-cta hover:bg-cta-hover rounded-lg transition-colors"
            >
              Cerrar detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
