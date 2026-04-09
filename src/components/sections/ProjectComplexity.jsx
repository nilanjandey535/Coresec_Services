import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Cpu } from 'lucide-react';

const complexityLevels = [
  {
    level: 'Level 1',
    title: 'Startup Systems',
    icon: <Zap size={40} />,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-600',
    label: 'Startup Friendly',
    features: [
      'MVP Development',
      'Landing Platforms',
      'Mobile Apps',
      'Small Business Automation'
    ],
    complexity: 30
  },
  {
    level: 'Level 2',
    title: 'Business Systems',
    icon: <TrendingUp size={40} />,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-600',
    label: 'Business Grade',
    features: [
      'Enterprise Websites',
      'Analytics Dashboards',
      'Inventory Systems',
      'Customer Platforms'
    ],
    complexity: 65
  },
  {
    level: 'Level 3',
    title: 'Advanced Deep Tech',
    icon: <Cpu size={40} />,
    color: 'from-red-600 to-orange-600',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-600',
    label: 'Enterprise & Deep Tech',
    features: [
      'AI Platforms',
      'Blockchain Ecosystems',
      'IoT Infrastructure',
      'Cloud Native Systems'
    ],
    complexity: 95
  }
];

export default function ProjectComplexity() {
  const [touchedCard, setTouchedCard] = useState(null);
  
  return (
    <section className="py-2 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e60a11]/10 text-[#e60a11] text-sm font-bold uppercase tracking-widest border border-[#e60a11]/20">
            Project Expertise
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Projects We Handle
          </h2>
          
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From startup MVPs to enterprise-grade deep tech solutions, 
            we deliver excellence at every complexity level.
          </p>
        </motion.div>

        {/* Complexity Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {complexityLevels.map((level, index) => (
            <ComplexityCard key={index} level={level} index={index} isTouched={touchedCard === index} onTouched={() => setTouchedCard(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplexityCard({ level, index, isTouched, onTouched }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={(e) => {
        e.preventDefault();
        onTouched();
      }}
      className={`relative bg-white p-8 rounded-2xl border shadow-lg transition-all duration-300 overflow-hidden group ${isTouched ? 'shadow-2xl border-red-300' : 'border-slate-200 hover:shadow-2xl'}`}
    >
      {/* Top Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${level.color}`}></div>
      
      {/* Background Pattern */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 ${level.bgColor} rounded-full blur-3xl transition-transform duration-500 ${isTouched ? 'scale-150' : 'group-hover:scale-150'}`}></div>

      {/* Icon & Level */}
      <div className="relative mb-6">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${level.bgColor} ${level.textColor} mb-4 border-2 ${level.borderColor} transition-all duration-300 ${isTouched ? 'scale-110' : 'group-hover:scale-110'}`}>
          {level.icon}
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`text-sm font-bold ${level.textColor} uppercase tracking-wider`}>
            {level.level}
          </span>
          
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${level.bgColor} ${level.textColor} border ${level.borderColor}`}>
            {level.label}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-black text-slate-900 mb-6">
        {level.title}
      </h3>

      {/* Features List */}
      <ul className="space-y-3 mb-6">
        {level.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color} mt-2 flex-shrink-0`}></div>
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Complexity Progress Bar */}
      <div className="relative pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-500 uppercase">Complexity</span>
          <span className={`text-sm font-black ${level.textColor}`}>{level.complexity}%</span>
        </div>
        
        <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level.complexity}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${level.color} rounded-full`}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
