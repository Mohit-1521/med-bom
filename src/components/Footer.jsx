import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-main)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '4rem 0 2rem',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <img
                                src="/assets/logo/medbom-logo.jpeg"
                                alt="MedBOM Logo"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                color: 'var(--text-primary)'
                            }}>
                                MedBOM <span style={{ color: 'var(--color-accent)' }}>6.0</span>
                            </span>
                        </div>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                            India's premier mediation competition, featuring a unique tripartite finals format that bridges Asian legal talent with the global ADR community.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#about" style={{ color: 'var(--text-muted)' }}>About Us</a></li>
                            <li><a href="#testimonials" style={{ color: 'var(--text-muted)' }}>Testimonials</a></li>
                            <li><a href="#propositions" style={{ color: 'var(--text-muted)' }}>Propositions</a></li>
                            <li><a href="#team" style={{ color: 'var(--text-muted)' }}>Meet the Team</a></li>
                            <li><a href="#previous-editions" style={{ color: 'var(--text-muted)' }}>Previous Editions</a></li>
                            <li><a href="#gallery" style={{ color: 'var(--text-muted)' }}>Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ color: 'var(--text-muted)' }}>
                                Maharashtra National Law University Mumbai (MNLU Mumbai)
                            </li>
                            <li style={{ color: 'var(--text-muted)' }}>
                                Mumbai, Maharashtra, India
                            </li>
                            <li>
                                <a href="mailto:adr@mnlumumbai.edu.in" style={{ color: 'var(--color-accent)' }}>adr@mnlumumbai.edu.in</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        &copy; {new Date().getFullYear()} Mediation Bombay. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
