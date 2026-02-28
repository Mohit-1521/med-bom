import React from 'react';

const sponsors = [
    { name: 'White & Brief', logo: '/assets/Sponsors/W&B.jpeg' },
    { name: 'SCC Times', logo: '/assets/Sponsors/SCC.jpeg' },
    { name: 'Pioneer Legal', logo: '/assets/Sponsors/PL.jpeg' },
    { name: 'AIA', logo: '/assets/Sponsors/AIA.jpeg' },
    { name: 'BBA', logo: '/assets/Sponsors/BBA.jpeg' }
];

const Sponsors = () => {
    // Triple the array to create a seamless infinite loop effect
    const carouselItems = [...sponsors, ...sponsors, ...sponsors];

    return (
        <section className="section" style={{ background: 'var(--bg-main)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '4rem 0' }}>
            <div className="container">
                <h3 style={{
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    marginBottom: '3rem',
                    fontSize: '1.25rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-heading)'
                }}>
                    Our Sponsors
                </h3>

                <div style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                    <div className="sponsors-track" style={{
                        display: 'flex',
                        gap: '4rem',
                        alignItems: 'center',
                        width: 'max-content',
                        animation: 'scroll 40s linear infinite'
                    }}>
                        {carouselItems.map((sponsor, idx) => (
                            <div key={idx} style={{
                                width: '260px',
                                height: '140px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            }}>
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        mixBlendMode: 'multiply' // Helps remove white backgrounds if any
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 3 - 1.33rem)); }
          }
          .sponsors-track:hover {
            animation-play-state: paused;
          }
        `}</style>
            </div>
        </section>
    );
};

export default Sponsors;
