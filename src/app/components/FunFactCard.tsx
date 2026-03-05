import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface FunFactCardProps {
  question: string;
  answer: string;
}

export function FunFactCard({ question, answer }: FunFactCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-gradient-to-br from-[#FED805]/10 to-[#FED805]/5 rounded-3xl p-8 border-2 border-[#FED805]/20">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-[#FED805]" />
          <h4 className="text-xl text-gray-700">¿Cuánto sabes de Paola?</h4>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-4 shadow-md">
          <p className="text-lg text-gray-800">{question}</p>
        </div>

        {!isRevealed ? (
          <button
            onClick={() => setIsRevealed(true)}
            className="w-full bg-gradient-to-r from-[#7FB0E8] to-[#5A9AD6] text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
          >
            <span>Revelar respuesta</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#7FB0E8] to-[#5A9AD6] rounded-2xl p-6 text-white shadow-lg"
          >
            <div className="text-sm opacity-90 mb-2">Respuesta:</div>
            <p className="text-lg">{answer}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
