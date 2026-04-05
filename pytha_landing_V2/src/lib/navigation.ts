export interface NavSubItem {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  subitems?: {
    modules: NavSubItem[];
    addons: NavSubItem[];
    industries: NavSubItem[];
  };
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Acasa', href: '/' },
  {
    label: 'Solutii',
    href: '/module-pytha',
    subitems: {
      modules: [
        { label: 'Modeler Basic', href: '/module-pytha#modeler-basic', description: 'Modelare 2D/3D solida' },
        { label: 'Generators & Plug-Ins', href: '/module-pytha#generators', description: 'Generare automata mobilier' },
        { label: 'Workshop', href: '/module-pytha#workshop', description: 'Gaurire, frezare, cant, CNC' },
        { label: 'Parts List', href: '/module-pytha#parts-list', description: 'Liste piese automate' },
        { label: 'Parametrics', href: '/module-pytha#parametrics', description: 'Proiectare parametrica' },
        { label: 'Library', href: '/module-pytha#library', description: '30.000+ obiecte 3D' },
        { label: 'Freeform', href: '/module-pytha#freeform', description: 'Suprafete libere si organice' },
        { label: 'Nesting', href: '/module-pytha#nesting', description: 'Optimizare debitare' },
        { label: 'CAM Interface', href: '/module-pytha#cam-interface', description: 'Export G-code, MPR, CIX' },
        { label: 'RadioLab', href: '/module-pytha#radiolab', description: 'Randare fotorealista' },
      ],
      addons: [
        { label: 'CadBid', href: '/module-pytha#cadbid', description: 'Licitatii si ofertare rapida' },
      ],
      industries: [
        { label: 'Mobilier la Comanda', href: '/solutii/mobilier-la-comanda', description: 'Flux complet pentru ateliere' },
        { label: 'Tâmplărie Comercială', href: '/solutii/tamplarie-comerciala', description: 'Volume mari, automatizare totala' },
        { label: 'Design Interior', href: '/solutii/design-interior', description: 'Vizualizare si randare' },
      ],
    },
  },
  { label: 'Preturi', href: '/preturi' },
  { label: 'Despre noi', href: '/despre-noi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Asistență', href: '/asistenta-tehnica' },
];

export const FOOTER_LINKS = {
  solutii: [
    { label: 'Mobilier la Comanda', href: '/solutii/mobilier-la-comanda' },
    { label: 'Tâmplărie Comercială', href: '/solutii/tamplarie-comerciala' },
    { label: 'Design Interior', href: '/solutii/design-interior' },
    { label: 'Toate modulele', href: '/module-pytha' },
    { label: 'Preturi', href: '/preturi' },
  ],
  companie: [
    { label: 'Despre noi', href: '/despre-noi' },
    { label: 'AdLine Industries', href: '/despre-noi#adline' },
    { label: 'Blog', href: '/blog' },
  ],
  suport: [
    { label: 'Asistenta tehnica', href: '/asistenta-tehnica' },
    // { label: 'Documentatie', href: '/docs' }, // TODO: reactivare docs
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Termeni si conditii', href: '/termeni-si-conditii' },
    { label: 'Politica de confidentialitate', href: '/politica-confidentialitate' },
  ],
};

// TODO: Verifica si actualizeaza URL-urile reale ale paginilor social media
export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/pytha3d.ro', icon: 'facebook' as const },
  { name: 'Instagram', href: 'https://www.instagram.com/pytha3d.ro/', icon: 'instagram' as const },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/adline-industries/', icon: 'linkedin' as const },
  { name: 'YouTube', href: 'https://www.youtube.com/@pytha3d', icon: 'youtube' as const },
];
