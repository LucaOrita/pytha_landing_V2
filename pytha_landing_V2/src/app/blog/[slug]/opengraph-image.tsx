import { ImageResponse } from 'next/og';

import { getPostBySlug } from '@/lib/blog';

export const alt = 'PYTHA Romania Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title || 'PYTHA Romania Blog';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '60px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b33 50%, #8a1820 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              background: '#fff',
              color: '#8a1820',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            PYTHA Romania
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>Blog</div>
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '18px',
            marginTop: '16px',
          }}
        >
          pytha3d.ro/blog
        </div>
      </div>
    ),
    { ...size },
  );
}
