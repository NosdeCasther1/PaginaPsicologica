import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Selah — Terapia Online Profesional';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f172a 0%, #0d3b4f 60%, #0e7490 100%)',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'rgba(20, 184, 166, 0.15)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'rgba(20, 184, 166, 0.1)',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(20, 184, 166, 0.2)',
            border: '1px solid rgba(20, 184, 166, 0.4)',
            borderRadius: '999px',
            padding: '8px 24px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#5eead4', fontSize: 18, fontWeight: 600 }}>
            Psicología Online · Guatemala
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Selah
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: 760,
              lineHeight: 1.4,
            }}
          >
            Terapia psicológica profesional 100% online
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #14b8a6, #0ea5e9)',
            borderRadius: 4,
            margin: '40px 0',
            display: 'flex',
          }}
        />

        {/* Services */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Terapia Individual', 'Terapia de Pareja', 'Terapia Infantil'].map(
            (service) => (
              <div
                key={service}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '12px 20px',
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#14b8a6',
                    display: 'flex',
                  }}
                />
                <span style={{ color: '#e2e8f0', fontSize: 18 }}>{service}</span>
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
