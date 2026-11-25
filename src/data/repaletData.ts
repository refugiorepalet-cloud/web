const asset = (relativePath: string) =>
  `${import.meta.env.BASE_URL}${relativePath.replace(/^\/+/, '')}`;

export interface CabinSpacePhoto {
  src: string;
  alt: string;
}

export interface CabinSpace {
  id:
    | 'exterior'
    | 'sala-comedor'
    | 'cocina'
    | 'habitacion'
    | 'bano'
    | 'estacionamiento-patio'
    | 'balcon';
  label: string;
  detail: string;
  image?: string;
  imageAlt?: string;
  images?: CabinSpacePhoto[];
}

export interface Cabin {
  id: 'colibri' | 'chercan';
  name: string;
  tagline: string;
  description: string;
  spaces: CabinSpace[];
  capacity: string;
  image: string;
  imageAlt: string;
}

export interface CoastalSpot {
  id: string;
  number: string;
  name: string;
  category: 'playas' | 'miradores' | 'eventos';
  categoryLabel: string;
  distanceNote: string;
  walkDistance?: string;
  driveDistance?: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const IMAGES = {
  logo: asset('assets/aistudio/logo_transp_45a8aadc.png'),
  hero: asset('assets/aistudio/image_727f47dd.png'),
  colibri: asset('assets/repalet/colibri/cabana-colibri-exterior-1-horcon.webp'),
  chercan: asset('assets/aistudio/FOT_WEB_REF_REP_chercan_bc3fa86d.webp'),
  horconMain: asset('assets/aistudio/playa_quirilluca_d73911a2.jpg'),
};

export const CONTACT = {
  hosts: 'Georgina y Claudio',
  location: 'Comunidad Ensenada del Fraile, Horcón, Puchuncaví, Chile',
  whatsappPrimary: 'https://wa.me/56982067917',
  whatsappGreeting:
    'Hola Georgina y Claudio, visité la web de Refugio Repalet y me gustaría consultar por disponibilidad en sus cabañas en Horcón.',
  phonePrimary: '+56 9 8206 7917',
  email: 'repalet@gmail.com',
  instagramUrl: 'https://www.instagram.com/refugiorepalet/',
  instagramHandle: '@refugiorepalet',
  facebookUrl: 'https://www.facebook.com/refugiorepalet/',
  facebookHandle: '/refugiorepalet',
  airbnbProfileUrl: 'https://www.airbnb.cl/h/refugiorepalet',
  airbnbHandle: 'airbnb.cl/h/refugiorepalet',
};

// Coordenadas exactas de Refugio Repalet (Comunidad Ensenada del Fraile, Horcón).
export const LOCATION_MAP = {
  sectorName: 'Comunidad Ensenada del Fraile, Horcón',
  lat: -32.717498,
  lng: -71.503067,
  embedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-71.5210%2C-32.7315%2C-71.4780%2C-32.7035&layer=mapnik&marker=-32.717498%2C-71.503067',
  openStreetMapUrl:
    'https://www.openstreetmap.org/?mlat=-32.717498&mlon=-71.503067#map=16/-32.717498/-71.503067',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=-32.717498,-71.503067',
};

export const PRICING = {
  nightlyRateClp: 65000,
  minNights: 2,
  maxGuests: 2,
  depositPercentage: 50,
  airbnbRating: '4,99',
  airbnbYear: '2026',
};

export interface AirbnbReview {
  id: string;
  guest: string;
  meta: string;
  quote: string;
}

export const AIRBNB_REVIEWS: AirbnbReview[] = [
  {
    id: 'sara-2026',
    guest: 'Sara',
    meta: 'Enero 2026 · Estadía en pareja',
    quote:
      'Muy buena estadía, Claudio muy simpático y amable. Nos dejó todo super ordenado y limpio, la cabaña es preciosa y al lado de la playa del Tebo. Perfecto para venir en pareja! 10/10!',
  },
  {
    id: 'gonzalo-2026',
    guest: 'Gonzalo',
    meta: 'Valparaíso, Chile · Febrero 2026',
    quote:
      'Claudio es un excelente anfitrión, respuestas rápidas ante consultas. La cabaña está impecable con todos los servicios descritos en la publicación, el lugar es hermoso y acogedor.',
  },
  {
    id: 'andre-2026',
    guest: 'Andre',
    meta: 'Santiago, Chile · Enero 2026',
    quote:
      'Cabaña preciosa, tiene todo lo necesario para pasar unos días desconectado del caótico Santiago. Hermosos paisajes y muy cercana a playa el tebo y cau cau.',
  },
];

export const CABINS: Cabin[] = [
  {
    id: 'colibri',
    name: 'Cabaña Colibrí',
    tagline: 'Luz natural, vista verde y descanso pensado para dos',
    description:
      'Acogedora casa de huéspedes rústica diseñada especialmente para parejas que buscan desconectarse de la rutina. Cuenta con amplio patio, entorno natural privilegiado y ubicación estratégica cerca de los centros de eventos Club El Tebo y Punta Los Lunes.',
    spaces: [
      {
        id: 'exterior',
        label: 'Vista exterior',
        detail: 'Fachada rústica en madera de dos niveles con deck de acceso, jardín costero y toldo vela.',
        image: asset('assets/repalet/colibri/cabana-colibri-exterior-1-horcon.webp'),
        imageAlt: 'Vista exterior completa de Cabaña Colibrí rodeada de jardín verde, deck y balcón en Horcón',
        images: [
          {
            src: asset('assets/repalet/colibri/cabana-colibri-exterior-1-horcon.webp'),
            alt: 'Vista exterior de Cabaña Colibrí con jardín verde, escalera de acceso y balcón superior en Horcón',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-exterior-2-horcon.webp'),
            alt: 'Fachada lateral y deck de entrada de Cabaña Colibrí rodeada de jardín en Horcón',
          },
        ],
      },
      {
        id: 'sala-comedor',
        label: 'Sala / Comedor',
        detail: 'Ambiente luminoso integrado con mesa comedor para dos, sillón cómodo y amplio ventanal hacia el jardín.',
        image: asset('assets/repalet/colibri/cabana-colibri-sala-comedor-1-horcon.webp'),
        imageAlt: 'Sala y comedor integrados en Cabaña Colibrí con vista al jardín en Horcón',
        images: [
          {
            src: asset('assets/repalet/colibri/cabana-colibri-sala-comedor-1-horcon.webp'),
            alt: 'Vista panorámica de sala, comedor y cocina integrada en Cabaña Colibrí, Horcón',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-sala-comedor-2-horcon.webp'),
            alt: 'Sector de estar con sillón, cojines, mesa auxiliar y vista al jardín en Cabaña Colibrí, Horcón',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-sala-comedor-3-horcon.webp'),
            alt: 'Mesa comedor para dos con sillas turquesa y ventanal al patio en Cabaña Colibrí',
          },
        ],
      },
      {
        id: 'cocina',
        label: 'Cocina',
        detail: 'Encimera rústica con cocinilla eléctrica de dos platos, lavaplatos, mini nevera, hervidor, microondas, tostador y menaje para 2.',
        image: asset('assets/repalet/colibri/cabana-colibri-cocina-1-horcon.webp'),
        imageAlt: 'Cocina rústica equipada de Cabaña Colibrí con mesón de madera y cocinilla en Horcón',
        images: [
          {
            src: asset('assets/repalet/colibri/cabana-colibri-cocina-1-horcon.webp'),
            alt: 'Mesón de madera de la cocina equipada con cocinilla y lámpara colgante en Cabaña Colibrí',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-cocina-2-horcon.webp'),
            alt: 'Cocina de Cabaña Colibrí con mini nevera, lavaplatos y salida visual hacia el comedor',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-cocina-3-horcon.webp'),
            alt: 'Vista frontal de la cocina integrada hacia el estar y ventanal en Cabaña Colibrí',
          },
        ],
      },
      {
        id: 'habitacion',
        label: 'Habitación',
        detail: 'Dormitorio en segundo nivel con cama de dos plazas, veladores, vitral artesanal y acceso directo al balcón privado.',
        image: asset('assets/repalet/colibri/cabana-colibri-habitacion-1-horcon.webp'),
        imageAlt: 'Habitación matrimonial de Cabaña Colibrí con salida directa al balcón privado en Horcón',
        images: [
          {
            src: asset('assets/repalet/colibri/cabana-colibri-habitacion-1-horcon.webp'),
            alt: 'Dormitorio principal de Cabaña Colibrí con puerta hacia el balcón y vista despejada',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-habitacion-2-horcon.webp'),
            alt: 'Cama de dos plazas con respaldo de madera y cortina roller en Cabaña Colibrí',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-habitacion-3-horcon.webp'),
            alt: 'Habitación de Cabaña Colibrí junto al ventanal de vitral en Horcón',
          },
        ],
      },
      {
        id: 'bano',
        label: 'Baño',
        detail: 'Baño privado con shower door, ducha teléfono, agua caliente con calefont automático, lavamanos y accesorios esenciales.',
        image: asset('assets/repalet/colibri/cabana-colibri-bano-1-horcon.webp'),
        imageAlt: 'Baño privado de Cabaña Colibrí con lavamanos, espejo y cabina de ducha en Horcón',
        images: [
          {
            src: asset('assets/repalet/colibri/cabana-colibri-bano-1-horcon.webp'),
            alt: 'Vista del baño privado con lavamanos y shower door abierto en Cabaña Colibrí',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-bano-2-horcon.webp'),
            alt: 'Baño completo con cabina shower door cerrada, lavamanos y WC en Cabaña Colibrí',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-bano-3-horcon.webp'),
            alt: 'Detalle de WC y sector de ducha en el baño privado de Cabaña Colibrí',
          },
        ],
      },
      {
        id: 'estacionamiento-patio',
        label: 'Estacionamiento / Patio',
        detail: 'Estacionamiento privado dentro del recinto, amplio patio con jardín verde y espacio común para disfrutar los atardeceres.',
        image: asset('assets/repalet/colibri/cabana-colibri-estacionamiento-patio-1-horcon.webp'),
        imageAlt: 'Amplio patio verde y zona de estacionamiento privado frente a Cabaña Colibrí en Horcón',
        images: [
          {
            src: asset('assets/repalet/colibri/cabana-colibri-estacionamiento-patio-1-horcon.webp'),
            alt: 'Acceso, estacionamiento y jardín frontal de Cabaña Colibrí en Refugio Repalet, Horcón',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-estacionamiento-patio-2-horcon.webp'),
            alt: 'Patio de Refugio Repalet al atardecer con sillón lounge y luces cálidas entre cabañas',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-estacionamiento-patio-3-horcon.webp'),
            alt: 'Brindis al atardecer disfrutando la caída del sol en Refugio Repalet, Horcón',
          },
        ],
      },
      {
        id: 'balcon',
        label: 'Balcón',
        detail: 'Balcón superior privado con toldo vela, sillones de madera, mesa auxiliar y vista abierta hacia el entorno costero y el mar.',
        image: asset('assets/repalet/colibri/cabana-colibri-balcon-1-horcon.webp'),
        imageAlt: 'Balcón privado en segundo piso de Cabaña Colibrí con vista hacia el mar en Horcón',
        images: [
          {
            src: asset('assets/repalet/colibri/cabana-colibri-balcon-1-horcon.webp'),
            alt: 'Balcón superior privado de Cabaña Colibrí con toldo vela y horizonte marino al fondo',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-balcon-2-horcon.webp'),
            alt: 'Vista despejada desde el balcón de Cabaña Colibrí hacia la costa de Horcón',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-balcon-3-horcon.webp'),
            alt: 'Sillones de madera con cojines y mesa lateral en el balcón privado de Cabaña Colibrí',
          },
          {
            src: asset('assets/repalet/colibri/cabana-colibri-balcon-4-horcon.webp'),
            alt: 'Puesta de sol sobre el mar y horizonte costero vista desde el balcón de Cabaña Colibrí, Horcón',
          },
        ],
      },
    ],
    capacity: 'Máximo 2 huéspedes',
    image: asset('assets/repalet/colibri/cabana-colibri-exterior-1-horcon.webp'),
    imageAlt: 'Vista exterior de Cabaña Colibrí rodeada de jardín verde, deck y balcón en Refugio Repalet, Horcón',
  },
  {
    id: 'chercan',
    name: 'Cabaña Chercán',
    tagline: 'Patio privado, fogón al atardecer y calma entre árboles costeros',
    description:
      'Un refugio íntimo rodeado de vegetación costera y trinos de aves locales, a pasos del mirador Ensenada del Fraile. Ideal para escapadas románticas, observación de aves, caminatas por la playa o asistir a celebraciones en el sector.',
    spaces: [
      {
        id: 'exterior',
        label: 'Vista exterior',
        detail: 'Cabaña de dos niveles en madera nativa con fogón exterior y deck de acceso.',
        image: IMAGES.chercan,
        imageAlt: 'Cabaña Chercán al atardecer con fogón encendido en Refugio Repalet, Horcón',
      },
      {
        id: 'sala-comedor',
        label: 'Sala / Comedor',
        detail: 'Ambiente acogedor con sillón, mesa comedor para dos y luz cálida para descansar sin apuros.',
      },
      {
        id: 'cocina',
        label: 'Cocina',
        detail: 'Mini nevera, microondas, hervidor, tostador, batería de cocina y menaje para 2.',
      },
      {
        id: 'habitacion',
        label: 'Habitación',
        detail: 'Cama de dos plazas, armario, calefactor portátil, ropa de cama y balcón privado.',
      },
      {
        id: 'bano',
        label: 'Baño',
        detail: 'Shower door con ducha teléfono, agua caliente con calefont automático y accesorios.',
      },
      {
        id: 'estacionamiento-patio',
        label: 'Estacionamiento / Patio',
        detail: 'Estacionamiento privado dentro del predio y patio natural con sector para hacer fogata y hamaca.',
      },
      {
        id: 'balcon',
        label: 'Balcón',
        detail: 'Balcón privado rodeado de tranquilidad costera y vegetación del sector.',
      },
    ],
    capacity: 'Máximo 2 huéspedes',
    image: IMAGES.chercan,
    imageAlt: 'Cabaña Chercán al atardecer con fogón encendido en Refugio Repalet, Horcón',
  },
];

export const HOST_PILLARS = [
  {
    number: '01',
    title: 'Comunicación previa al viaje',
    detail: 'Contacto directo antes de tu llegada para resolver dudas y enviarte las indicaciones exactas de la ruta.',
  },
  {
    number: '02',
    title: 'Recepción presencial',
    detail: 'Te recibimos personalmente en Horcón para mostrarte la cabaña y darte la bienvenida.',
  },
  {
    number: '03',
    title: 'Consejos y alianzas locales',
    detail: 'Recomendaciones de playas, senderos, observación de aves y beneficios con gastronomía del sector.',
  },
];

export interface AmenityGroup {
  id: 'cabana' | 'cocina' | 'bano' | 'habitacion';
  number: string;
  title: string;
  items: string[];
}

export const AMENITY_GROUPS: AmenityGroup[] = [
  {
    id: 'cabana',
    number: '01',
    title: 'Cabaña y exterior',
    items: [
      'Wifi',
      'Estacionamiento privado',
      'Patio y acceso a playa',
      'Lugar para hacer fogata',
      'Hamaca',
    ],
  },
  {
    id: 'cocina',
    number: '02',
    title: 'Cocina y sala',
    items: [
      'Hervidor de agua, microondas y tostador eléctrico',
      'Mini nevera',
      'Cubiertos para 2 personas (platos, vasos, copas)',
      'Batería de cocina (sartén, paila de huevos, ollas)',
      'Accesorios básicos (paños, lavalozas, esponja, azúcar, sal, aceite)',
      'Mesa comedor, sillón, cortinas y extintor',
    ],
  },
  {
    id: 'bano',
    number: '03',
    title: 'Baño privado',
    items: [
      'Shower door con monomando de ducha teléfono',
      'WC y lavamanos',
      'Agua caliente (calefont automático)',
      'Accesorios (jabón líquido, papel higiénico, papel absorbente, cloro, cepillo WC)',
    ],
  },
  {
    id: 'habitacion',
    number: '04',
    title: 'Habitación',
    items: [
      'Cama de dos plazas (2 almohadas, 2 cobertores, 1 juego de sábanas)',
      'Balcón privado y mobiliario',
      'Armario y colgadores para la ropa',
      'Calefactor portátil',
      'Plancha y secador de pelo',
      'Toallas, tendedero de ropa y botiquín',
    ],
  },
];

export interface PracticalCareNote {
  id:
    | 'reciclaje'
    | 'calefont'
    | 'agua'
    | 'energia'
    | 'wifi'
    | 'mascotas'
    | 'fumadores'
    | 'llaves';
  label: string;
  detail: string;
}

export const PRACTICAL_CARE_NOTES: PracticalCareNote[] = [
  {
    id: 'reciclaje',
    label: 'Reciclaje',
    detail: 'Valoramos separar los residuos.',
  },
  {
    id: 'calefont',
    label: 'Calefont',
    detail: 'Sistema de encendido automático.',
  },
  {
    id: 'agua',
    label: 'Agua',
    detail: 'Red local no apta para consumo directo.',
  },
  {
    id: 'energia',
    label: 'Energía',
    detail: 'Agradeceremos apagar las luces de los espacios que no estén utilizando.',
  },
  {
    id: 'wifi',
    label: 'Wifi',
    detail: 'Conexión inalámbrica gratuita disponible.',
  },
  {
    id: 'mascotas',
    label: 'Mascotas',
    detail: 'No habilitado para mascotas.',
  },
  {
    id: 'fumadores',
    label: 'Fumadores',
    detail: 'Permitido en áreas habilitadas al aire libre.',
  },
  {
    id: 'llaves',
    label: 'Devolución de llaves',
    detail: 'Antes de regresar a casa, recuerda devolver las llaves presencialmente.',
  },
];

export const HOUSE_RULES = [
  { label: 'Check-in', value: 'Entre las 15:00 y las 22:00 hrs' },
  { label: 'Check-out', value: 'Antes de las 12:00 hrs' },
  { label: 'Capacidad', value: 'Máximo 2 viajeros' },
  {
    label: 'Requisitos de ingreso',
    value:
      'Por normativa legal, es obligatorio registrar la identidad de todos los huéspedes mediante cédula de identidad o pasaporte vigente antes o al momento del check-in.',
  },
  { label: 'Ambiente', value: 'Tranquilidad y naturaleza' },
];

export const CANCELLATION_RULES = [
  {
    window: '5 días o más antes de la llegada',
    refund: '100% de devolución del abono',
    note: 'Si surge un imprevisto y nos avisas con anticipación, reembolsamos la totalidad de tu transferencia.',
  },
  {
    window: 'Dentro de los 5 días previos',
    refund: '50% de devolución del abono',
    note: 'El Refugio retiene el 50% restante por los días en que la cabaña estuvo bloqueada.',
  },
];

export const HORCON_SPOTS: CoastalSpot[] = [
  {
    id: 'mirador',
    number: '01',
    name: 'Mirador Ensenada del Fraile',
    category: 'miradores',
    categoryLabel: 'Miradores y Fauna',
    distanceNote: 'A 300 metros del refugio',
    walkDistance: '4 min a pie (300 m)',
    description:
      'El punto perfecto para maravillarse con las puestas de sol sobre el Pacífico, respirar el aire marino y, con suerte, avistar aves locales y chungungos entre las rocas. Da acceso por sendero a una íntima playa de rocas y pozas naturales.',
    image: asset('assets/repalet/mirador_ensenada.jpg'),
    imageAlt: 'Mirador y costa rocosa de Ensenada del Fraile en Horcón',
  },
  {
    id: 'el-tebo',
    number: '02',
    name: 'Playa El Tebo',
    category: 'playas',
    categoryLabel: 'Playas',
    distanceNote: 'A pasos del sector residencial',
    walkDistance: '8–10 min a pie',
    driveDistance: '2 min en auto',
    description:
      'Un imperdible de Horcón que premia la caminata. Sus arenas finas y aguas cristalinas la convierten en una de las playas más hermosas de la zona, ideal para recorrer en pareja lejos de las multitudes.',
    image: asset('assets/repalet/playa_el_tebo.jpg'),
    imageAlt: 'Playa El Tebo de arenas finas y aguas tranquilas en Horcón',
  },
  {
    id: 'cau-cau',
    number: '03',
    name: 'Playa Cau Cau',
    category: 'playas',
    categoryLabel: 'Playas',
    distanceNote: 'Acceso por sendero de bosque',
    walkDistance: '12 min a pie',
    driveDistance: '3–4 min en auto',
    description:
      'Se llega atravesando un místico sendero bajo un pequeño bosque costero que se abre paso hacia una playa tranquila y naturalmente protegida del viento.',
    image: asset('assets/repalet/playa_cau_cau.jpg'),
    imageAlt: 'Playa Cau Cau rodeada de vegetación costera en Horcón',
  },
  {
    id: 'caleta-horcon',
    number: '04',
    name: 'Caleta de Horcón',
    category: 'playas',
    categoryLabel: 'Playas',
    distanceNote: 'Centro bohemio y pesquero',
    walkDistance: '25–30 min a pie',
    driveDistance: '6 min en auto',
    description:
      'Pintoresca caleta de pescadores de la V Región con espíritu bohemio desde los años 60 y 70. Ceviches frescos, empanadas de mariscos, feria artesanal, callejuelas coloridas y el tradicional Puente de los Deseos.',
    image: asset('assets/repalet/caleta_horcon.jpg'),
    imageAlt: 'Caleta de pescadores de Horcón con botes y paisaje costero',
  },
  {
    id: 'el-claron',
    number: '05',
    name: 'Playa El Clarón y Playa Larga',
    category: 'playas',
    categoryLabel: 'Playas',
    distanceNote: 'Dirección norte desde la caleta',
    driveDistance: '7–8 min en auto',
    description:
      'Extensa franja costera junto a la Caleta de Horcón donde se practican actividades náuticas como kayak, stand up paddle y paseos en velero.',
    image: asset('assets/repalet/playa_el_claron.jpg'),
    imageAlt: 'Playa El Clarón y Playa Larga junto a la Caleta de Horcón',
  },
  {
    id: 'quirilluca',
    number: '06',
    name: 'Acantilados de Quirilluca',
    category: 'miradores',
    categoryLabel: 'Miradores y Fauna',
    distanceNote: 'Entre Horcón y Maitencillo',
    driveDistance: '10–12 min en auto',
    description:
      'Santuario natural de acantilados, playas y humedales con alto valor paleontológico. Refugio y nidificación para más de 8.000 aves, además de avistamiento de chungungos, zorros y lobos marinos.',
    image: asset('assets/repalet/playa_quirilluca.jpg'),
    imageAlt: 'Acantilados y santuario costero de Quirilluca en Puchuncaví',
  },
  {
    id: 'playa-luna',
    number: '07',
    name: 'Playa Luna',
    category: 'playas',
    categoryLabel: 'Playas',
    distanceNote: 'Rodeada de acantilados vírgenes',
    driveDistance: '12 min en auto',
    description:
      'La única playa nudista oficial de Chile, enmarcada por imponentes acantilados y naturaleza completamente virgen. Un rincón de respeto, libertad y desconexión absoluta.',
    image: asset('assets/repalet/playa_luna.jpg'),
    imageAlt: 'Playa Luna rodeada de acantilados naturales en Horcón',
  },
  {
    id: 'eventos-el-tebo',
    number: '08',
    name: 'Centro de Eventos El Tebo',
    category: 'eventos',
    categoryLabel: 'Eventos y Cultura',
    distanceNote: 'A minutos del refugio · Sector El Tebo',
    walkDistance: '8 min a pie',
    driveDistance: '2 min en auto',
    description:
      'Reconocido complejo turístico y centro de eventos frente al mar, muy elegido para matrimonios en la playa, celebraciones y encuentros. Destaca por su arquitectura costera rústica y su entorno directo hacia las arenas blancas de Playa El Tebo.',
    image: asset('assets/aistudio/club_el_tebo_5358fd27.jpg'),
    imageAlt: 'Centro de Eventos El Tebo con mesas al aire libre frente al mar en Horcón',
  },
  {
    id: 'punta-los-lunes',
    number: '09',
    name: 'Centro de Eventos Punta Los Lunes',
    category: 'eventos',
    categoryLabel: 'Eventos y Cultura',
    distanceNote: 'A minutos del refugio · Costa de Horcón',
    driveDistance: '5–7 min en auto',
    description:
      'Locación natural al aire libre rodeada de cipreses centenarios, vegetación costera y vista panorámica al Océano Pacífico. Un escenario emblemático para matrimonios y ceremonias frente al mar, ideal si buscas hospedaje tranquilo a pocos minutos de la fiesta.',
    image: asset('assets/aistudio/punta_los_lunes_e1e58fd9.jpg'),
    imageAlt: 'Centro de Eventos Punta Los Lunes con jardín frente al mar y cipreses en Horcón',
  },
];
