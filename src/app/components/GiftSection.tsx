import { motion } from 'motion/react';
import { Gift, ExternalLink, Sparkles } from 'lucide-react';

export function GiftSection() {
  return (
    <motion.section
      id="gifts"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FED805]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-6"
        >
          <div className="bg-gradient-to-br from-[#9368B0] to-[#7D4E9F] w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl">
            <Gift className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-[#9368B0] to-[#7D4E9F] bg-clip-text text-transparent">
          Mesa de Regalos
        </h2>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#FED805]" />
            <p className="text-xl text-gray-700">
              Si te preguntas qué regalar…
            </p>
          </div>
          <p className="text-2xl text-gray-800 mb-8">
            aquí está la respuesta 😌
          </p>

          <a
            href="https://www.amazon.com.mx/hz/wishlist/ls/2IWOZXUIZSWB?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9368B0] to-[#7D4E9F] text-white px-8 py-4 rounded-full text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Ver Wishlist</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              <Gift className="w-8 h-8 text-[#FED805] opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}