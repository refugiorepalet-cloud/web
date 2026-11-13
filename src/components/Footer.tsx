import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/src/data/repaletData';

interface FooterProps {
  onOpenAmenities: () => void;
}

export function Footer({ onOpenAmenities }: FooterProps) {
  return (
    <footer
      id="contacto"
      className="border-t border-[#171E18]/12 bg-[#171E18] text-[#F6F4EF] py-16"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          <div className="md:col-span-5 space-y-4">
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
                href={CONTACT.whatsappPrimary}
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

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-[#A5A399]">
              Enlaces útiles
            </p>
            <div className="space-y-2 text-sm">
              <button
                type="button"
                onClick={onOpenAmenities}
                className="flex items-center gap-1.5 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1 text-left"
              >
                <span>Servicios y comodidades</span>
              </button>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#F6F4EF] hover:text-[#A3D9B1] transition-colors py-1"
              >
                <span>Instagram {CONTACT.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
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
