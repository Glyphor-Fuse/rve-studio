import { motion } from 'framer-motion';

const MoodSearch = () => {
  return (
    <section className="py-32 px-8 bg-ink text-pearl relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.5em] mb-16 opacity-40"
        >
          Prompt the Aesthetic
        </motion.p>
        
        <div className="relative group">
          <input 
            type="text" 
            placeholder="E.g. 'A rainy afternoon in Kyoto'"
            className="w-full bg-transparent border-b border-pearl/20 py-8 text-3xl md:text-6xl font-serif text-center focus:outline-none focus:border-pearl/80 transition-colors"
          />
          <div className="absolute bottom-0 left-0 h-[2px] bg-mist w-0 group-focus-within:w-full transition-all duration-1000" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 opacity-40 text-[10px] uppercase tracking-widest">
          <span>Midnight Jazz</span>
          <span>•</span>
          <span>Digital Brutalism</span>
          <span>•</span>
          <span>Alpine Minimal</span>
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 w-64 h-64 glass rounded-full opacity-10"
      />
    </section>
  );
};

export default MoodSearch;