import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '@/src/data/repaletData';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#cabanas', label: 'Cabañas' },
    { href: '#tarifas', label: 'Tarifas' },
    { href: '#comodidades', label: 'Comodidades' },
    { href: '#horcon', label: 'Horcón' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F4EF]/95 backdrop-blur-sm border-b border-[#171E18]/10">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand mark with logo + single-line wordmark */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-[#171E18] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] rounded"
        >
          <img
            src={IMAGES.logo}
            alt=""
            aria-hidden="true"
            className="w-9 h-9 object-contain shrink-0"
          />
          <span>Refugio Repalet</span>
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3E4C40] hover:text-[#171E18] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] rounded py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#reservas"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#F6F4EF] bg-[#1B5E3A] hover:bg-[#14472B] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4EF]"
          >
            Reservar estadía
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#171E18] hover:bg-[#EAE6DC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#171E18]/10 bg-[#F6F4EF] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center min-h-[44px] text-base font-medium text-[#171E18] hover:text-[#1B5E3A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#reservas"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#F6F4EF] bg-[#1B5E3A] hover:bg-[#14472B] rounded-lg transition-colors"
            >
              Reservar estadía
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
