import React from 'react';
import { motion } from 'framer-motion';

// Using a selection of the actual images from the folders
const galleryImages = [
    "/assets/Gallery2/DSC_0820.JPG",
    "/assets/Gallery2/IMG_0002.JPG",
    "/assets/Gallery2/IMG_0648.JPG",
    "/assets/Gallery2/Screenshot.png",
    "/assets/Gallery2/IMG_0887.JPG",
    "/assets/Gallery2/IMG_0550.JPG"
];

const Gallery = () => {
    return (
        <section id="gallery" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">

                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Memories of MedBOM
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Glimpses from our previous editions showcasing the spirit, competition, and camaraderie.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    gridAutoRows: '250px' // force uniform height for simple grid
                }}>
                    {galleryImages.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{
                                borderRadius: 'var(--border-radius-md)',
                                overflow: 'hidden',
                                position: 'relative',
                                cursor: 'pointer',
                            }}
                            className="gallery-item"
                        >
                            <img
                                src={src}
                                alt={`MedBOM Memory ${idx + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    border: 'var(--glass-border)'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                                onFocus={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
