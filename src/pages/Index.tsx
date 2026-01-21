import { useRef } from 'react';
import Hero from '../components/Hero';
import DreamWardrobe from '../components/DreamWardrobe';
import BiometricSection from '../components/BiometricSection';
import MoodSearch from '../components/MoodSearch';
import Footer from '../components/Footer';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="iridescent-bg overflow-hidden">
      <Hero />
      <MoodSearch />
      <DreamWardrobe />
      <BiometricSection />
      <Footer />
    </div>
  );
};

export default Index;