import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ 
  children, 
  className = '',
  bg = 'white',
  ...props 
}) {
  const backgrounds = {
    white: 'bg-white',
    black: 'bg-[#0a0505] text-white',
    slate: 'bg-slate-50',
    gradient: 'bg-gradient-to-br from-black to-gray-900 text-white'
  };
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-20 px-6 ${backgrounds[bg]} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}
