export default function ProjectCard({ project, accentColor, index }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px 32px',
        border: '1px solid var(--border)',
        transition: 'var(--transition)',
        marginBottom: 20,
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accentColor}40`;
        e.currentTarget.style.boxShadow = `0 4px 24px ${accentColor}08`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* 项目编号 */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 24,
          fontSize: '3rem',
          fontWeight: 800,
          color: `${accentColor}10`,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <h4
        style={{
          marginBottom: 12,
          color: 'var(--text-primary)',
          fontSize: '1.15rem',
          paddingRight: 64,
        }}
      >
        {project.name}
      </h4>

      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.92rem',
          lineHeight: 1.75,
          marginBottom: 20,
          paddingRight: 40,
        }}
      >
        {project.summary}
      </p>

      {/* 亮点 */}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {project.highlights.map((h, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
            }}
          >
            <span
              style={{
                color: accentColor,
                fontWeight: 600,
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              ▸
            </span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
