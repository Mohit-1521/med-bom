import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const Card = ({ title, children, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
            className="glass-panel"
            style={{
                padding: '2.5rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{
                width: '4px',
                height: '24px',
                background: 'var(--color-accent)',
                borderRadius: '4px',
                marginBottom: '1rem'
            }}></div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {title}
            </h3>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, flexGrow: 1 }}>
                {children}
            </div>
        </motion.div>
    );

    return (
        <section id="about" className="section" style={{ background: 'var(--bg-main)', position: 'relative' }}>

            {/* Decorative gradient */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(15, 23, 42, 0.8) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        About Mediation Bombay
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A platform for aspiring mediators and negotiators worldwide, bridging Asian legal talent with the global ADR community.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <Card title="The Competition" delay={0.2}>
                            <p>
                                Mediation Bombay 6.0 is a celebration of excellence and innovation in dispute resolution. Over five successful editions, it has grown into India's premier mediation competition and remains the only one in the country to feature a unique tripartite finals format, simulating real-world disputes between parties, counsels, and mediators.
                            </p>
                        </Card>

                        <Card title="Our Vision" delay={0.3}>
                            <p>
                                At Mediation Bombay, we aim to nurture, foster, and enhance the growth and quality of Alternative Dispute Resolution (ADR) practices in India. We strive to change the notion and perception of mediation. We seek to emphasize that speaking up is not interference, sharing perspectives isn't bias, and a mediator is far more than just a mere recorder or facilitator.
                            </p>
                        </Card>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <Card title="Our University" delay={0.4}>
                            <p>
                                Founded in 2014, Maharashtra National Law University Mumbai (MNLU Mumbai) is one of India's youngest yet most dynamic National Law Universities. Beyond academic excellence, the University is defined by its strong sense of community and its belief that law students are not just future lawyers, but changemakers, thinkers, and leaders.
                            </p>
                        </Card>

                        <Card title="The ADR Society" delay={0.5}>
                            <p>
                                The Alternative Dispute Resolution Society (ADRS) of MNLU Mumbai is a dynamic, student-led platform dedicated to honing skills in mediation, negotiation, and arbitration. Recognised among the top four campus mediation societies in India at the Maadhyam-PACT National ADR Board Awards 2023, ADRS remains committed to expanding awareness and excellence in ADR.
                            </p>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
