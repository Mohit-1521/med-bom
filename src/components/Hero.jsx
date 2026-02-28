import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Trophy, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '80px', // Offset for navbar
                overflow: 'hidden'
            }}
        >
            {/* Background with overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
                {/* Placeholder gradient background */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, var(--bg-main) 0%, #0a1128 50%, var(--color-primary) 100%)',
                }}></div>

                {/* Abstract decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    opacity: 0.6
                }}></div>
            </div>

            <div className="container">
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--glass-bg)',
                            border: 'var(--glass-border)',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            marginBottom: '2rem',
                            color: 'var(--color-accent)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            <Trophy size={16} />
                            <span>India's Premier Mediation Competition</span>
                        </div>

                        <h1 style={{ marginBottom: '1.5rem' }}>
                            Mediation Bombay <span style={{ color: 'var(--color-accent)' }}>6.0</span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            maxWidth: '600px',
                            margin: '0 auto 3rem auto'
                        }}>
                            A celebration of excellence and innovation in dispute resolution. Experience the unique tripartite finals format bridging Asian legal talent with the global ADR community.
                        </p>
                    </motion.div>



                    {/* Quick Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="grid-responsive-2col"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1.5rem',
                            position: 'relative',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}
                    >
                        {[
                            { icon: <CalendarIcon size={24} />, title: "Date", text: "March 7-8, 2026" },
                            { icon: <MapPin size={24} />, title: "Location", text: "MNLU Mumbai" },
                            { icon: <Trophy size={24} />, title: "Format", text: "Tripartite Finals" },
                            { icon: <Award size={24} />, title: "Legacy", text: "6th Edition" }
                        ].map((info, idx) => (
                            <div
                                key={idx}
                                className="glass-panel quick-info-card"
                                style={{
                                    padding: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    textAlign: 'left',
                                    position: 'relative'
                                }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'var(--color-accent-light)',
                                    color: 'var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                                        {info.title}
                                    </h4>
                                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                        {info.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
