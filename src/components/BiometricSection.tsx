import { motion } from 'framer-motion';

const BiometricSection = () => {
  return (
    <section className="py-32 px-8 md:px-24 flex flex-col md:flex-row gap-24 items-center">
      <div className="flex-1 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -top-12 -left-12 text-[12rem] font-serif opacity-5 select-none">01</div>
          <h2 className="text-6xl md:text-8xl mb-8">Biometric<br /><span className="italic">Poetry.</span></h2>
          <p className="text-xl font-light leading-relaxed text-ink/70 mb-12 max-w-md">
            Our 3D body-mapping technology doesn't just measure dimensions. It captures the essence of your movement, ensuring fabric flows with the weight of reality.
          </p>
          <ul className="space-y-6">
            {['Precision Mapping', 'Physics Simulation', 'Thermal Fit Analysis'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold">
                <span className="w-8 h-[1px] bg-ink" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="flex-1 order-1 md:order-2 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="aspect-square glass rounded-full relative flex items-center justify-center overflow-hidden"
        >
          <img 
            src="<span className="block"><img src="https://images.pexels.com/photos/5374862/pexels-photo-5374862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="From below of high concrete building with metal constructions on roof against clear sky" loading="lazy" /><a href="https://www.pexels.com/photo/futuristic-modern-building-with-unusual-details-5374862/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Lucky on Pexels</a></span>" 
            className="w-4/5 h-4/5 object-contain opacity-40 mix-blend-multiply"
            alt="Biometric Scan"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[1px] border-dashed border-ink/10 rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-lavender/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default BiometricSection;