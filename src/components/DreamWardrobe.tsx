import { motion } from 'framer-motion';

const DreamWardrobe = () => {
  const items = [
    { title: "Luminous Silk", size: "col-span-2 row-span-2", img: "https://images.pexels.com/photos/31034511/pexels-photo-31034511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { title: "The Void Suit", size: "col-span-1 row-span-1", img: "https://images.pexels.com/photos/20449236/pexels-photo-20449236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { title: "Aether Gown", size: "col-span-1 row-span-2", img: "https://images.pexels.com/photos/9695150/pexels-photo-9695150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { title: "Fluid Form", size: "col-span-1 row-span-1", img: "https://images.pexels.com/photos/5941784/pexels-photo-5941784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  ];

  return (
    <section className="py-32 px-8 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="text-6xl md:text-8xl max-w-xl">The Dream Wardrobe.</h2>
        <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-50 max-w-xs text-right">
          Curated by AI. Tailored for your digital twin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[1000px] md:h-[800px]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className={`${item.size} relative group overflow-hidden glass`}
          >
            <img 
              src={item.img} 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-widest text-pearl/60 mb-2">Collection 01</span>
              <h3 className="text-3xl text-pearl italic">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DreamWardrobe;