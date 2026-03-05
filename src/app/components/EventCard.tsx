import { LucideIcon, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface EventCardProps {
  title: string;
  subtitle: string;
  time: string;
  location: string;
  address: string;
  icon: LucideIcon;
  mapUrl: string;
}

export function EventCard({ title, subtitle, time, location, address, icon: Icon, mapUrl }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="bg-gradient-to-br from-[#7FB0E8] to-[#5A9AD6] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-3xl mb-2">{title}</h3>
            <p className="text-white/90">{subtitle}</p>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#FED805]/10 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-[#FED805]" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Hora</div>
              <div className="text-lg">{time}</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#7FB0E8]/10 p-3 rounded-xl">
              <MapPin className="w-6 h-6 text-[#7FB0E8]" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Lugar</div>
              <div className="text-lg">{location}</div>
              <div className="text-sm text-gray-600 mt-1">{address}</div>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-[#7FB0E8] to-[#5A9AD6] text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center hover:scale-105"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </motion.div>
  );
}
