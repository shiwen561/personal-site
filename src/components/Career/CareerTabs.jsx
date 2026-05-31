const tabs = [
  {
    key: 'aigc',
    label: 'AIGC 设计师',
    subtitle: 'AI-Generated Content',
    color: 'var(--accent-purple)',
  },
  {
    key: 'finance',
    label: 'AI 财务数字化',
    subtitle: 'Finance Digitalization',
    color: 'var(--accent-green)',
  },
  {
    key: 'pm',
    label: 'AI 产品经理',
    subtitle: 'AI Product Manager',
    color: 'var(--accent-blue)',
  },
];

export default function CareerTabs({ active, onChange }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 48,
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              padding: '16px 28px',
              borderRadius: 'var(--radius-md)',
              border: isActive ? `1px solid ${tab.color}` : '1px solid var(--border)',
              background: isActive ? `${tab.color}14` : 'var(--bg-card)',
              color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: isActive ? 600 : 400,
              transition: 'var(--transition)',
              textAlign: 'center',
              minWidth: 160,
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.target.style.borderColor = tab.color;
                e.target.style.color = 'var(--text-primary)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.color = 'var(--text-muted)';
              }
            }}
          >
            <div>{tab.label}</div>
            <div style={{ fontSize: '0.75rem', marginTop: 2, opacity: 0.7 }}>
              {tab.subtitle}
            </div>
          </button>
        );
      })}
    </div>
  );
}
