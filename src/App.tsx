import { useEffect } from 'react';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import GlyphorBadge from './utils/GlyphorBadge';

function App() {
  return (
    <main className="relative min-h-screen">
      <div className="noise-overlay" />
      <Navbar />
      <Index />
      <GlyphorBadge />
    </main>
  );
}

export default App;