import { useState } from 'react';
import { IMAGES } from '@/src/data/repaletData';
import { Navbar } from '@/src/components/Navbar';
import { CabinsSection } from '@/src/components/CabinsSection';
import { AmenitiesSection } from '@/src/components/AmenitiesSection';
import { BookingSection } from '@/src/components/BookingSection';
import { HorconGuideSection } from '@/src/components/HorconGuideSection';
import { Footer } from '@/src/components/Footer';
import { ResilientImage } from '@/src/components/ResilientImage';

export default function App() {
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  const keyHighlights = [
    { label: 'Tarifa directa', value: '$65.000 CLP / noche' },
    { label: 'Evaluación Airbnb 2026', value: '4,99 ★ verificada' },
    { label: 'Capacidad exclusiva', value: 'Máximo 2 huéspedes' },
    { label: 'Ubicación privilegiada', value: 'A 300 m del mirador' },
  ];

  return (
    <div id="inicio" className="min-h-screen flex flex-col bg-[#F6F4EF] text-[#171E18]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="text-xs font-medium text-[#3E4C40] mb-4">
                  Horcón, Puchuncaví · Comunidad Ensenada del Fraile
                </p>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] tracking-tight text-[#171E18] [text-wrap:balance] mb-6">
                  Descanso frente al mar, pensado solo para dos.
                </h1>

                <p className="text-base sm:text-lg text-[#3E4C40] leading-relaxed mb-8">
                  Desconéctate de la rutina en nuestras cabañas rústicas entre bosque y mar. A pasos de Playa El Tebo, Cau Cau y la pintoresca Caleta de Horcón, atendido directamente por Georgina y Claudio.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#reservas"
                    className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] text-sm font-medium text-[#F6F4EF] bg-[#1B5E3A] hover:bg-[#14472B] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4EF]"
                  >
                    Calcular estadía y reservar
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 overflow-hidden rounded-xl aspect-[4/3] lg:aspect-auto">
                <ResilientImage
                  src={IMAGES.hero}
                  alt="Atardecer en Refugio Repalet con vista hacia el mar en Horcón"
                  aspectClassName="aspect-[4/3]"
                  className="w-full h-full object-cover object-center scale-[1.02]"
                />
              </div>
            </div>

            {/* Full-width 4-column facts strip below hero split */}
            <div className="mt-12 pt-8 border-t border-[#171E18]/12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {keyHighlights.map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-[#3E4C40] mb-1">{item.label}</p>
                  <p className="text-base sm:text-lg font-semibold text-[#171E18] tabular-nums">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CabinsSection onOpenAmenities={() => setAmenitiesOpen(true)} />
        <BookingSection />
        <AmenitiesSection
          isAmenitiesOpen={amenitiesOpen}
          onOpenAmenities={() => setAmenitiesOpen(true)}
          onCloseAmenities={() => setAmenitiesOpen(false)}
        />
        <HorconGuideSection />
      </main>

      <Footer onOpenAmenities={() => setAmenitiesOpen(true)} />
    </div>
  );
}
