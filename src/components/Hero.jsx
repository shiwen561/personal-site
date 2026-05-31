import { personalInfo } from '../data/common';

const careerDirections = [
  {
    key: 'aigc',
    label: 'AIGC 设计师',
    desc: '工业化 AI 视觉管线，稳定商业交付',
    color: 'var(--accent-purple)',
  },
  {
    key: 'finance',
    label: 'AI 财务数字化',
    desc: '会计 × AI 工程化，零误差运行',
    color: 'var(--accent-green)',
  },
  {
    key: 'pm',
    label: 'AI 产品经理',
    desc: '极速 MVP，Agent 架构全闭环',
    color: 'var(--accent-blue)',
  },
];

export default function Hero() {
  const scrollTo = (key) => {
    window.location.hash = key;
  };

  return (
    <section
      style={{
        position: 'relative',
        padding: '140px 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 背景光晕 */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* 头像占位 */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: '50%',
          background: 'var(--accent-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: 32,
          boxShadow: 'var(--glow-purple)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {personalInfo.name.charAt(0)}
      </div>

      <h1 style={{ marginBottom: 12, position: 'relative', zIndex: 1 }}>
        {personalInfo.name}
      </h1>

      <p
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: 'var(--text-secondary)',
          marginBottom: 8,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {personalInfo.currentRole}
      </p>

      <p
        className="gradient-text"
        style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          fontWeight: 500,
          marginBottom: 32,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {personalInfo.tagline}
      </p>

      <p
        style={{
          maxWidth: 640,
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          lineHeight: 1.8,
          marginBottom: 48,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {personalInfo.bio}
      </p>

      {/* 方向快速入口 */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {careerDirections.map((dir) => (
          <button
            key={dir.key}
            onClick={() => scrollTo(dir.key)}
            style={{
              padding: '14px 28px',
              borderRadius: 'var(--radius-md)',
              border: `1px solid ${dir.color}40`,
              background: `${dir.color}10`,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'var(--transition)',
              textAlign: 'left',
              minWidth: 180,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = `${dir.color}20`;
              e.target.style.borderColor = dir.color;
              e.target.style.boxShadow = `0 0 20px ${dir.color}20`;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = `${dir.color}10`;
              e.target.style.borderColor = `${dir.color}40`;
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{dir.label}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {dir.desc}
            </div>
          </button>
        ))}
      </div>

      {/* 向下箭头 */}
      <div
        style={{
          marginTop: 64,
          animation: 'bounce 2s infinite',
          color: 'var(--text-muted)',
          fontSize: '1.5rem',
        }}
      >
        ↓
      </div>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(8px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
