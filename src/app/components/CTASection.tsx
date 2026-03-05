import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { MessageCircle, PartyPopper, Heart, Star } from 'lucide-react';

export function CTASection() {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            triggerConfetti();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('rsvp');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasTriggered]);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50;

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ['#7FB0E8', '#FED805', '#5A9AD6', '#FFE666'],
      });
    }, 250);
  };

  return (
    <motion.section
      id="rsvp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[#7FB0E8]/10 via-white to-[#FED805]/10"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          >
            {i % 4 === 0 && <PartyPopper className="w-6 h-6 text-[#FED805]" />}
            {i % 4 === 1 && <Heart className="w-5 h-5 text-[#7FB0E8]" />}
            {i % 4 === 2 && <Star className="w-4 h-4 text-[#FED805]" />}
            {i % 4 === 3 && <PartyPopper className="w-5 h-5 text-[#7FB0E8]" />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-8"
        >
          <PartyPopper className="w-16 h-16 text-[#FED805]" />
        </motion.div>

        <h2 className="text-4xl sm:text-6xl mb-6 bg-gradient-to-r from-[#7FB0E8] to-[#5A9AD6] bg-clip-text text-transparent">
          ¿Vienes a celebrar conmigo?
        </h2>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Confirma tu asistencia por WhatsApp y únete a este día especial lleno de celebración
        </p>

        <motion.a
          href="https://wa.link/39o0yf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <MessageCircle className="w-6 h-6 relative z-10" />
          <span className="relative z-10">Confirmar por WhatsApp</span>
        </motion.a>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#7FB0E8]" />
            <span>3 eventos especiales</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#FED805]" />
            <span>Un día completo de celebración</span>
          </div>
          <div className="flex items-center gap-2">
            <PartyPopper className="w-4 h-4 text-[#7FB0E8]" />
            <span>¡Te esperamos!</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
