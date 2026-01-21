import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 px-8 md:px-24 bg-pearl border-t border-mist">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl font-serif italic mb-8">Rêve Studio.</h2>
          <p className="max-w-xs text-sm text-ink/60 leading-loose">
            Redefining the relationship between the physical and the virtual. A sanctuary for the modern connoisseur of style.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Inquiries</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="hover:opacity-50 cursor-pointer">atelier@reve.studio</li>
            <li className="hover:opacity-50 cursor-pointer">Press relations</li>
            <li className="hover:opacity-50 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Connect</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="hover:opacity-50 cursor-pointer">Instagram</li>
            <li className="hover:opacity-50 cursor-pointer">Are.na</li>
            <li className="hover:opacity-50 cursor-pointer">Twitter (X)</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pt-12 border-t border-mist/50 text-[10px] uppercase tracking-[0.3em] opacity-40">
        <p>© 2024 Rêve Studio — All Rights Reserved</p>
        <p>Paris / New York / Tokyo</p>
      </div>
    </footer>
  );
};

export default Footer;