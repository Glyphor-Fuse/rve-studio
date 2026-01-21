import { motion } from 'framer-motion';

const GlyphorBadge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-8 left-8 z-[100]"
    >
      <div className="glass px-4 py-2 rounded-full flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-lavender animate-pulse" />
        <span className="text-[10px] font-medium tracking-tighter text-ink/70">
          DESIGNED BY <span className="font-bold">GLYPHOR FUSE</span>
        </span>
      </div>
    </motion.div>
  );
};

export default GlyphorBadge;