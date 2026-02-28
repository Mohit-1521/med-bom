import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const editions = [
    {
        title: "Mediation Bombay 5.0",
        images: [
            '/assets/PreviousEditions/5_0_1.jpg',
            '/assets/PreviousEditions/5_0_2.jpeg',
        ]
    },
    {
        title: "Mediation Bombay 4.0",
        images: [
            '/assets/PreviousEditions/4_0_1.jpg',
            '/assets/PreviousEditions/4_0_2.jpg',
            '/assets/PreviousEditions/4_0_3.jpg',
            '/assets/PreviousEditions/4_0_4.jpg',
        ]
    }
];

const PreviousEditions = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="previous-editions" className="section" style={{ background: 'var(--bg-main)', position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>
                        Previous <span style={{ color: 'var(--color-accent)' }}>Editions</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A visual journey through the history and legacy of Mediation Bombay.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {editions.map((edition, idx) => (
                        <div key={idx}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    fontSize: '1.75rem',
                                    color: 'var(--color-accent)',
                                    marginBottom: '2rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    paddingBottom: '0.5rem',
                                    display: 'inline-block'
                                }}
                            >
                                {edition.title}
                            </motion.h3>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1.5rem'
                            }}>
                                {edition.images.map((img, imgIdx) => (
                                    <motion.div
                                        key={img}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
                                        className="gallery-item glass-panel"
                                        style={{
                                            height: '250px',
                                            borderRadius: 'var(--border-radius-lg)',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            position: 'relative'
                                        }}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${edition.title} showcase ${imgIdx + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                                display: 'block'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                            onFocus={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                                            pointerEvents: 'none'
                                        }}></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0, 0, 0, 0.9)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.1)'
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Enlarged view"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PreviousEditions;
