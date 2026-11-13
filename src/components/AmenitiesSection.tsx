import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import {
  AMENITY_GROUPS,
  PRACTICAL_CARE_NOTES,
} from '@/src/data/repaletData';

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
      className="fixed inset-0 z-50 bg-[#171E18]/60 backdrop-blur-xs overflow-y-auto p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"
      onClick={onCloseAmenities}
    >
      <div
        className="max-w-4xl mx-auto bg-[#F6F4EF] rounded-xl border border-[#171E18]/15 shadow-xl overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 border-b border-[#171E18]/10 bg-[#EFECE4] flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#3E4C40] mb-1">
              Equipamiento completo · Listo para tu estadía
            </p>
            <h2
              id="amenities-modal-title"
              className="font-display text-2xl sm:text-3xl font-medium text-[#171E18]"
            >
              Servicios y comodidades incluidas
            </h2>
          </div>
          <button
            type="button"
            onClick={onCloseAmenities}
            aria-label="Cerrar listado de comodidades"
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-[#171E18] hover:bg-[#E4DFD3] transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div
            role="tablist"
            aria-label="Filtrar equipamiento por ambiente"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EAE6DC] rounded-lg mb-8"
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

          <div
            className={`grid grid-cols-1 ${
              visibleGroups.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
            } gap-8`}
          >
            {visibleGroups.map((group) => (
              <div
                key={group.id}
                className="pt-4 border-t border-[#171E18]/15"
              >
                <div className="flex items-baseline gap-2.5 mb-3">
                  <span className="text-xs font-semibold text-[#1B5E3A] tabular-nums">
                    {group.number}.
                  </span>
                  <h3 className="font-display text-xl font-medium text-[#171E18]">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-sm text-[#3E4C40]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5">
                      <span aria-hidden="true" className="text-[#1B5E3A] font-semibold">
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
          <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#EFECE4] border border-[#171E18]/10">
            <div className="pb-4 mb-4 border-b border-[#171E18]/10">
              <p className="text-xs font-medium text-[#3E4C40] mb-1">
                Equipamiento completo e indicaciones prácticas
              </p>
              <h3 className="font-display text-xl font-medium text-[#171E18]">
                Cuidado del entorno durante tu visita
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PRACTICAL_CARE_NOTES.map((note) => (
                <div key={note.label}>
                  <p className="text-xs font-semibold text-[#1B5E3A] mb-1">
                    {note.label}
                  </p>
                  <p className="text-xs sm:text-sm text-[#3E4C40] leading-relaxed">
                    {note.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#171E18]/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[#3E4C40]">
              Ambas cabañas (Colibrí y Chercán) cuentan con este equipamiento completo.
            </p>
            <button
              type="button"
              onClick={onCloseAmenities}
              className="px-5 py-2.5 min-h-[40px] text-sm font-medium text-[#F6F4EF] bg-[#1B5E3A] hover:bg-[#14472B] rounded-lg transition-colors"
            >
              Cerrar detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
