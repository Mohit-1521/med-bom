import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: "Dr. Tanaya Kamlakar",
        role: "Faculty Convener",
        image: "/assets/Chairs/Faculty Convener - Dr. Tanaya Kamlakar.jpeg",
        message: "\"Mediation Bombay is not only a flagship event of our university but also a reflection of the values of dialogue, empathy, and problem-solving that we strive to instill. It fills me with pride to see our students carry forward this vision with such passion and dedication.\""
    },
    {
        name: "Arin Agrawal",
        role: "Chairperson",
        image: "/assets/Chairs/Chairperson - Arin Agrawal.jpeg",
        message: "\"This event is so much more than a competition, it is a space where ideas meet, conversations flow, and lasting connections are built. Leading the team has shown me the power of collaboration, trust, and the shared belief that mediation can truly shape the way we resolve conflicts.\""
    },
    {
        name: "Nazifa Khateeb",
        role: "Head of Operations",
        image: "/assets/Chairs/Head of Operations - Nazifa Khateeb.JPG",
        message: "\"Behind the scenes, I saw the spirit, energy, and passion that makes MedBom so special. It was never just about operations it was about the people, the shared vision, and the bonds we built while making it all happen.\""
    },
    {
        name: "Vikhyat Sharma",
        role: "Associate Chairperson",
        image: "/assets/Chairs/Associate Chairperson - Vikhyat Sharma.jpeg",
        message: "\"To work behind the scenes of a forum that hosts world-class judges and welcomes exceptional teams from across the globe has been a privilege in itself. Mediation Bombay has been a masterclass in teamwork, excellence, and perseverance.\""
    }
];

const Team = () => {
    return (
        <section id="team" className="section" style={{ background: 'var(--bg-main)' }}>
            <div className="container">

                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Meet the Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        The dedicated individuals behind Mediation Bombay 6.0 who make it all possible.
                    </motion.p>
                </div>

                <div className="grid-responsive-2col" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto 4rem auto'
                }}>
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel"
                            style={{
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                            }}
                        >
                            <div style={{
                                height: '350px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="img-cover"
                                    style={{
                                        transition: 'transform 0.5s ease',
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '50px 1.5rem 1.5rem',
                                    background: 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0) 100%)',
                                    zIndex: 1
                                }}>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{member.name}</h3>
                                    <p style={{ margin: 0, color: 'var(--color-accent)', fontWeight: 500, fontSize: '0.95rem' }}>{member.role}</p>
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <p style={{
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    fontStyle: 'italic',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '0',
                                    flexGrow: 1
                                }}>
                                    {member.message}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel"
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '3rem',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* subtle background glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, var(--color-accent-light) 0%, transparent 60%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', fontSize: '1.5rem' }}>
                            Message from the OC
                        </h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                            "As you prepare to join us in the vibrant heart of this city, know that our team is buzzing with excitement. Bombay isn't just a backdrop; its spirit of relentless energy and its unique monsoon charm will be a part of the experience we've crafted for you. While this is a prime opportunity to hone your professional skills, it's also a chance to connect with talented peers, build friendships over cutting chai, and explore the city's magic."
                        </p>
                        <p style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                            Until we meet in Bombay,<br />
                            <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '1rem' }}>The Mediation Bombay Organizing Committee</span>
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Team;
