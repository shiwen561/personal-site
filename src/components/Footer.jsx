import { personalInfo } from '../data/common';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '48px 24px 32px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          className="gradient-text"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          {personalInfo.name}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 24,
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
          }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 18px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--accent-purple)';
              e.target.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.color = 'var(--text-secondary)';
            }}
          >
            ✉ {personalInfo.email}
          </a>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 18px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            📱 {personalInfo.phone}
          </span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
