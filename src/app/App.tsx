import { CountdownTimer } from './components/CountdownTimer';
import { MusicToggle } from './components/MusicToggle';
import { ScrollProgress } from './components/ScrollProgress';
import { EventCard } from './components/EventCard';
import { FunFactCard } from './components/FunFactCard';
import { FloatingShapes } from './components/FloatingShapes';
import { ScrollIndicator } from './components/ScrollIndicator';
import { GiftSection } from './components/GiftSection';
import { CTASection } from './components/CTASection';
import { Coffee, UtensilsCrossed, Pizza } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <MusicToggle />
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
              <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-[#7FB0E8] to-[#5A9AD6] bg-clip-text text-transparent px-4">
                Paola cumple años — y este año lo celebramos TODO el día.
              </h1>
            </div>

            <div className="text-xl sm:text-2xl text-gray-600 mb-12">
              27 de Marzo 2026 · Puerto Escondido
            </div>

            <CountdownTimer />
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
          <h2 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#7FB0E8] to-[#5A9AD6] bg-clip-text text-transparent">
            Desayuno
          </h2>
          <p className="text-lg text-gray-600">Primera parada del día</p>
        </motion.div>

        <EventCard
          title="Desayuno"
          subtitle="Empezamos el día juntos"
          time="9:30 AM"
          location="Oh la la !"
          address="Benito Juárez, Rinconada, 71983 Puerto Escondido, Oaxaca"
          icon={Coffee}
          mapUrl="https://www.google.com/maps/search/?api=1&query=Oh+la+la+Benito+Juárez+Rinconada+71983+Puerto+Escondido+Oaxaca"
        />
      </section>

      {/* Fun Fact 1 */}
      <section className="py-12 px-4 sm:px-6">
        <FunFactCard
          question="¿Cuál es mi desayuno favorito?"
          answer="Si adivinaste algo con pan dulce o café… probablemente vas bien."
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
          <h2 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#7FB0E8] to-[#5A9AD6] bg-clip-text text-transparent">
            Lunch
          </h2>
          <p className="text-lg text-gray-600">Seguimos celebrando</p>
        </motion.div>

        <EventCard
          title="Lunch"
          subtitle="Una pausa deliciosa"
          time="2:30 PM"
          location="Restaurant Sotavento"
          address="C. Sexta Sur 3, Sector Hidalgo, 71983 Puerto Escondido, Oax."
          icon={UtensilsCrossed}
          mapUrl="https://www.google.com/maps/search/?api=1&query=Restaurant+Sotavento+C.+Sexta+Sur+3+Sector+Hidalgo+71983+Puerto+Escondido"
        />
      </section>

      {/* Fun Fact 2 */}
      <section className="py-12 px-4 sm:px-6">
        <FunFactCard
          question="¿Cuántos países he visitado?"
          answer="Más de los que imaginabas."
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
          <h2 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#7FB0E8] to-[#5A9AD6] bg-clip-text text-transparent">
            Dinner
          </h2>
          <p className="text-lg text-gray-600">Cerramos el día celebrando</p>
        </motion.div>

        <EventCard
          title="Dinner"
          subtitle="Gran final del día"
          time="8:00 PM"
          location="Chez La Mamma"
          address="Cerrada de Pargos 97, Rinconada, 71983 Puerto Escondido, Oax."
          icon={Pizza}
          mapUrl="https://www.google.com/maps/search/?api=1&query=Chez+La+Mamma+Cerrada+de+Pargos+97+Rinconada+71983+Puerto+Escondido"
        />
      </section>

      {/* Fun Fact 3 */}
      <section className="py-12 px-4 sm:px-6">
        <FunFactCard
          question="¿Qué canción no puede faltar en una fiesta para mí?"
          answer="Esa que te hace bailar aunque digas que no bailas 💃"
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
