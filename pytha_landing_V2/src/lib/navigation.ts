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
    },
  },
  { label: 'Despre noi', href: '/despre-noi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
  { label: 'Asistenta', href: '/asistenta-tehnica' },
];

export const FOOTER_LINKS = {
  solutii: [
    { label: 'Modeler Basic', href: '/module-pytha#modeler-basic' },
    { label: 'Workshop', href: '/module-pytha#workshop' },
    { label: 'Nesting', href: '/module-pytha#nesting' },
    { label: 'CAM Interface', href: '/module-pytha#cam-interface' },
    { label: 'RadioLab', href: '/module-pytha#radiolab' },
    { label: 'Toate modulele', href: '/module-pytha' },
  ],
  companie: [
    { label: 'Despre noi', href: '/despre-noi' },
    { label: 'AdLine Industries', href: '/adline-industries' },
    { label: 'Blog', href: '/blog' },
  ],
  suport: [
    { label: 'Asistenta tehnica', href: '/asistenta-tehnica' },
    { label: 'Documentatie', href: '/docs' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Termeni si conditii', href: '#' },
    { label: 'Confidentialitate', href: '#' },
  ],
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' as const },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' as const },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' as const },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' as const },
];
