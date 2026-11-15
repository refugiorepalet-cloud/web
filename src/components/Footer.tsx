import { ArrowUpRight, ListChecks, Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/src/data/repaletData';

interface FooterProps {
  onOpenAmenities: () => void;
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function AirbnbIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 3c-1.8 0-3.1 1.6-4.7 4.7C5.4 11.4 4 14.3 4 16.5A4.5 4.5 0 0 0 8.5 21c1.6 0 2.7-.8 3.5-2 .8 1.2 1.9 2 3.5 2a4.5 4.5 0 0 0 4.5-4.5c0-2.2-1.4-5.1-3.3-8.8C15.1 4.6 13.8 3 12 3z" />
      <circle cx="12" cy="14" r="1.75" />
    </svg>
  );
}

export function Footer({ onOpenAmenities }: FooterProps) {
  return (
    <footer
      id="contacto"
      className="border-t border-[#171E18]/12 bg-[#171E18] text-[#F6F4EF] py-16"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          <div className="md:col-span-4 space-y-4">
            <p className="font-display text-2xl font-medium tracking-tight">
              Refugio Repalet
            </p>
            <p className="text-sm text-[#D6D3C9] leading-relaxed max-w-sm">
              Alojamiento rústico y único, diseñado exclusivamente para el descanso en pareja entre el bosque y las playas de Horcón.
            </p>
            <p className="text-xs text-[#A5A399]">
              {CONTACT.location}
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-[#A5A399]">
              Contacto directo · {CONTACT.hosts}
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`${CONTACT.whatsappPrimary}?text=${encodeURIComponent(CONTACT.whatsappGreeting)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">WhatsApp: {CONTACT.phonePrimary}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-[#A5A399]">
              Enlaces relacionados
            </p>
            <div className="space-y-2 text-sm">
              <button
                type="button"
                onClick={onOpenAmenities}
                className="flex items-center gap-2 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1 text-left"
              >
                <ListChecks className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Servicios y comodidades</span>
              </button>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1"
              >
                <InstagramIcon />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1"
              >
                <FacebookIcon />
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.airbnbProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1"
              >
                <AirbnbIcon />
                <span>Airbnb</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A5A399]">
          <p>Refugio Repalet · Cabañas y Casa de Huéspedes en Horcón</p>
          <p>Una escapadita a Horcón siempre es buena idea.</p>
        </div>
      </div>
    </footer>
  );
}
