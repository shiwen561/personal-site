export default function CoreCompetencies({ competencies, accentColor }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h3 style={{ textAlign: 'center', marginBottom: 32 }}>核心能力</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {competencies.map((comp) => (
          <div
            key={comp.title}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 28px',
              border: '1px solid var(--border)',
              transition: 'var(--transition)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${accentColor}50`;
              e.currentTarget.style.boxShadow = `0 0 30px ${accentColor}10`;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* 顶部装饰线 */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: accentColor,
                opacity: 0.5,
              }}
            />
            <h4 style={{ marginBottom: 10, color: 'var(--text-primary)' }}>
              {comp.title}
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              {comp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
