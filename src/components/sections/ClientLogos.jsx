import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder client logos - replace with actual client logos
const clients = [
  { name: 'TechCorp', industry: 'Technology' },
  { name: 'FinanceHub', industry: 'FinTech' },
  { name: 'HealthPlus', industry: 'Healthcare' },
  { name: 'EduWorld', industry: 'Education' },
  { name: 'RetailMax', industry: 'E-commerce' },
  { name: 'LogiTrans', industry: 'Logistics' },
  { name: 'CloudNet', industry: 'SaaS' },
  { name: 'BioMed', industry: 'Biotechnology' },
  { name: 'AutoDrive', industry: 'Automotive' },
  { name: 'EnergyPlus', industry: 'Energy' },
  { name: 'MediaStream', industry: 'Media' },
  { name: 'SecureBank', industry: 'Banking' }
];

export default function ClientLogos() {
  const [touchedCard, setTouchedCard] = useState(null);
  
  return (
    <section className="py-2 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e60a11]/10 text-[#e60a11] text-sm font-bold uppercase tracking-widest border border-[#e60a11]/20">
            Trusted Partners
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Organizations That Trust CoreSec
          </h2>
          
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From startups to large enterprises, organizations trust CoreSec to design 
            secure and scalable digital systems that drive real growth.
          </p>
        </motion.div>

        {/* Client Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <ClientLogoCard key={index} client={client} index={index} isTouched={touchedCard === index} onTouched={() => setTouchedCard(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogoCard({ client, index, isTouched, onTouched }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={(e) => {
        e.preventDefault();
        onTouched();
      }}
      className={`bg-white p-8 rounded-2xl border transition-all duration-300 cursor-pointer group shadow-sm ${isTouched ? 'border-[#e60a11] shadow-xl' : 'border-slate-200 hover:border-[#e60a11] hover:shadow-xl'}`}
    >
      {/* Logo Placeholder - Replace with actual logo images */}
      <div className="aspect-video flex items-center justify-center mb-4">
        <div className={`w-full h-full rounded-lg flex items-center justify-center transition-all duration-300 ${isTouched ? 'bg-gradient-to-br from-[#e60a11]/10 to-transparent' : 'bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-[#e60a11]/10 group-hover:to-transparent'}`}>
          <span className={`text-4xl font-black transition-colors duration-300 ${isTouched ? 'text-[#e60a11]' : 'text-slate-300 group-hover:text-[#e60a11]'}`}>
            {client.name.charAt(0)}
          </span>
        </div>
      </div>
      
      {/* Client Info */}
      <div className="text-center">
        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${isTouched ? 'text-[#e60a11]' : 'text-slate-900 group-hover:text-[#e60a11]'}`}>
          {client.name}
        </h3>
        <p className="text-sm text-slate-500">{client.industry}</p>
      </div>
    </motion.div>
  );
}
