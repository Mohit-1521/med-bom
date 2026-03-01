import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Propositions', href: '#propositions' },
    { name: 'Team', href: '#team' },
    { name: 'Editions', href: '#previous-editions' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all var(--transition-normal)',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        background: isScrolled ? 'rgba(2, 6, 23, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? 'var(--glass-border)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/assets/logo/medbom-logo.jpeg"
            alt="MedBOM Logo"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Mediation Bombay
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    fontSize: '1rem',
                  }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="mobile-toggle"
          style={{
            display: 'block',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--color-primary)',
          borderBottom: 'var(--glass-border)',
          padding: '1rem 0'
        }}>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '1rem var(--container-padding)',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Embedded CSS for media queries since we used inline styles mostly */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
