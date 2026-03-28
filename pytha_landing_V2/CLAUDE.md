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
- Next.js 15 (App Router, RSC enabled)
- Tailwind CSS v4 (via @tailwindcss/postcss)
- shadcn/ui (new-york style, lucide icons)
- Framer Motion (motion/react) — DOAR pentru animatii complexe
- TypeScript Strict
- Fonturi: Inter + Azeret Mono (Google Fonts via next/font)

## STRUCTURA PAGINILOR
1. / (Acasa)
2. /despre-noi (Despre AdLine Industries & PYTHA Romania)
3. /module-pytha (Toate modulele PYTHA + CadBid)
4. /blog (Blog SEO cu articole MDX)
5. /asistenta-tehnica (Suport tehnic)
6. /contact (Formular contact + harta)
7. /adline-industries (Pagina partener AdLine)
8. /solicita-oferta (CTA formular oferta)
9. /solicita-prezentare (CTA formular prezentare/demo)

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
