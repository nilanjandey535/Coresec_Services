import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" } : {}}
      className={`bg-white p-8 rounded-2xl border border-slate-100 ${
        hover ? 'hover:bg-[#0a0505] hover:text-white transition-all duration-300 hover:border-[#e60a11]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
