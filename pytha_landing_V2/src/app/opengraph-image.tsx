import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PYTHA Romania - Software CAD/CAM pentru mobilier';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b33 50%, #8a1820 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            background: '#fff',
            color: '#8a1820',
            padding: '12px 32px',
            borderRadius: '30px',
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '24px',
          }}
        >
          PYTHA Romania
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: '48px',
            fontWeight: 700,
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.2,
          }}
        >
          Software CAD/CAM complet pentru mobilier
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '22px',
            marginTop: '16px',
          }}
        >
          30.000+ ateliere din intreaga lume
        </div>
      </div>
    ),
    { ...size },
  );
}
