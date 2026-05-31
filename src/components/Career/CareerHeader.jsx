export default function CareerHeader({ title, subtitle, tagline, accentColor }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 48 }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '4px 16px',
          borderRadius: 'var(--radius-xl)',
          background: `${accentColor}12`,
          border: `1px solid ${accentColor}30`,
          marginBottom: 16,
          fontSize: '0.85rem',
          color: accentColor,
          fontWeight: 500,
        }}
      >
        {subtitle}
      </div>
      <h2 style={{ marginBottom: 12 }}>{title}</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
        {tagline}
      </p>
    </div>
  );
}
