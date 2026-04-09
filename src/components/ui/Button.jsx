import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = "font-bold rounded-xl transition-all";
  
  const variants = {
    primary: "bg-[#e60a11] text-white hover:bg-[#e60a11]/90 hover:shadow-2xl hover:shadow-[#e60a11]/40",
    secondary: "border-2 border-slate-200 text-slate-900 hover:bg-slate-50",
    outline: "border-2 border-[#e60a11] text-[#e60a11] hover:bg-[#e60a11] hover:text-white",
    white: "bg-white text-[#e60a11] hover:bg-gray-100"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
