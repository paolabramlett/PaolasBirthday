import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <span className="text-sm text-gray-600">Desliza para explorar</span>
      <div className="w-6 h-10 rounded-full border-2 border-[#7FB0E8] flex items-start justify-center p-1">
        <motion.div
          className="w-1.5 h-1.5 bg-[#7FB0E8] rounded-full"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <ChevronDown className="w-5 h-5 text-[#7FB0E8]" />
    </motion.div>
  );
}
