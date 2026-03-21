'use client';

import { ArrowRight, Clock, MapPin, Truck, X } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface CountryInfo {
  name: string;
  zone: 'europa' | 'csi' | 'orient';
  transport: string[];
  transitTime: string;
}

const COUNTRY_DATA: Record<string, CountryInfo> = {
  // Europa UE
  DE: {
    name: 'Germania',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  FR: {
    name: 'Franța',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  IT: {
    name: 'Italia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  ES: {
    name: 'Spania',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~4-5 zile',
  },
  NL: {
    name: 'Olanda',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  BE: {
    name: 'Belgia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  PL: {
    name: 'Polonia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  HU: {
    name: 'Ungaria',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  AT: {
    name: 'Austria',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  CZ: {
    name: 'Cehia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  SK: {
    name: 'Slovacia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  BG: {
    name: 'Bulgaria',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  GR: {
    name: 'Grecia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  PT: {
    name: 'Portugalia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~5-6 zile',
  },
  SE: {
    name: 'Suedia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3-4 zile',
  },
  DK: {
    name: 'Danemarca',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~3 zile',
  },
  CH: {
    name: 'Elveția',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~2-3 zile',
  },
  HR: {
    name: 'Croația',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1-2 zile',
  },
  RS: {
    name: 'Serbia',
    zone: 'europa',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  RO: {
    name: 'România',
    zone: 'europa',
    transport: ['Bază operațiuni'],
    transitTime: 'Origine',
  },
  // CSI
  MD: {
    name: 'Moldova',
    zone: 'csi',
    transport: ['Rutier FTL/LTL'],
    transitTime: '~1 zi',
  },
  UA: {
    name: 'Ucraina',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~1-2 zile',
  },
  BY: {
    name: 'Belarus',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~2-3 zile',
  },
  RU: {
    name: 'Rusia',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~4-7 zile',
  },
  KZ: {
    name: 'Kazahstan',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~7-10 zile',
  },
  GE: {
    name: 'Georgia',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~3-4 zile',
  },
  AM: {
    name: 'Armenia',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~4-5 zile',
  },
  AZ: {
    name: 'Azerbaidjan',
    zone: 'csi',
    transport: ['Rutier extracomunitar'],
    transitTime: '~4-5 zile',
  },
  // Orient & Asia
  TR: {
    name: 'Turcia',
    zone: 'orient',
    transport: ['Rutier extracomunitar'],
    transitTime: '~2-3 zile',
  },
  IR: {
    name: 'Iran',
    zone: 'orient',
    transport: ['Rutier extracomunitar'],
    transitTime: '~5-7 zile',
  },
  AE: {
    name: 'EAU',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: 'Aerian: ~1-2 zile',
  },
  SA: {
    name: 'Arabia Saudită',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: 'Aerian: ~1-2 zile',
  },
  CN: {
    name: 'China',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: 'Aerian: ~2-3 zile / Maritim: ~25-35 zile',
  },
  IN: {
    name: 'India',
    zone: 'orient',
    transport: ['Aerian', 'Maritim'],
    transitTime: 'Aerian: ~1-2 zile',
  },
};

const ZONE_META = {
  europa: { base: '#1D9E75', hover: '#0F6E56', label: 'Europa' },
  csi: { base: '#185FA5', hover: '#0C447C', label: 'CSI & Est' },
  orient: { base: '#E8931A', hover: '#c4780f', label: 'Orient & Asia' },
} as const;

/* ------------------------------------------------------------------ */
/*  SVG country paths  (simplified / schematic)                        */
/*  viewBox 0 0 900 600 — Europe-centric Mercator-ish projection       */
/* ------------------------------------------------------------------ */

const COUNTRY_PATHS: Record<string, string> = {
  // Scandinavia
  SE: 'M420,30 L430,20 L445,25 L450,60 L455,100 L448,140 L440,160 L430,155 L425,130 L420,100 L418,60Z',
  DK: 'M400,155 L415,150 L420,160 L415,170 L405,172 L398,165Z',
  // Western Europe
  FR: 'M280,240 L310,220 L340,225 L360,235 L365,260 L370,290 L355,320 L330,335 L300,330 L280,310 L270,280 L275,255Z',
  BE: 'M315,210 L335,205 L340,215 L335,225 L315,220Z',
  NL: 'M320,190 L340,185 L345,200 L335,205 L320,205Z',
  CH: 'M345,265 L370,260 L375,275 L360,285 L345,280Z',
  // Iberian Peninsula
  ES: 'M200,320 L260,310 L300,330 L290,370 L260,390 L220,385 L195,365 L190,340Z',
  PT: 'M180,330 L200,320 L195,365 L185,370 L178,355Z',
  // Central Europe
  DE: 'M340,175 L380,170 L400,180 L405,210 L395,240 L370,250 L345,255 L330,240 L325,215 L335,195Z',
  AT: 'M375,255 L410,248 L425,255 L420,270 L395,275 L375,270Z',
  CZ: 'M385,220 L415,215 L425,230 L415,245 L390,245 L380,235Z',
  PL: 'M410,170 L460,165 L475,180 L478,210 L465,230 L430,235 L415,220 L405,195Z',
  SK: 'M425,235 L460,230 L470,240 L460,250 L430,252 L420,245Z',
  HU: 'M425,260 L465,255 L480,265 L475,285 L450,290 L425,285 L420,275Z',
  // Balkans
  HR: 'M410,280 L425,275 L440,285 L445,300 L435,315 L420,310 L408,295Z',
  RS: 'M445,295 L465,288 L475,300 L472,325 L458,335 L445,325 L440,310Z',
  BG: 'M478,310 L510,305 L525,315 L520,340 L500,348 L480,340 L475,325Z',
  GR: 'M460,345 L485,340 L500,350 L498,375 L485,400 L470,395 L460,380 L455,360Z',
  RO: 'M470,270 L510,260 L535,270 L540,295 L525,315 L500,320 L478,310 L472,290Z',
  IT: 'M350,285 L370,280 L380,300 L390,330 L400,360 L395,390 L380,400 L370,385 L365,355 L355,325 L345,300Z',
  // Eastern Europe / CSI
  UA: 'M500,210 L560,200 L600,215 L610,240 L600,270 L570,280 L540,275 L520,260 L500,240Z',
  MD: 'M535,268 L545,262 L550,275 L545,285 L535,282Z',
  BY: 'M490,170 L540,165 L555,180 L550,205 L530,215 L500,210 L485,195Z',
  RU: 'M560,50 L700,30 L780,60 L800,120 L790,180 L750,220 L700,240 L650,250 L610,240 L600,210 L560,195 L555,160 L560,120 L565,80Z',
  // Caucasus
  GE: 'M650,260 L680,255 L690,265 L680,275 L655,278 L648,270Z',
  AM: 'M680,278 L695,275 L700,285 L692,295 L680,292Z',
  AZ: 'M700,270 L720,265 L728,280 L720,295 L705,295 L698,285Z',
  // Central Asia
  KZ: 'M720,140 L820,120 L860,150 L850,200 L800,220 L750,225 L720,210 L710,180 L715,155Z',
  // Turkey & Middle East
  TR: 'M530,340 L600,330 L650,340 L660,360 L640,375 L590,380 L550,370 L530,355Z',
  IR: 'M670,360 L730,345 L760,370 L755,410 L720,430 L680,420 L665,395 L660,375Z',
  SA: 'M650,430 L720,420 L750,450 L740,500 L700,520 L660,510 L640,480 L645,450Z',
  AE: 'M740,460 L765,455 L770,470 L755,480 L740,475Z',
  // Far East (shown small, at edge)
  CN: 'M780,280 L860,260 L890,300 L880,360 L840,380 L800,370 L780,340 L775,310Z',
  IN: 'M770,400 L810,385 L835,410 L830,460 L800,490 L770,470 L760,440Z',
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DacodaEuropeMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleCountryClick = useCallback((code: string) => {
    setSelected((prev) => (prev === code ? null : code));
  }, []);

  const selectedData = selected ? COUNTRY_DATA[selected] : null;

  return (
    <section className="bg-white">
      <div className="container px-4 py-16 lg:px-6 lg:py-24">
        {/* ---------- Map + Info panel ---------- */}
        <div className="relative mx-auto max-w-5xl">
          {/* SVG Map */}
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-[var(--dacoda-light)] p-4 lg:p-6">
            <svg
              viewBox="0 0 900 540"
              className="mx-auto w-full"
              style={{ minWidth: 600 }}
              role="img"
              aria-label="Hartă interactivă — destinații DACODA"
            >
              {/* Water background */}
              <rect
                x="0"
                y="0"
                width="900"
                height="540"
                rx="12"
                fill="#E8EDF2"
              />

              {/* Romania highlight pulse */}
              {COUNTRY_PATHS.RO && (
                <path
                  d={COUNTRY_PATHS.RO}
                  fill="var(--dacoda-orange)"
                  opacity="0.2"
                  className="animate-pulse"
                />
              )}

              {/* Country shapes */}
              {Object.entries(COUNTRY_PATHS).map(([code, d]) => {
                const info = COUNTRY_DATA[code];
                if (!info) return null;
                const zone = ZONE_META[info.zone];
                const isHovered = hovered === code;
                const isSelected = selected === code;
                const isRomania = code === 'RO';

                return (
                  <path
                    key={code}
                    d={d}
                    fill={
                      isRomania
                        ? 'var(--dacoda-orange)'
                        : isSelected || isHovered
                          ? zone.hover
                          : zone.base
                    }
                    stroke="#fff"
                    strokeWidth={isSelected ? 2.5 : 1.2}
                    className="cursor-pointer transition-colors duration-150"
                    onMouseEnter={() => setHovered(code)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => handleCountryClick(code)}
                    role="button"
                    tabIndex={0}
                    aria-label={info.name}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ')
                        handleCountryClick(code);
                    }}
                  />
                );
              })}

              {/* Country labels (abbreviated) */}
              {Object.entries(COUNTRY_PATHS).map(([code]) => {
                const info = COUNTRY_DATA[code];
                if (!info) return null;
                // Compute rough center of bounding box from path
                const path = COUNTRY_PATHS[code];
                const coords = path.match(/[\d.]+/g)?.map(Number) ?? [];
                let cx = 0,
                  cy = 0,
                  n = 0;
                for (let i = 0; i < coords.length - 1; i += 2) {
                  cx += coords[i];
                  cy += coords[i + 1];
                  n++;
                }
                if (n === 0) return null;
                cx /= n;
                cy /= n;
                return (
                  <text
                    key={`label-${code}`}
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="10"
                    fontWeight="600"
                    fill="#fff"
                    pointerEvents="none"
                    className="select-none"
                  >
                    {code}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Selected country panel */}
          {selectedData && selected && (
            <div className="absolute right-4 bottom-4 z-10 w-72 rounded-xl border border-gray-200 bg-white p-5 shadow-lg lg:right-8 lg:bottom-8">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                aria-label="Închide"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="text-dacoda-navy mb-1 text-lg font-bold">
                {selectedData.name}
              </h3>

              <span
                className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                style={{ backgroundColor: ZONE_META[selectedData.zone].base }}
              >
                {ZONE_META[selectedData.zone].label}
              </span>

              <div className="text-dacoda-gray space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Truck className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{selectedData.transport.join(', ')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{selectedData.transitTime}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-dacoda-orange hover:bg-dacoda-orange-dark mt-4 flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Cere ofertă pentru {selectedData.name}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* ---------- Legend ---------- */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-6">
          {(
            Object.entries(ZONE_META) as [
              keyof typeof ZONE_META,
              (typeof ZONE_META)[keyof typeof ZONE_META],
            ][]
          ).map(([key, zone]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <span
                className="inline-block h-3.5 w-3.5 rounded-sm"
                style={{ backgroundColor: zone.base }}
              />
              <span className="text-dacoda-gray font-medium">
                {zone.label}
                {key === 'europa' && ' — transport rutier direct'}
                {key === 'csi' && ' — transport extracomunitar'}
                {key === 'orient' && ' — rutier + aerian + maritim'}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-sm">
            <span
              className="inline-block h-3.5 w-3.5 rounded-sm"
              style={{ backgroundColor: 'var(--dacoda-orange)' }}
            />
            <span className="text-dacoda-gray font-medium">
              România — bază operațiuni
            </span>
          </div>
        </div>

        {/* ---------- Country list by zone ---------- */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {(
            Object.entries(ZONE_META) as [
              keyof typeof ZONE_META,
              (typeof ZONE_META)[keyof typeof ZONE_META],
            ][]
          ).map(([zoneKey, zone]) => {
            const countries = Object.entries(COUNTRY_DATA).filter(
              ([, c]) => c.zone === zoneKey && c.name !== 'România',
            );
            return (
              <div key={zoneKey}>
                <h3
                  className="mb-4 flex items-center gap-2 text-lg font-bold"
                  style={{ color: zone.base }}
                >
                  <MapPin className="h-5 w-5" />
                  {zone.label}
                </h3>
                <ul className="space-y-1.5">
                  {countries.map(([code, c]) => (
                    <li key={code}>
                      <button
                        onClick={() => {
                          setSelected(code);
                          // Scroll map into view on mobile
                          document
                            .querySelector('svg[role="img"]')
                            ?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'center',
                            });
                        }}
                        className="text-dacoda-gray hover:text-dacoda-navy w-full text-left text-sm transition-colors"
                      >
                        <span className="font-medium">{c.name}</span>
                        <span className="ml-1 text-xs opacity-60">
                          ({c.transitTime})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
