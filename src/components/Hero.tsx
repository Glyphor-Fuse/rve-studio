import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 pt-32 pb-24">
      <div className="relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-xs uppercase tracking-[0.4em] mb-8 font-medium opacity-60">The Future of Fabric</h2>
          <h1 className="text-8xl md:text-[12rem] lg:text-[16rem] font-serif leading-[0.8] mb-12">
            Imagined<br />
            <span className="italic ml-12 md:ml-32">Realities.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row items-end gap-12 mt-12">
          <motion.div 
            style={{ y: y1 }}
            className="w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-sm glass p-2"
          >
            <img 
              src="https://images.pexels.com/photos/30350434/pexels-photo-30350434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
              alt="Editorial 1"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="flex-1 max-w-md pb-12"
          >
            <p className="text-xl font-light leading-relaxed mb-8 text-ink/80">
              Rêve is a digital sanctuary where the boundaries of physics dissolve. Experience high-fashion through an AI-enhanced lens that mirrors your soul, not just your silhouette.
            </p>
            <div className="flex gap-8 items-center">
              <button className="group flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
                Launch Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-50">
                <Play className="w-3 h-3 fill-current" /> Watch Film
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 right-0 w-1/3 h-[600px] -z-0 opacity-40 blur-3xl rounded-full bg-lavender/50"
      />
    </section>
  );
};

export default Hero;