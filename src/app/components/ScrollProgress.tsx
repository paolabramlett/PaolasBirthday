import { useState, useEffect } from 'react';
import { Coffee, UtensilsCrossed, Pizza, Gift, CheckCircle } from 'lucide-react';

const sections = [
  { id: 'breakfast', label: 'Desayuno', icon: Coffee },
  { id: 'lunch', label: 'Lunch', icon: UtensilsCrossed },
  { id: 'dinner', label: 'Dinner', icon: Pizza },
  { id: 'gifts', label: 'Regalos', icon: Gift },
  { id: 'rsvp', label: 'RSVP', icon: CheckCircle },
];

export function ScrollProgress() {
  const [activeSection, setActiveSection] = useState('breakfast');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-[#7FB0E8]/20">
        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`p-2 rounded-full transition-all duration-300 group relative ${
                  isActive
                    ? 'bg-gradient-to-br from-[#7FB0E8] to-[#5A9AD6] text-white scale-110'
                    : 'text-gray-400 hover:text-[#7FB0E8] hover:bg-gray-50'
                }`}
                aria-label={section.label}
              >
                <Icon className="w-5 h-5" />
                <span className="absolute left-full ml-4 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
