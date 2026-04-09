import React from 'react';
import { motion } from 'framer-motion';

const techLogos = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '📦' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Ethereum', icon: 'Ξ' },
  { name: 'Flutter', icon: '📱' },
];

export default function TechStack() {
  return (
    <section className="py-1 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">
          Trusted Technology Stack
        </p>
        
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-16"
            animate={{ x: [0, -1280] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...techLogos, ...techLogos].map((tech, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1, grayscale: 0 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-4xl grayscale opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300"
              >
                <span>{tech.icon}</span>
                <span className="text-lg font-bold text-slate-700 whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
