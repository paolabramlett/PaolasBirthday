import { CountdownTimer } from './components/CountdownTimer';
import { ScrollProgress } from './components/ScrollProgress';
import { EventCard } from './components/EventCard';
import { FunFactCard } from './components/FunFactCard';
import { FloatingShapes } from './components/FloatingShapes';
import { ScrollIndicator } from './components/ScrollIndicator';
import { GiftSection } from './components/GiftSection';
import { CTASection } from './components/CTASection';
import { Coffee, UtensilsCrossed, TreePalm } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize background music
    // Note: Auto-playing audio may be blocked by browsers. User interaction might be required.
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set to 30% volume
      audioRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Background Music - Replace src with your audio file */}
      {/* To use this: Download the audio from YouTube and add it to /public folder */}
      {/* Then update src to "/your-audio-file.mp3" */}
      <audio ref={audioRef} loop>
        <source src="/birthday-music.mp3" type="audio/mpeg" />
      </audio>

      <ScrollProgress />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
        <FloatingShapes />
        
        <div className="text-center relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl sm:text-8xl mb-4"
              >
                🎉
              </motion.div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-[#9368B0] to-[#7D4E9F] bg-clip-text text-transparent px-4">
                ¡Paola cumple 34 años!
              </h1>
            </div>

            <div className="text-xl sm:text-2xl text-gray-600 mb-12">
             <strong> ... y este año lo celebramos TODO el día. </strong>
            </div>

            <div className="flex justify-center">
              <CountdownTimer />
            </div>
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Breakfast Section */}
      <section id="breakfast" className="py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#9368B0] to-[#7D4E9F] bg-clip-text text-transparent">
            Desayuno
          </h2>
          <p className="text-lg text-gray-600">Primera parada del día</p>
        </motion.div>

        <EventCard
          title="Desayuno"
          subtitle="Empezamos el día juntos ❤️"
          time="8:30 AM"
          location="Oh la la !"
          address="Benito Juárez, Rinconada, 71983 Puerto Escondido, Oaxaca"
          icon={Coffee}
          mapUrl="https://maps.app.goo.gl/Vf1q64vtnFMDopF59"
        />
      </section>

      {/* Fun Fact 1 */}
      <section className="py-12 px-4 sm:px-6">
        <FunFactCard
          question="¿Cuáles son mis dos artistas favoritos?"
          answer="Arctic Monekys & Lykke Li"
        />
      </section>

      {/* Lunch Section */}
      <section id="lunch" className="py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#9368B0] to-[#7D4E9F] bg-clip-text text-transparent">
            Comida
          </h2>
          <p className="text-lg text-gray-600">Seguimos celebrando</p>
        </motion.div>

        <EventCard
          title="Comida"
          subtitle="Una pausa deliciosa en un restaurant riquísimo"
          time="2:30 PM"
          location="Restaurant Sotavento"
          address="C. Sexta Sur 3, Sector Hidalgo, 71983 Puerto Escondido, Oax."
          icon={UtensilsCrossed}
          mapUrl="https://maps.app.goo.gl/LckK4UBVzriBDq95A"
        />
      </section>

      {/* Fun Fact 2 */}
      <section className="py-12 px-4 sm:px-6">
        <FunFactCard
          question="¿Qué ciudad siempre ha sido mi sueño conocer?"
          answer="¡Londres! 🇬🇧 ¿Adivinaste?"
        />
      </section>

      {/* Dinner Section */}
      <section id="dinner" className="py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#9368B0] to-[#7D4E9F] bg-clip-text text-transparent">
            Cena
          </h2>
          <p className="text-lg text-gray-600">Cerramos el día celebrando</p>
        </motion.div>

        <EventCard
          title="Cena"
          subtitle="Tacos de la Playita 🌮"
          time="7:00 PM"
          location="Chez La Mamma"
          address="Cerrada de Pargos 97, Rinconada, 71983 Puerto Escondido, Oax."
          icon={TreePalm}
          mapUrl="https://maps.app.goo.gl/Jzfw9cnW3AWVM26h8"
        />
      </section>

      {/* Fun Fact 3 */}
      <section className="py-12 px-4 sm:px-6">
        <FunFactCard
          question="¿Qué quería der de grande cuando era chica?"
          answer="Escritora 📚 solo los grandes conocedores se sabían esa"
        />
      </section>

      {/* Gift Section */}
      <GiftSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 text-sm">
        <p>Hecho con ❤️ para la celebración de Paola</p>
        <p className="mt-2">27 de Marzo 2026 · Puerto Escondido</p>
      </footer>
    </div>
  );
}