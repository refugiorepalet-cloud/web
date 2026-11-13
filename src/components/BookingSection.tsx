import { useMemo, useState } from 'react';
import { Check, ChevronDown, Copy, ListChecks, MessageCircle, Star } from 'lucide-react';
import {
  AIRBNB_REVIEWS,
  CABINS,
  CANCELLATION_RULES,
  CONTACT,
  HOUSE_RULES,
  PRICING,
} from '@/src/data/repaletData';

function formatClp(amount: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(amount);
}

function getTodayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

interface BookingSectionProps {
  onOpenAmenities: () => void;
}

export function BookingSection({ onOpenAmenities }: BookingSectionProps) {
  const [selectedCabin, setSelectedCabin] = useState<string>(CABINS[0].name);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [nights, setNights] = useState<number>(PRICING.minNights);
  const [guestName, setGuestName] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');
  const [showReviews, setShowReviews] = useState<boolean>(false);

  const todayIso = useMemo(() => getTodayIso(), []);
  const totalAmount = nights * PRICING.nightlyRateClp;
  const depositAmount = Math.round(totalAmount * (PRICING.depositPercentage / 100));
  const checkInBalance = totalAmount - depositAmount;

  const checkOutDateLabel = useMemo(() => {
    if (!checkInDate) return null;
    const base = new Date(`${checkInDate}T12:00:00`);
    if (Number.isNaN(base.getTime())) return null;
    base.setDate(base.getDate() + nights);
    return base.toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, [checkInDate, nights]);

  const checkInDateLabel = useMemo(() => {
    if (!checkInDate) return null;
    const base = new Date(`${checkInDate}T12:00:00`);
    if (Number.isNaN(base.getTime())) return null;
    return base.toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, [checkInDate]);

  const whatsappMessage = useMemo(() => {
    const trimmedName = guestName.trim();

    if (!checkInDateLabel || !checkOutDateLabel) {
      return trimmedName
        ? `Hola Georgina y Claudio, soy ${trimmedName}. Visité la web de Refugio Repalet y me gustaría consultar por disponibilidad en sus cabañas en Horcón.`
        : CONTACT.whatsappGreeting;
    }

    const greeting = trimmedName
      ? `Hola Georgina y Claudio, soy ${trimmedName}.`
      : 'Hola Georgina y Claudio.';

    return `${greeting} Me gustaría consultar disponibilidad del ${checkInDateLabel} al ${checkOutDateLabel} (${nights} noches) en ${selectedCabin} (2 huéspedes). Total estimado: ${formatClp(
      totalAmount
    )} CLP (abono 50%: ${formatClp(depositAmount)} CLP).`;
  }, [guestName, checkInDateLabel, checkOutDateLabel, nights, selectedCabin, totalAmount, depositAmount]);

  const whatsappHref = `${CONTACT.whatsappPrimary}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleNightsChange = (delta: number) => {
    setValidationError('');
    setNights((prev) => Math.min(14, Math.max(PRICING.minNights, prev + delta)));
  };

  const handleCopySummary = async () => {
    if (checkInDate && checkInDate < todayIso) {
      setValidationError('Por favor selecciona una fecha de llegada igual o posterior a hoy.');
      return;
    }
    setValidationError('');
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setValidationError('No pudimos copiar automáticamente, pero puedes abrir WhatsApp directamente.');
    }
  };

  return (
    <section id="tarifas" className="py-20 lg:py-24 border-t border-[#171E18]/10 bg-[#EFECE4]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Trust Proof + Direct Booking Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium text-[#3E4C40] mb-3">
                Reserva directa sin comisiones
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#171E18] [text-wrap:balance]">
                Tarifa transparente y respaldo de comunidad
              </h2>
            </div>

            <div className="p-6 rounded-xl bg-[#F6F4EF] border border-[#171E18]/10 space-y-3">
              <div className="flex items-center gap-2 text-[#1B5E3A]">
                <Star className="w-5 h-5 fill-[#1B5E3A]" aria-hidden="true" />
                <span className="font-display text-2xl font-semibold tabular-nums text-[#171E18]">
                  {PRICING.airbnbRating} ★ en Airbnb
                </span>
                <span className="text-xs text-[#3E4C40] tabular-nums">
                  · {PRICING.airbnbYear}
                </span>
              </div>
              <p className="text-sm text-[#3E4C40] leading-relaxed">
                Te invitamos a verificar nuestras evaluaciones de 5 estrellas en Airbnb para tu total tranquilidad. Al reservar directamente por WhatsApp evitas las comisiones obligatorias de las plataformas internacionales y aseguras el valor real más conveniente.
              </p>

              <div className="pt-3 border-t border-[#171E18]/10">
                <button
                  type="button"
                  onClick={() => setShowReviews((prev) => !prev)}
                  aria-expanded={showReviews}
                  aria-controls="airbnb-reviews-panel"
                  className="w-full flex items-center justify-between py-1.5 text-xs sm:text-sm font-semibold text-[#1B5E3A] hover:text-[#14472B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E3A] rounded"
                >
                  <span>
                    {showReviews
                      ? 'Ocultar opiniones de huéspedes'
                      : 'Ver 3 opiniones reales de huéspedes (Airbnb)'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      showReviews ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {showReviews && (
                  <div
                    id="airbnb-reviews-panel"
                    className="mt-3 pt-2 border-t border-[#171E18]/10 space-y-4"
                  >
                    <ul className="divide-y divide-[#171E18]/10">
                      {AIRBNB_REVIEWS.map((review) => (
                        <li key={review.id} className="py-3 first:pt-1 last:pb-1 space-y-1.5">
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="font-semibold text-[#171E18]">
                              {review.guest}
                            </span>
                            <span className="text-[#3E4C40]">
                              5,0 ★ · {review.meta}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#3E4C40] leading-relaxed">
                            “{review.quote}”
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <div className="flex items-baseline justify-between border-b border-[#171E18]/10 pb-3">
                <span className="text-sm text-[#3E4C40]">Tarifa por noche (2 huéspedes)</span>
                <span className="text-lg font-semibold text-[#171E18] tabular-nums">
                  {formatClp(PRICING.nightlyRateClp)} CLP
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[#171E18]/10 pb-3">
                <span className="text-sm text-[#3E4C40]">Estadía mínima</span>
                <span className="text-sm font-medium text-[#171E18] tabular-nums">
                  {PRICING.minNights} noches
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-sm text-[#3E4C40]">Modalidad de pago</span>
                <span className="text-sm font-medium text-[#171E18] text-right">
                  Transferencia · 50% abono y 50% al llegar
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Booking & Deposit Calculator */}
          <div
            id="reservas"
            className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#F6F4EF] border border-[#171E18]/12"
          >
            <div className="pb-6 border-b border-[#171E18]/10 mb-6">
              <h3 className="font-display text-2xl font-medium text-[#171E18]">
                Calcula tu estadía y reserva directo
              </h3>
              <p className="text-sm text-[#3E4C40] mt-1">
                Selecciona tus fechas estimadas y envíanos tu consulta prearmada por WhatsApp para confirmar disponibilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label
                  htmlFor="cabin-select"
                  className="block text-xs font-semibold text-[#3E4C40] mb-2"
                >
                  Cabaña de preferencia
                </label>
                <select
                  id="cabin-select"
                  value={selectedCabin}
                  onChange={(e) => setSelectedCabin(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 text-sm text-[#171E18] bg-white border border-[#171E18]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                >
                  <option value="Cabaña Colibrí">Cabaña Colibrí</option>
                  <option value="Cabaña Chercán">Cabaña Chercán</option>
                  <option value="Cualquiera disponible">Cualquiera disponible</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="guest-name"
                  className="block text-xs font-semibold text-[#3E4C40] mb-2"
                >
                  Tu nombre (opcional)
                </label>
                <input
                  id="guest-name"
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Ej. Camila y Tomás"
                  className="w-full min-h-[44px] px-3.5 py-2 text-sm text-[#171E18] bg-white border border-[#171E18]/15 rounded-lg placeholder:text-[#3E4C40]/50 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                />
              </div>

              <div>
                <label
                  htmlFor="checkin-date"
                  className="block text-xs font-semibold text-[#3E4C40] mb-2"
                >
                  Fecha estimada de llegada
                </label>
                <input
                  id="checkin-date"
                  type="date"
                  min={todayIso}
                  value={checkInDate}
                  onChange={(e) => {
                    const nextDate = e.target.value;
                    if (nextDate && nextDate.length === 10 && nextDate < todayIso) {
                      setCheckInDate('');
                      setValidationError(
                        'Por favor selecciona una fecha de llegada igual o posterior a hoy.'
                      );
                      return;
                    }
                    setValidationError('');
                    setCheckInDate(nextDate);
                  }}
                  className="w-full min-h-[44px] px-3.5 py-2 text-sm text-[#171E18] bg-white border border-[#171E18]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                />
              </div>

              <div>
                <span className="block text-xs font-semibold text-[#3E4C40] mb-2">
                  Cantidad de noches (mín. {PRICING.minNights})
                </span>
                <div className="flex items-center justify-between min-h-[44px] px-2 bg-white border border-[#171E18]/15 rounded-lg">
                  <button
                    type="button"
                    onClick={() => handleNightsChange(-1)}
                    disabled={nights <= PRICING.minNights}
                    aria-label="Restar una noche"
                    className="w-9 h-9 inline-flex items-center justify-center rounded text-base font-semibold text-[#171E18] hover:bg-[#EFECE4] disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold text-[#171E18] tabular-nums">
                    {nights} {nights === 1 ? 'noche' : 'noches'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNightsChange(1)}
                    disabled={nights >= 14}
                    aria-label="Sumar una noche"
                    className="w-9 h-9 inline-flex items-center justify-center rounded text-base font-semibold text-[#171E18] hover:bg-[#EFECE4] disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {validationError && (
              <p role="alert" className="text-xs font-medium text-red-700 mb-4">
                {validationError}
              </p>
            )}

            {/* Tabular Breakdown */}
            <div className="p-5 rounded-lg bg-[#EFECE4] space-y-2.5 mb-6">
              {checkInDateLabel && checkOutDateLabel && (
                <div className="flex items-center justify-between text-xs text-[#3E4C40] pb-2 border-b border-[#171E18]/10">
                  <span>Fechas seleccionadas</span>
                  <span className="font-medium text-[#171E18]">
                    {checkInDateLabel} al {checkOutDateLabel}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between text-sm text-[#3E4C40]">
                <span>
                  {nights} noches × {formatClp(PRICING.nightlyRateClp)} CLP
                </span>
                <span className="font-semibold text-[#171E18] tabular-nums">
                  {formatClp(totalAmount)} CLP
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-[#1B5E3A]">
                <span className="font-medium">Abono 50% para confirmar fechas</span>
                <span className="font-semibold tabular-nums">
                  {formatClp(depositAmount)} CLP
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#3E4C40]">
                <span>Saldo 50% el día de llegada (antes del check-in)</span>
                <span className="tabular-nums font-medium">
                  {formatClp(checkInBalance)} CLP
                </span>
              </div>
              <p className="pt-2.5 border-t border-[#171E18]/10 text-xs text-[#3E4C40] leading-relaxed">
                Confirmada la disponibilidad por WhatsApp, la reserva se formaliza mediante transferencia bancaria directa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (checkInDate && checkInDate < todayIso) {
                    e.preventDefault();
                    setCheckInDate('');
                    setValidationError(
                      'Por favor selecciona una fecha de llegada igual o posterior a hoy.'
                    );
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-medium text-[#F6F4EF] bg-[#1B5E3A] hover:bg-[#14472B] rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Enviar consulta por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-sm font-medium text-[#171E18] border border-[#171E18]/20 hover:bg-[#EAE6DC] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#1B5E3A]" aria-hidden="true" />
                    <span>Resumen copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copiar detalle</span>
                  </>
                )}
              </button>
            </div>

            <p className="mt-4 pt-4 border-t border-[#171E18]/10 text-xs text-[#3E4C40] leading-relaxed">
              <strong className="font-semibold text-[#171E18]">Requisito de ingreso:</strong> Por normativa legal, te solicitaremos registrar la identidad de todos los huéspedes mediante cédula de identidad o pasaporte vigente antes o al momento del check-in.
            </p>
          </div>
        </div>

        {/* House Rules & Cancellation Policy in Clean Hairline Grid */}
        <div className="pt-14 border-t border-[#171E18]/12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl font-medium text-[#171E18] mb-6">
              Información y reglas de la casa
            </h3>
            <dl className="divide-y divide-[#171E18]/10 border-t border-b border-[#171E18]/10">
              {HOUSE_RULES.map((rule) => (
                <div
                  key={rule.label}
                  className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4"
                >
                  <dt className="text-sm font-semibold text-[#171E18]">
                    {rule.label}
                  </dt>
                  <dd className="text-sm text-[#3E4C40] sm:col-span-2">
                    {rule.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-xs text-[#3E4C40] mt-4">
              Antes de regresar a casa, recuerda devolver las llaves presencialmente.
            </p>
            <div className="mt-5 pt-5 border-t border-[#171E18]/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs sm:text-sm text-[#3E4C40]">
                ¿Quieres revisar el equipamiento por ambiente e indicaciones prácticas?
              </span>
              <button
                type="button"
                onClick={onOpenAmenities}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] text-sm font-medium text-[#171E18] bg-[#F6F4EF] border border-[#171E18]/20 hover:bg-[#EAE6DC] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <ListChecks className="w-4 h-4 text-[#1B5E3A]" aria-hidden="true" />
                <span>Ver servicios y comodidades incluidas</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-medium text-[#171E18] mb-6">
              Política de cancelación
            </h3>
            <div className="space-y-6">
              {CANCELLATION_RULES.map((item) => (
                <div
                  key={item.window}
                  className="p-5 rounded-xl bg-[#F6F4EF] border border-[#171E18]/10"
                >
                  <p className="text-xs font-medium text-[#3E4C40] mb-1">
                    {item.window}
                  </p>
                  <p className="text-base font-semibold text-[#1B5E3A] mb-2">
                    {item.refund}
                  </p>
                  <p className="text-sm text-[#3E4C40] leading-relaxed">
                    {item.note}
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
