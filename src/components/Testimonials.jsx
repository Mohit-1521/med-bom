import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        author: "Akash Gupta",
        role: "Associate Professor at Jindal Global Law School",
        text: "My experience at the 2025 Mediation Bombay Finals was truly enriching, thanks to the diverse, multi-jurisdictional teams and the wide range of experienced Assessors. What sets Med Bom apart is the vibe match of the OC with the participants as well as the Assessors, this alignment creates a vibrant and collaborative atmosphere."
    },
    {
        author: "Government Law College, Mumbai",
        role: "Participant Team",
        text: "We did have a lot of fun. From one Mumbai college to other, the competition was really grand, especially for Mumbai standards which can be very difficult. Just wanted to drop in a line and thank you (and your team!) for the wonderful care right from day 1 until today. You were so kind and considerate."
    },
    {
        author: "Singapore Management University",
        role: "Participant Team",
        text: "Wanted to extend my thanks to the whole OC team for hosting us the past few days and congratulate you guys on a successful event. Appreciate all the time and effort you guys took to plan the different aspects of the competition."
    },
    {
        author: "National Law School India University",
        role: "Participant Team",
        text: "Had a super fun time at the tournament, insane job on organizing it, obviously took a ton of effort from a lot of people. Literally everything was taken care of and there was really nothing to complain about, so props to all of y'all for that!!!!"
    },
    {
        author: "Tamil Nadu National Law University",
        role: "Participant Team",
        text: "The OC made this entire trip really comfortable and memorable for us. All of us had a great time here! It's a Commendable job. And congratulations on a huge success!!"
    },
    {
        author: "Dr. Ram Manohar Lohiya National Law University",
        role: "Participant Team",
        text: "MedBom 5.0 was my first mediation competition outside my university, and it turned out to be an immensely enriching experience. The competition offered valuable exposure, helping me grow as a negotiator and gain confidence in my skills. The panel of judges, a majority of whom were young and dynamic lawyers... making their feedback both inspiring and insightful."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">

                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What People Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Hear from past participants, assessors, and institutions about their Mediation Bombay experience.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <Quote
                                size={80}
                                style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '-10px',
                                    color: 'var(--color-primary-light)',
                                    opacity: 0.3,
                                    transform: 'rotate(15deg)',
                                    zIndex: 0
                                }}
                            />
                            <div style={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
                                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                                    ★★★★★
                                </div>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                    fontStyle: 'italic',
                                    marginBottom: '1.5rem'
                                }}>
                                    "{t.text}"
                                </p>
                            </div>
                            <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{t.author}</h4>
                                <p style={{ margin: 0, color: 'var(--color-accent)', fontSize: '0.875rem' }}>{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
