import { education, certificates, coreSkills } from '../data/common';

export default function About() {
  const categories = [...new Set(coreSkills.map((s) => s.category))];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2>
            <span className="gradient-text">关于我</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>About Me</p>
        </div>

        {/* 教育背景 */}
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 36px',
            marginBottom: 24,
            border: '1px solid var(--border)',
          }}
        >
          <h4 style={{ marginBottom: 12, color: 'var(--accent-purple)' }}>
            📚 教育背景
          </h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {education.school} · {education.major}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {education.period}
            </span>
          </div>
        </div>

        {/* 证书 */}
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 36px',
            marginBottom: 24,
            border: '1px solid var(--border)',
          }}
        >
          <h4 style={{ marginBottom: 16, color: 'var(--accent-purple)' }}>
            📜 证书与资质
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {certificates.map((cert) => (
              <span
                key={cert.name}
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {cert.name}
              </span>
            ))}
          </div>
        </div>

        {/* 技能标签云 */}
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 36px',
            border: '1px solid var(--border)',
          }}
        >
          <h4 style={{ marginBottom: 16, color: 'var(--accent-purple)' }}>
            🛠 技能矩阵
          </h4>
          {categories.map((cat) => (
            <div key={cat} style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 8,
                }}
              >
                {cat}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {coreSkills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-tag"
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(168,85,247,0.08)',
                        border: '1px solid rgba(168,85,247,0.2)',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition)',
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
