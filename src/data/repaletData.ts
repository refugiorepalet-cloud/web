const asset = (relativePath: string) =>
  `${import.meta.env.BASE_URL}${relativePath.replace(/^\/+/, '')}`;

export interface CabinSpace {
  id: 'exterior' | 'sala' | 'cocina' | 'comedor' | 'habitacion' | 'bano' | 'patio' | 'estacionamiento';
  label: string;
  detail: string;
  image?: string;
  imageAlt?: string;
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
  category: 'playas' | 'miradores' | 'cultura';
  categoryLabel: string;
  distanceNote: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const IMAGES = {
  logo: asset('assets/aistudio/logo_transp_45a8aadc.png'),
  hero: asset('assets/aistudio/image_727f47dd.png'),
  colibri: asset('assets/aistudio/FOT_WEB_REF_REP_colibri_9003df60.webp'),
  chercan: asset('assets/aistudio/FOT_WEB_REF_REP_chercan_bc3fa86d.webp'),
  horconMain: asset('assets/aistudio/playa_quirilluca_d73911a2.jpg'),
};

export const CONTACT = {
  hosts: 'Georgina y Claudio',
  location: 'Comunidad Ensenada del Fraile, Horcón, Puchuncaví, Chile',
  whatsappPrimary: 'https://wa.me/56982067917',
  phonePrimary: '+56 9 8206 7917',
  email: 'repalet@gmail.com',
  instagramUrl: 'https://www.instagram.com/refugiorepalet/',
  instagramHandle: '@refugiorepalet',
};

// Coordenadas referenciales del sector (Comunidad Ensenada del Fraile, entre Cau Cau y El Tebo).
// Puedes actualizar lat y lng si deseas ajustar la posición exacta del marcador.
export const LOCATION_MAP = {
  sectorName: 'Comunidad Ensenada del Fraile, Horcón',
  lat: -32.718,
  lng: -71.499,
  embedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-71.5150%2C-32.7320%2C-71.4720%2C-32.7000&layer=mapnik&marker=-32.7180%2C-71.4990',
  openStreetMapUrl:
    'https://www.openstreetmap.org/?mlat=-32.7180&mlon=-71.4990#map=15/-32.7180/-71.4990',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=-32.7180,-71.4990',
};

export const PRICING = {
  nightlyRateClp: 65000,
  minNights: 2,
  maxGuests: 2,
  depositPercentage: 50,
  airbnbRating: '4,99',
  airbnbYear: '2026',
};

export const CABINS: Cabin[] = [
  {
    id: 'colibri',
    name: 'Cabaña Colibrí',
    tagline: 'Luz natural, vista verde y descanso pensado para dos',
    description:
      'Acogedora casa de huéspedes rústica diseñada especialmente para parejas que buscan desconectarse de la rutina. Cuenta con amplio patio, entorno natural privilegiado y ubicación estratégica cerca de los centros de eventos El Tebo y Punta Los Lunes.',
    spaces: [
      {
        id: 'exterior',
        label: 'Vista exterior',
        detail: 'Fachada en madera rústica, balcón superior privado y acceso rodeado de jardín.',
        image: IMAGES.colibri,
        imageAlt: 'Vista exterior de Cabaña Colibrí rodeada de jardín verde en Refugio Repalet, Horcón',
      },
      {
        id: 'sala',
        label: 'Sala',
        detail: 'Espacio de estar luminoso con sillón, cortinas y vista al entorno natural.',
      },
      {
        id: 'cocina',
        label: 'Cocina equipada',
        detail: 'Mini nevera, microondas, hervidor, tostador, batería de cocina y menaje para 2.',
      },
      {
        id: 'comedor',
        label: 'Comedor',
        detail: 'Mesa comedor íntima integrada a la cocina y sala para desayunos y cenas.',
      },
      {
        id: 'habitacion',
        label: 'Habitación',
        detail: 'Cama de dos plazas, armario, calefactor portátil, ropa de cama y balcón privado.',
      },
      {
        id: 'bano',
        label: 'Baño privado',
        detail: 'Shower door con ducha teléfono, agua caliente con calefont automático y accesorios.',
      },
      {
        id: 'patio',
        label: 'Patio amplio',
        detail: 'Área exterior con hamaca, lugar para fogata y acceso hacia senderos y playa.',
      },
      {
        id: 'estacionamiento',
        label: 'Estacionamiento',
        detail: 'Estacionamiento privado dentro del recinto para mayor comodidad y seguridad.',
      },
    ],
    capacity: 'Máximo 2 huéspedes',
    image: IMAGES.colibri,
    imageAlt: 'Vista exterior de Cabaña Colibrí rodeada de jardín verde en Refugio Repalet, Horcón',
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
        id: 'sala',
        label: 'Sala',
        detail: 'Ambiente acogedor con sillón, luz cálida y cortinas para descansar sin apuros.',
      },
      {
        id: 'cocina',
        label: 'Cocina equipada',
        detail: 'Mini nevera, microondas, hervidor, tostador, batería de cocina y menaje para 2.',
      },
      {
        id: 'comedor',
        label: 'Comedor',
        detail: 'Mesa comedor funcional para compartir tranquilamente en la cabaña.',
      },
      {
        id: 'habitacion',
        label: 'Habitación',
        detail: 'Cama de dos plazas, armario, calefactor portátil, ropa de cama y balcón privado.',
      },
      {
        id: 'bano',
        label: 'Baño privado',
        detail: 'Shower door con ducha teléfono, agua caliente con calefont automático y accesorios.',
      },
      {
        id: 'patio',
        label: 'Patio privado',
        detail: 'Entorno natural con sector para hacer fogata, hamaca y tranquilidad costera.',
      },
      {
        id: 'estacionamiento',
        label: 'Estacionamiento',
        detail: 'Estacionamiento privado dentro del predio para tu vehículo durante toda la estadía.',
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
    detail: 'Te recibimos personalmente en Horcón para mostrarte la cabaña y darte la bienvenida al refugio.',
  },
  {
    number: '03',
    title: 'Consejos y alianzas locales',
    detail: 'Recomendaciones de playas secretas, senderos, observación de aves y beneficios con gastronomía del sector.',
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

export const PRACTICAL_CARE_NOTES = [
  { label: 'Reciclaje', detail: 'Separar residuos en los contenedores habilitados' },
  { label: 'Calefont', detail: 'Sistema automático de agua caliente' },
  { label: 'Agua', detail: 'Red local no apta para consumo directo (agua no potable)' },
  { label: 'Energía', detail: 'Agradeceremos apagar las luces de los espacios que no estén utilizando' },
];

export const HOUSE_RULES = [
  { label: 'Check-in', value: 'Entre las 15:00 y las 22:00 hrs' },
  { label: 'Check-out', value: 'Antes de las 12:00 hrs' },
  { label: 'Capacidad', value: 'Exclusivo para máximo 2 viajeros' },
  {
    label: 'Requisito de ingreso',
    value:
      'Por normativa legal, es obligatorio registrar la identidad de todos los huéspedes mediante cédula de identidad o pasaporte vigente antes o al momento del check-in.',
  },
  { label: 'Mascotas', value: 'No se admiten mascotas para cuidar el descanso de todos' },
  { label: 'Ambiente', value: 'Entorno de paz y naturaleza; no se permiten fiestas ni eventos' },
  { label: 'Fumadores', value: 'Áreas habilitadas exclusivamente al aire libre' },
  { label: 'Energía', value: 'Agradeceremos apagar las luces de los espacios que no estén utilizando' },
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
    description:
      'Se llega atravesando un místico sendero bajo un pequeño bosque costero que se abre paso hacia una playa tranquila y naturalmente protegida del viento.',
    image: asset('assets/repalet/playa_cau_cau.jpg'),
    imageAlt: 'Playa Cau Cau rodeada de vegetación costera en Horcón',
  },
  {
    id: 'caleta-horcon',
    number: '04',
    name: 'Caleta de Horcón',
    category: 'cultura',
    categoryLabel: 'Caleta y Cultura',
    distanceNote: 'Centro bohemio y pesquero',
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
    description:
      'La única playa nudista oficial de Chile, enmarcada por imponentes acantilados y naturaleza completamente virgen. Un rincón de respeto, libertad y desconexión absoluta.',
    image: asset('assets/repalet/playa_luna.jpg'),
    imageAlt: 'Playa Luna rodeada de acantilados naturales en Horcón',
  },
];
