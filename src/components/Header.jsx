import { useState, useEffect } from 'react';
import { personalInfo } from '../data/common';

const navItems = [
  { key: 'about', label: '关于我' },
  { key: 'aigc', label: 'AIGC' },
  { key: 'finance', label: 'AI 财务' },
  { key: 'pm', label: 'AI 产品' },
];

export default function Header() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'about';
      setActive(hash);
    };
    const onScroll = () => setScrolled(window.scrollY > 30);

    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNav = (key) => {
    window.location.hash = key;
    setMenuOpen(false);
  };

  return (
    <header
      className={`header${scrolled ? ' header--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(10,10,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--content-max-width)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleNav('about'); }}
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              onClick={(e) => { e.preventDefault(); handleNav(item.key); }}
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                fontWeight: active === item.key ? 600 : 400,
                color: active === item.key ? 'var(--text-primary)' : 'var(--text-muted)',
                background: active === item.key ? 'rgba(168,85,247,0.12)' : 'transparent',
                transition: 'var(--transition)',
              }}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: 4,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            background: 'rgba(16,16,40,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              onClick={(e) => { e.preventDefault(); handleNav(item.key); }}
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '1rem',
                fontWeight: active === item.key ? 600 : 400,
                color: active === item.key ? 'var(--accent-purple)' : 'var(--text-secondary)',
                background: active === item.key ? 'rgba(168,85,247,0.1)' : 'transparent',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Inline mobile menu styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-link { display: none !important; }
          .menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
