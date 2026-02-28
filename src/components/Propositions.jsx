import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const propositions = [
    {
        title: "Octa Finals Proposition",
        filename: "Octa Finals Proposition_MB6.0 pdf.pdf"
    },
    {
        title: "Quarter Finals Proposition",
        filename: "Quarter Finals Proposition_MB6.0.pdf"
    },
    {
        title: "Semi Finals Proposition",
        filename: "Semi Finals Proposition_MB 6.0.pdf"
    },
    {
        title: "Finals Proposition",
        filename: "Finals Proposition_MB 6.0.pdf"
    }
];

const Propositions = () => {
    return (
        <section id="propositions" className="section" style={{ background: 'var(--bg-main)', position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>
                        Competition <span style={{ color: 'var(--color-accent)' }}>Propositions</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        The official propositions for all stages of Mediation Bombay 6.0.
                    </p>
                </motion.div>

                <div className="grid-responsive-2col" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {propositions.map((prop, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5, boxShadow: 'var(--glass-shadow-strong)' }}
                        >
                            <a
                                href={`/assets/Propositions/${prop.filename}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    textDecoration: 'none',
                                    position: 'relative',
                                    height: '100%'
                                }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    background: 'var(--color-accent-light)',
                                    color: 'var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <FileText size={32} />
                                </div>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    {prop.title}
                                </h3>

                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--color-accent)',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    marginTop: 'auto'
                                }}>
                                    <ExternalLink size={16} /> Click to View
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Propositions;
