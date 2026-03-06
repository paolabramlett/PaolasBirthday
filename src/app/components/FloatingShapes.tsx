import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    { size: 60, color: '#9368B0', delay: 0, duration: 20, x: '10%', y: '20%' },
    { size: 40, color: '#FED805', delay: 2, duration: 25, x: '80%', y: '10%' },
    { size: 80, color: '#9368B0', delay: 4, duration: 30, x: '70%', y: '70%' },
    { size: 50, color: '#FED805', delay: 1, duration: 22, x: '20%', y: '80%' },
    { size: 35, color: '#9368B0', delay: 3, duration: 28, x: '90%', y: '50%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}