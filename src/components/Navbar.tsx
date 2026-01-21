import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="flex items-center gap-12">
        <a href="/" className="text-2xl font-serif italic tracking-widest uppercase">Rêve</a>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:opacity-50 transition-opacity">The Lab</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Wardrobe</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Atelier</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-[10px] uppercase tracking-[0.2em] border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500">
          Enter Mirror
        </button>
        <Menu className="w-5 h-5 cursor-pointer" />
      </div>
    </motion.nav>
  );
};

export default Navbar;