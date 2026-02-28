import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Propositions from './components/Propositions';
import Team from './components/Team';
import PreviousEditions from './components/PreviousEditions';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      <main>
        <Hero />
        <Sponsors />
        <About />
        <Testimonials />
        <Propositions />
        <Team />
        <PreviousEditions />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
