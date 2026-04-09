import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { TrendingUp, Award, Globe, Brain, Clock, Building } from 'lucide-react';

const metrics = [
  {
    icon: <TrendingUp size={32} />,
    value: 120,
    suffix: '+',
    title: 'Projects Delivered',
    description: 'Secure and scalable solutions deployed across industries.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: <Award size={32} />,
    value: 98,
    suffix: '%',
    title: 'Client Satisfaction',
    description: 'Consistently delivering exceptional results and experiences.',
    color: 'from-red-600 to-red-500'
  },
  {
    icon: <Globe size={32} />,
    value: 15,
    suffix: '+',
    title: 'Countries Served',
    description: 'Global reach with localized support and expertise.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: <Brain size={32} />,
    value: 30,
    suffix: '+',
    title: 'AI Systems Deployed',
    description: 'Cutting-edge AI solutions powering intelligent businesses.',
    color: 'from-red-700 to-purple-600'
  },
  {
    icon: <Clock size={32} />,
    value: 6,
    suffix: '+',
    title: 'Years Experience',
    description: 'Proven track record of innovation and excellence.',
    color: 'from-purple-600 to-blue-600'
  },
  {
    icon: <Building size={32} />,
    value: 20,
    suffix: '+',
    title: 'Enterprise Clients',
    description: 'Trusted by industry leaders and Fortune companies.',
    color: 'from-blue-600 to-cyan-600'
  }
];

export default function ImpactMetrics() {
  return (
    <section className="py-2 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e60a11]/20 text-[#e60a11] text-sm font-bold uppercase tracking-widest border border-[#e60a11]/30"
          >
            Proven Impact
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Proven Impact Through Technology
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Our work speaks through measurable results — successful deployments, satisfied clients, 
            and scalable systems powering businesses worldwide.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-[#e60a11]/50 transition-all duration-300 group"
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} text-white mb-6 shadow-lg group-hover:shadow-[#e60a11]/30 transition-shadow duration-300`}>
        {metric.icon}
      </div>

      {/* Animated Number */}
      <div className="mb-3">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-5xl font-black text-white"
        >
          {useCounter(isInView ? metric.value : 0)}
          {metric.suffix}
        </motion.span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">
        {metric.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed">
        {metric.description}
      </p>
    </motion.div>
  );
}

// Custom hook for counting animation
function useCounter(end, duration = 2000) {
  const [count, setCount] = React.useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
}
