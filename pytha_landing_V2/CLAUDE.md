# CLAUDE.md — Regulile Proiectului pytha3d.ro

## REGULA ZERO
Inainte de ORICE actiune (creare fisier, editare, styling, continut), CITESTE si RESPECTA:
1. RULES.md — regulile de baza ale proiectului
2. STYLE_GUIDE.md — design system-ul complet (tokens, culori, tipografie, componente)
3. PERFORMANCE_STANDARDS.md — standarde Lighthouse 90+, Server Components, a11y

## ROLURI
- **Senior Developer (TU)**: Arhitectura, implementare, code review, testing. Esti responsabil de calitatea finala.
- **Senior Marketing Copywriter** (sub-agent): Cand ai nevoie de copy pentru sectiuni, CTA-uri, meta descriptions, headlines — gandeste ca un copywriter senior specializat in B2B industrial/tech pentru piata romaneasca. Tonul: profesional, empatic, orientat pe beneficii, limba romana. Buyer persona: proprietar atelier mobila, 28-50 ani, din Romania.
- **SEO Specialist** (sub-agent): Cand ai nevoie de meta tags, structured data, heading hierarchy, URL structure, keyword placement — gandeste ca un SEO specialist. Keywords principale: "software CAD 3D mobilier", "PYTHA Romania", "proiectare mobilier 3D", "digitalizare atelier mobila", "CAD CAM mobilier".

## TECH STACK
- Next.js 16 (App Router, RSC enabled)
- Tailwind CSS v4 (via @tailwindcss/postcss)
- shadcn/ui (new-york style, lucide icons)
- Framer Motion (motion/react) — DOAR pentru animatii complexe
- TypeScript Strict
- Fonturi: Montserrat (titluri, navbar, headings) + Poppins (body, paragrafe, butoane) — Google Fonts via next/font

## IDENTITATE VIZUALA

Culorile brandului PYTHA Romania / AdLine Industries:

main (rosu):
  50:#fff1f2, 100:#ffe0e2, 200:#ffc7cb, 300:#ffa0a7, 400:#ff6974,
  500:#f93a47, 600:#e71b29, 700:#c2131f, 800:#a1131d, 900:#8a1820, 950:#49060b

secondary (cyan):
  500:#10a5ca, 600:#118ab2, 700:#146a8a

background: #f8f8f8

## ASSETS

Toate fisierele disponibile in public/:

- public/bg/ — video-uri hero si background (bg-hero-1.mp4, base.mp4, cam.mp4, freeform.mp4, generator.mp4, nesting.mp4, workshop.mp4, etc.) + SVG decorative
- public/images/ — logo-uri (pytha-logo.png, adline-logo-full.jpg, logo-adline-min.png, pytha-theoram-logo.png), screenshots (hero-screenshot.webp, demo.webp), noise.webp, icon.png, fotografii echipa (it_guy.jpeg, it_pytha.jpeg, it_support.jpeg)
- public/images/home/ — imagini sectiuni homepage (section1/, section2/, section3/)
- public/images/despre/ — imagini pagina despre noi
- public/images/adlineSection/ — imagini pagina AdLine
- public/images/homepage/ — imagini suplimentare homepage
- public/icons/ — social media SVG (facebook, instagram, linkedin, youtube)
- public/videos/ — video-uri per modul PYTHA (CAM Interface, Generators, Workshop, Nesting, Freeform, Parametric, Biblioteca, Parts List)

## SEO
Keywords centralizate in: src/lib/seo-keywords.ts
Sitemap: src/app/sitemap.ts (auto-generat)
Robots: src/app/robots.ts

## STRUCTURA PAGINILOR
1. / (Acasa — 5 sectiuni: Hero, Stats, Features, Testimonials, CTA)
2. /despre-noi (Despre PYTHA Lab + AdLine Industries, unificate)
3. /module-pytha (Toate modulele PYTHA + CadBid)
4. /preturi (3 pachete: Starter, Profesional, Enterprise + tabel module)
5. /blog (Blog SEO — 8 articole)
6. /asistenta-tehnica (Suport tehnic + pricing service/training + FAQ)
7. /contact (Formular contact + harta + date contact)
8. /solicita-prezentare (Formular lead qualification 2 coloane)
9. /solutii/mobilier-la-comanda (Industrie — mobilier la comanda)
10. /solutii/tamplarie-comerciala (Industrie — tamplarie comerciala)
11. /solutii/design-interior (Industrie — design interior)
12. /docs (Documentatie Fumadocs — 6 pagini MDX)
13. /termeni-si-conditii (Pagina legala)
14. /politica-confidentialitate (Pagina legala GDPR)

Redirects (301):
- /adline-industries → /despre-noi#adline
- /solicita-oferta → /solicita-prezentare

## REGULI DE COPY
- Limba: Romana
- Ton: Profesional dar prietenos, empatic, orientat pe beneficii
- CTA-uri directe: "Solicita demo gratuit", "Programeaza o prezentare", "Cere oferta"
- Buyer Persona: Antreprenor productie mobila, 28-50 ani, Romania

## CONVENTII COD
- Server Components by default, 'use client' DOAR cand e necesar
- CSS animations pentru fade/slide simple, Framer Motion doar pt complex
- Dynamic imports pentru componente below-the-fold
- Fiecare commit trebuie sa treaca build fara erori

## DATE CONTACT ADLINE INDUSTRIES
- Telefon: +40 742 065 893, +40 742 065 376
- Email: pytha@adlineindustries.ro
- Adresa: Bulevardul Metalurgiei 99-99B, Bucuresti 041832
- Program: Luni-Vineri 09:00-17:00

## PRETURI REFERINTA (EUR, fara TVA)
- Pachet de baza: 4950 EUR (sau 99 EUR/luna)
- Workshop: 2450 EUR (55 EUR/luna)
- CAM Interface: 1950 EUR (44 EUR/luna)
- Lista piese: 1290 EUR (29 EUR/luna)
- Generatoare & Plug-ins: 1150 EUR (26 EUR/luna)
- Nesting: 1100 EUR (25 EUR/luna)
- RadioLab: 980 EUR (42 EUR/luna)
- Biblioteci: 820 EUR (achizitie unica)
- Parametrizare: 640 EUR (14 EUR/luna)
- Freeform: 590 EUR (13 EUR/luna)
- Acord service: 840 EUR/an sau 2140 EUR/3 ani
- Training individual: 125 EUR/ora online sau 920 EUR/zi
