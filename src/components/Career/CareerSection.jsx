import { useState, useEffect } from 'react';
import CareerTabs from './CareerTabs';
import CareerHeader from './CareerHeader';
import CoreCompetencies from './CoreCompetencies';
import ProjectList from './ProjectList';
import { aigcData } from '../../data/aigc';
import { financeData } from '../../data/finance';
import { pmData } from '../../data/pm';

const careerDataMap = { aigc: aigcData, finance: financeData, pm: pmData };

export default function CareerSection() {
  const [active, setActive] = useState('aigc');

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (careerDataMap[hash]) setActive(hash);
    };
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleChange = (key) => {
    window.location.hash = key;
  };

  const data = careerDataMap[active];

  return (
    <section id="career" className="section">
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2>
            <span className="gradient-text">职业方向</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>Career Paths</p>
        </div>

        <CareerTabs active={active} onChange={handleChange} />

        {/* 动态内容区 */}
        <div
          key={active}
          style={{ animation: 'fadeIn 0.35s ease-out' }}
        >
          <CareerHeader
            title={data.title}
            subtitle={data.subtitle}
            tagline={data.tagline}
            accentColor={data.accentColor}
          />
          <CoreCompetencies
            competencies={data.coreCompetencies}
            accentColor={data.accentColor}
          />
          <ProjectList
            projects={data.projects}
            accentColor={data.accentColor}
          />
          {data.honors && (
            <div style={{ marginTop: 40, textAlign: 'center' }}>
              <h3 style={{ marginBottom: 16 }}>荣誉</h3>
              {data.honors.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 24px',
                    borderRadius: 'var(--radius-md)',
                    background: `${data.accentColor}10`,
                    border: `1px solid ${data.accentColor}30`,
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}
                >
                  🏆 {h.title} —— {h.detail}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
